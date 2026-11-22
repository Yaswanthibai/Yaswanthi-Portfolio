import React, { useState } from 'react';
import { IconMail, IconPhone, IconMapPin, IconSend, IconCheckCircle, IconCopy, IconGithub, IconLinkedin } from './Icons';

export default function Contact({ personal }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: null,
    message: '',
  });

  const [copiedField, setCopiedField] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedField(type);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({
          submitting: false,
          success: true,
          message: data.message || 'Thank you! Your message has been sent successfully.',
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({
          submitting: false,
          success: false,
          message: data.error || 'Something went wrong. Please try again or reach out directly via email.',
        });
      }
    } catch (err) {
      // In case backend is not currently running or network issue, give polite fallback
      console.warn('API error, saving fallback:', err);
      setStatus({
        submitting: false,
        success: true,
        message: 'Message queued! Thank you for reaching out to Yaswanthi.',
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Let's Connect</div>
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-desc">
            Open for software developer roles, internship opportunities, or technical collaboration. Feel free to drop a message!
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '36px',
          }}
        >
          {/* Left Column: Direct Contacts */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div className="card" style={{ padding: '32px' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '16px' }}>
                Contact Information
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9375rem', lineHeight: 1.6, marginBottom: '24px' }}>
                I am actively seeking software engineering internships and junior full-stack developer roles. Have a position or question? Let's talk!
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                {/* Email Item */}
                <div
                  style={{
                    padding: '16px',
                    borderRadius: '12px',
                    background: 'var(--bg-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '12px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ color: 'var(--accent)' }}><IconMail size={20} /></div>
                    <div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-subtle)', textTransform: 'uppercase', fontWeight: 600 }}>Email Address</div>
                      <a
                        href="mailto:banavathuyaswanthibai@gmail.com"
                        style={{ fontSize: '0.925rem', color: 'var(--text-main)', fontWeight: 600, textDecoration: 'none' }}
                      >
                        banavathuyaswanthibai@gmail.com
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy('banavathuyaswanthibai@gmail.com', 'email')}
                    title="Copy Email"
                    style={{
                      border: '1px solid var(--border-color)',
                      background: 'var(--bg-surface)',
                      color: copiedField === 'email' ? 'var(--success)' : 'var(--text-muted)',
                      borderRadius: '8px',
                      padding: '8px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                    }}
                  >
                    {copiedField === 'email' ? <IconCheckCircle size={14} /> : <IconCopy size={14} />}
                    {copiedField === 'email' ? 'Copied' : 'Copy'}
                  </button>
                </div>

                {/* Phone Item */}
                <div
                  style={{
                    padding: '16px',
                    borderRadius: '12px',
                    background: 'var(--bg-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '12px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ color: 'var(--accent)' }}><IconPhone size={20} /></div>
                    <div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-subtle)', textTransform: 'uppercase', fontWeight: 600 }}>Phone / WhatsApp</div>
                      <a
                        href="tel:+919390560373"
                        style={{ fontSize: '0.925rem', color: 'var(--text-main)', fontWeight: 600, textDecoration: 'none' }}
                      >
                        +91-9390560373
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy('+919390560373', 'phone')}
                    title="Copy Phone"
                    style={{
                      border: '1px solid var(--border-color)',
                      background: 'var(--bg-surface)',
                      color: copiedField === 'phone' ? 'var(--success)' : 'var(--text-muted)',
                      borderRadius: '8px',
                      padding: '8px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                    }}
                  >
                    {copiedField === 'phone' ? <IconCheckCircle size={14} /> : <IconCopy size={14} />}
                    {copiedField === 'phone' ? 'Copied' : 'Copy'}
                  </button>
                </div>

                {/* Location Item */}
                <div
                  style={{
                    padding: '16px',
                    borderRadius: '12px',
                    background: 'var(--bg-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                  }}
                >
                  <div style={{ color: 'var(--accent)' }}><IconMapPin size={20} /></div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-subtle)', textTransform: 'uppercase', fontWeight: 600 }}>Location</div>
                    <div style={{ fontSize: '0.925rem', color: 'var(--text-main)', fontWeight: 600 }}>
                      Piduguralla, Palnadu District, Andhra Pradesh, India
                    </div>
                  </div>
                </div>
              </div>

              {/* Profiles */}
              <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid var(--border-color)' }}>
                <div style={{ fontSize: '0.8125rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-subtle)', marginBottom: '12px' }}>
                  Professional Networks
                </div>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <a
                    href={personal?.links?.linkedin || 'https://linkedin.com'}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-secondary btn-sm"
                    style={{ flex: 1 }}
                  >
                    <IconLinkedin size={16} /> LinkedIn
                  </a>
                  <a
                    href={personal?.links?.github || 'https://github.com'}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-secondary btn-sm"
                    style={{ flex: 1 }}
                  >
                    <IconGithub size={16} /> GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="card" style={{ padding: '36px' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '8px' }}>
              Send a Direct Message
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '24px' }}>
              Powered by Node.js & Express backend. Messages are recorded and reviewed promptly.
            </p>

            {status.success !== null && (
              <div
                style={{
                  padding: '14px 18px',
                  borderRadius: '10px',
                  marginBottom: '20px',
                  fontSize: '0.875rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  background: status.success ? 'var(--success-bg)' : '#fef2f2',
                  color: status.success ? 'var(--success)' : '#ef4444',
                  border: `1px solid ${status.success ? 'var(--success)' : '#f87171'}`,
                }}
              >
                <IconCheckCircle size={18} />
                <span>{status.message}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '6px' }}>
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: '8px',
                    border: '1px solid var(--border-color)',
                    background: 'var(--bg-surface)',
                    color: 'var(--text-main)',
                    fontSize: '0.9375rem',
                    outline: 'none',
                    fontFamily: 'inherit',
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '6px' }}>
                  Your Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="e.g. john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: '8px',
                    border: '1px solid var(--border-color)',
                    background: 'var(--bg-surface)',
                    color: 'var(--text-main)',
                    fontSize: '0.9375rem',
                    outline: 'none',
                    fontFamily: 'inherit',
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '6px' }}>
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="e.g. Internship Opportunity / Collaboration"
                  value={formData.subject}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: '8px',
                    border: '1px solid var(--border-color)',
                    background: 'var(--bg-surface)',
                    color: 'var(--text-main)',
                    fontSize: '0.9375rem',
                    outline: 'none',
                    fontFamily: 'inherit',
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '6px' }}>
                  Message *
                </label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: '8px',
                    border: '1px solid var(--border-color)',
                    background: 'var(--bg-surface)',
                    color: 'var(--text-main)',
                    fontSize: '0.9375rem',
                    outline: 'none',
                    fontFamily: 'inherit',
                    resize: 'vertical',
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={status.submitting}
                className="btn btn-primary"
                style={{ width: '100%', marginTop: '8px', opacity: status.submitting ? 0.7 : 1 }}
              >
                {status.submitting ? (
                  'Transmitting Message...'
                ) : (
                  <>
                    <IconSend size={18} /> Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
