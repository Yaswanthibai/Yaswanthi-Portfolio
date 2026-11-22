import React from 'react';
import { IconMapPin, IconMail, IconPhone, IconGraduation, IconCheckCircle } from './Icons';

export default function About({ personal, strengths, spokenLanguages }) {
  return (
    <section id="about" className="section-padding" style={{ background: 'var(--bg-subtle)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">About Me</div>
          <h2 className="section-title">Driven by Clean Code & Solid Architecture</h2>
          <p className="section-desc">
            Get to know my background, core engineering strengths, and what drives me as a software developer.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
          }}
        >
          {/* Journey Card */}
          <div className="card" style={{ padding: '36px' }}>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '16px', color: 'var(--text-main)' }}>
              My Journey & Passion
            </h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '16px' }}>
              I am currently pursuing my <strong>B.Tech in Computer Science Engineering (3rd Year)</strong> at Vasireddy
              Venkatadri Institute of Technology, following a stellar foundation in computer engineering from Andhra Polytechnic, Kakinada (graduating with an <strong>8.9 CGPA</strong>).
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '24px' }}>
              My passion lies in backend systems architecture, RESTful API design, and full-stack development with Java, Spring Boot, React.js, and relational databases. Having participated in the <strong>Infosys Springboard 7.0 Virtual Internship</strong>, I honed practical skills in Agile team collaboration, role-based security, and microservices logic.
            </p>

            <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '12px', color: 'var(--text-main)' }}>
              Spoken Languages
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {(spokenLanguages || [
                { language: 'English', proficiency: 'Professional Working' },
                { language: 'Telugu', proficiency: 'Native' },
                { language: 'Hindi', proficiency: 'Conversational' },
              ]).map((lang) => (
                <div
                  key={lang.language}
                  style={{
                    padding: '8px 14px',
                    borderRadius: '8px',
                    background: 'var(--bg-primary)',
                    border: '1px solid var(--border-color)',
                    fontSize: '0.85rem',
                  }}
                >
                  <strong style={{ color: 'var(--text-main)' }}>{lang.language}</strong>
                  <span style={{ color: 'var(--text-subtle)', marginLeft: '6px' }}>• {lang.proficiency}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Details & Strengths Card */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Quick Contact Info */}
            <div className="card" style={{ padding: '28px' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '20px', color: 'var(--text-main)' }}>
                Key Details
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ color: 'var(--accent)' }}><IconMapPin size={18} /></div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-subtle)', textTransform: 'uppercase', fontWeight: 600 }}>Location</div>
                    <div style={{ fontSize: '0.925rem', color: 'var(--text-main)', fontWeight: 500 }}>
                      Piduguralla, Palnadu District, Andhra Pradesh
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ color: 'var(--accent)' }}><IconMail size={18} /></div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-subtle)', textTransform: 'uppercase', fontWeight: 600 }}>Email</div>
                    <a
                      href="mailto:banavathuyaswanthibai@gmail.com"
                      style={{ fontSize: '0.925rem', color: 'var(--accent)', fontWeight: 500, textDecoration: 'none' }}
                    >
                      banavathuyaswanthibai@gmail.com
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ color: 'var(--accent)' }}><IconPhone size={18} /></div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-subtle)', textTransform: 'uppercase', fontWeight: 600 }}>Phone</div>
                    <a
                      href="tel:+919390560373"
                      style={{ fontSize: '0.925rem', color: 'var(--text-main)', fontWeight: 500, textDecoration: 'none' }}
                    >
                      +91-9390560373
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ color: 'var(--accent)' }}><IconGraduation size={18} /></div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-subtle)', textTransform: 'uppercase', fontWeight: 600 }}>Education</div>
                    <div style={{ fontSize: '0.925rem', color: 'var(--text-main)', fontWeight: 500 }}>
                      B.Tech CSE (3rd Year), VVIT
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Strengths */}
            <div className="card" style={{ padding: '28px' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '16px', color: 'var(--text-main)' }}>
                Core Strengths
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px' }}>
                {(strengths || [
                  'Problem Solving',
                  'Java Backend Development',
                  'REST API Development',
                  'Team Collaboration',
                  'Critical Thinking',
                  'Quick Learner',
                ]).map((strength, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ color: 'var(--success)' }}><IconCheckCircle size={16} /></span>
                    <span style={{ fontSize: '0.875rem', color: 'var(--text-main)', fontWeight: 500 }}>
                      {strength}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
