import React from 'react';
import { IconGithub, IconLinkedin, IconArrowRight } from './Icons';

export default function Footer({ personal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-color)',
        background: 'var(--bg-surface)',
        padding: '48px 0 32px',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '24px',
            marginBottom: '32px',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  background: 'var(--accent-gradient)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: '0.875rem',
                }}
              >
                YB
              </div>
              <span style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--text-main)' }}>
                Banavathu Yaswanthi Bai
              </span>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', margin: 0 }}>
              Java Full Stack Developer • Spring Boot & React.js
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <a
              href={personal?.links?.github || 'https://github.com/Yaswanthibai/'}
              target="_blank"
              rel="noreferrer"
              style={{
                color: 'var(--text-muted)',
                padding: '8px',
                borderRadius: '8px',
                background: 'var(--bg-subtle)',
                display: 'flex',
                alignItems: 'center',
              }}
              aria-label="GitHub"
            >
              <IconGithub size={18} />
            </a>
            <a
              href={personal?.links?.linkedin || 'https://www.linkedin.com/in/yaswanthi-bai/'}
              target="_blank"
              rel="noreferrer"
              style={{
                color: 'var(--text-muted)',
                padding: '8px',
                borderRadius: '8px',
                background: 'var(--bg-subtle)',
                display: 'flex',
                alignItems: 'center',
              }}
              aria-label="LinkedIn"
            >
              <IconLinkedin size={18} />
            </a>
            <button
              onClick={scrollToTop}
              className="btn btn-secondary btn-sm"
              style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
            >
              Back to Top ↑
            </button>
          </div>
        </div>

        <div
          style={{
            borderTop: '1px solid var(--border-color)',
            paddingTop: '24px',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '12px',
            fontSize: '0.8125rem',
            color: 'var(--text-subtle)',
          }}
        >
          <div>
            © {new Date().getFullYear()} Banavathu Yaswanthi Bai. All rights reserved.
          </div>
          <div>
            Engineered with <strong style={{ color: 'var(--accent)' }}>React.js</strong> & <strong style={{ color: 'var(--accent)' }}>Node.js</strong>
          </div>
        </div>
      </div>
    </footer>
  );
}
