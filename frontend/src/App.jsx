import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import EducationCertifications from './components/EducationCertifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Fallback initial state ensuring immediate rendering even before API responds
const fallbackData = {
  personal: {
    name: "Banavathu Yaswanthi Bai",
    title: "Java Full Stack Developer",
    location: "Piduguralla, Palnadu District, Andhra Pradesh, India",
    email: "banavathuyaswanthibai@gmail.com",
    phone: "+91-9390560373",
    status: "Available for Internships & Full-Time Roles",
    bio: "Results-driven Java Full Stack Developer and 3rd-year Computer Science Engineering student with hands-on experience building enterprise e-commerce systems, RESTful microservices, and responsive web applications. Passionate about designing robust backend architectures, clean relational databases, and modern, intuitive user interfaces.",
    links: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      codechef: "https://codechef.com"
    }
  },
  strengths: [
    "Problem Solving",
    "Java Backend Development",
    "REST API Development",
    "Database Architecture",
    "Team Collaboration (Agile/Scrum)",
    "Critical Thinking",
    "Quick Learner"
  ],
  skills: {
    spokenLanguages: [
      { language: "English", proficiency: "Professional Working" },
      { language: "Telugu", proficiency: "Native" },
      { language: "Hindi", proficiency: "Conversational" }
    ]
  }
};

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  const [portfolioData, setPortfolioData] = useState(fallbackData);
  const [loading, setLoading] = useState(true);

  // Apply theme
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Fetch portfolio data from Node.js Express backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/portfolio');
        if (response.ok) {
          const data = await response.json();
          setPortfolioData(data);
        }
      } catch (err) {
        console.warn('Backend API not reachable; running in static client mode', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="portfolio-app">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero personal={portfolioData.personal} />
        <About
          personal={portfolioData.personal}
          strengths={portfolioData.strengths}
          spokenLanguages={portfolioData.skills?.spokenLanguages}
        />
        <Skills skills={portfolioData.skills} />
        <Experience experience={portfolioData.experience} />
        <Projects projects={portfolioData.projects} />
        <EducationCertifications
          education={portfolioData.education}
          certifications={portfolioData.certifications}
        />
        <Contact personal={portfolioData.personal} />
      </main>
      <Footer personal={portfolioData.personal} />
    </div>
  );
}
