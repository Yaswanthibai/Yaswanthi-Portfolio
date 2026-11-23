import React from 'react';
import profileImg from '../assets/profile.jpg';
import {
  IconArrowRight,
  IconDownload,
  IconGithub,
  IconLinkedin,
  IconCode,
  IconBriefcase,
  IconAward,
  IconGraduation
} from './Icons';

export default function Hero({ personal, stats }) {
  const handleResumeDownload = () => {
    // Generate a clean text/markdown resume or link
    window.print();
  };

  return (
    <section id="hero" style={{ paddingTop: '130px', paddingBottom: '70px', position: 'relative' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '48px',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Text & CTAs */}
          <div>
            <div style={{ marginBottom: '16px' }}>
              <span className="status-pill">
                <span className="pulse-dot"></span>
                {personal?.status || 'Available for Internships & Full-Time Roles'}
              </span>
            </div>

            <h1
              style={{
                fontSize: 'clamp(2.2rem, 5vw, 3.4rem)',
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: '-0.03em',
                marginBottom: '16px',
                color: 'var(--text-main)',
              }}
            >
              Hi, I'm{' '}
              <span className="text-gradient">Banavathu Yaswanthi Bai</span>
            </h1>

            <div
              style={{
                fontSize: 'clamp(1.2rem, 2.5vw, 1.45rem)',
                fontWeight: 600,
                color: 'var(--accent)',
                marginBottom: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <span style={{ fontFamily: 'var(--font-mono)' }}>&lt;</span>
              <span>Java Full Stack Developer</span>
              <span style={{ fontFamily: 'var(--font-mono)' }}>/&gt;</span>
            </div>

            <p
              style={{
                fontSize: '1.0625rem',
                color: 'var(--text-muted)',
                lineHeight: 1.7,
                marginBottom: '32px',
                maxWidth: '560px',
              }}
            >
              {personal?.bio ||
                'Computer Science Engineering student with practical experience building scalable enterprise e-commerce platforms, RESTful APIs, and responsive web applications. Passionate about clean code, robust backend architecture, and intuitive user experiences.'}
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginBottom: '32px' }}>
              <a href="#projects" className="btn btn-primary">
                View My Projects <IconArrowRight size={18} />
              </a>
              <a href="#contact" className="btn btn-secondary">
                Contact Me
              </a>
              <button onClick={handleResumeDownload} className="btn btn-secondary" title="Print / Save Resume View">
                <IconDownload size={18} /> Print / Save Resume
              </button>
            </div>

            {/* Social Links */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', color: 'var(--text-muted)' }}>
              <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>Profiles:</span>
              <a
                href={personal?.links?.github || 'https://github.com/Yaswanthibai'}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                style={{
                  color: 'var(--text-main)',
                  display: 'flex',
                  alignItems: 'center',
                  padding: '8px',
                  borderRadius: '8px',
                  background: 'var(--bg-subtle)',
                  transition: 'all 0.2s',
                }}
              >
                <IconGithub size={20} />
              </a>
              <a
                href={personal?.links?.linkedin || 'https://www.linkedin.com/in/yaswanthi-bai/'}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                style={{
                  color: 'var(--text-main)',
                  display: 'flex',
                  alignItems: 'center',
                  padding: '8px',
                  borderRadius: '8px',
                  background: 'var(--bg-subtle)',
                  transition: 'all 0.2s',
                }}
              >
                <IconLinkedin size={20} />
              </a>
              <a
                href={personal?.links?.codechef || 'https://www.codechef.com/users/vvit25bq5a0506'}
                target="_blank"
                rel="noreferrer"
                aria-label="CodeChef Profile"
                style={{
                  color: 'var(--text-main)',
                  display: 'flex',
                  alignItems: 'center',
                  padding: '6px 12px',
                  borderRadius: '8px',
                  background: 'var(--bg-subtle)',
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                }}
              >
                CodeChef
              </a>
            </div>
          </div>

          {/* Right Column: Profile Image Card */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '360px',
              }}
            >
              {/* Decorative background glow */}
              <div
                style={{
                  position: 'absolute',
                  inset: '-12px',
                  background: 'var(--accent-gradient)',
                  borderRadius: '28px',
                  filter: 'blur(24px)',
                  opacity: 0.22,
                  zIndex: 0,
                }}
              />

              <div
                className="card"
                style={{
                  position: 'relative',
                  zIndex: 1,
                  padding: '16px',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    position: 'relative',
                    borderRadius: '18px',
                    overflow: 'hidden',
                    aspectRatio: '4 / 5',
                    background: 'var(--bg-subtle)',
                    marginBottom: '16px',
                  }}
                >
                  <img
                    src={profileImg}
                    alt="Banavathu Yaswanthi Bai"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />
                </div>

                <div style={{ padding: '4px 8px 12px' }}>
                  <div style={{ fontWeight: 700, fontSize: '1.15rem', color: 'var(--text-main)' }}>
                    Banavathu Yaswanthi Bai
                  </div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--accent)', fontWeight: 500, marginTop: '2px' }}>
                    Java Full Stack Developer
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-subtle)', marginTop: '4px' }}>
                    Piduguralla, Palnadu District, AP
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Highlights Counter Grid */}
        <div
          style={{
            marginTop: '64px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '16px',
          }}
        >
          <div className="card" style={{ padding: '20px 24px', display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                background: 'var(--accent-light)',
                color: 'var(--accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <IconBriefcase size={22} />
            </div>
            <div>
              <div style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-main)' }}>Infosys 7.0</div>
              <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>Virtual Internship</div>
            </div>
          </div>

          <div className="card" style={{ padding: '20px 24px', display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                background: 'var(--accent-light)',
                color: 'var(--accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <IconCode size={22} />
            </div>
            <div>
              <div style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-main)' }}>2 Projects</div>
              <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>Enterprise Full-Stack</div>
            </div>
          </div>

          <div className="card" style={{ padding: '20px 24px', display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                background: 'var(--accent-light)',
                color: 'var(--accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <IconGraduation size={22} />
            </div>
            <div>
              <div style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-main)' }}>8.9 CGPA</div>
              <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>Diploma in Comp Engg</div>
            </div>
          </div>

          <div className="card" style={{ padding: '20px 24px', display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                background: 'var(--accent-light)',
                color: 'var(--accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <IconAward size={22} />
            </div>
            <div>
              <div style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-main)' }}>3 Verified</div>
              <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>Industry Certifications</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
