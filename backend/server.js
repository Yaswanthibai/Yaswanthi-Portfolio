const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Paths
const dataDir = path.join(__dirname, 'data');
const portfolioDataPath = path.join(dataDir, 'portfolioData.json');
const messagesFilePath = path.join(dataDir, 'messages.json');
const frontendDistPath = path.join(__dirname, '..', 'frontend', 'dist');

// Ensure data directory and messages.json exist
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}
if (!fs.existsSync(messagesFilePath)) {
  fs.writeFileSync(messagesFilePath, JSON.stringify([], null, 2), 'utf-8');
}

// API Health Check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    service: 'Yaswanthi Bai Portfolio API',
    endpoints: ['/api/portfolio', '/api/contact', '/api/messages', '/api/health']
  });
});

// GET /api/portfolio - Return complete portfolio data
app.get('/api/portfolio', (req, res) => {
  try {
    if (!fs.existsSync(portfolioDataPath)) {
      return res.status(404).json({ error: 'Portfolio data not found' });
    }
    const rawData = fs.readFileSync(portfolioDataPath, 'utf-8');
    const data = JSON.parse(rawData);
    res.json(data);
  } catch (error) {
    console.error('Error reading portfolio data:', error);
    res.status(500).json({ error: 'Failed to retrieve portfolio data' });
  }
});

// POST /api/contact - Handle contact inquiries
app.post('/api/contact', (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'Please provide name, email, and message.'
      });
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a valid email address.'
      });
    }

    let messages = [];
    if (fs.existsSync(messagesFilePath)) {
      try {
        const raw = fs.readFileSync(messagesFilePath, 'utf-8');
        messages = JSON.parse(raw);
      } catch (e) {
        messages = [];
      }
    }

    const newMessage = {
      id: 'msg_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7),
      name: name.trim(),
      email: email.trim(),
      subject: (subject || 'General Inquiry').trim(),
      message: message.trim(),
      receivedAt: new Date().toISOString()
    };

    messages.unshift(newMessage);
    fs.writeFileSync(messagesFilePath, JSON.stringify(messages, null, 2), 'utf-8');

    console.log(`[Contact Form] New message from ${name} (${email}): "${subject}"`);

    return res.status(201).json({
      success: true,
      message: 'Thank you! Your message has been received successfully. Yaswanthi will get back to you shortly.',
      data: {
        id: newMessage.id,
        receivedAt: newMessage.receivedAt
      }
    });
  } catch (error) {
    console.error('Error handling contact submission:', error);
    res.status(500).json({
      success: false,
      error: 'An internal server error occurred while processing your message.'
    });
  }
});

// GET /api/messages - View received messages
app.get('/api/messages', (req, res) => {
  try {
    if (!fs.existsSync(messagesFilePath)) {
      return res.json([]);
    }
    const raw = fs.readFileSync(messagesFilePath, 'utf-8');
    const messages = JSON.parse(raw);
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve messages' });
  }
});

// Serve static frontend in production if built
if (fs.existsSync(frontendDistPath)) {
  app.use(express.static(frontendDistPath));
  // Universal fallback for SPA routes
  app.use((req, res, next) => {
    if (req.method === 'GET' && !req.path.startsWith('/api')) {
      return res.sendFile(path.join(frontendDistPath, 'index.html'));
    }
    next();
  });
}

app.listen(PORT, () => {
  console.log(`  Banavathu Yaswanthi Bai - Portfolio Server Active`);
  console.log(`  Local URL:   http://localhost:${PORT}`);
  console.log(`  API Health:  http://localhost:${PORT}/api/health`);
  console.log(`  Portfolio:   http://localhost:${PORT}/api/portfolio`);
});
