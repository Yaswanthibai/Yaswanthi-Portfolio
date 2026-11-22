import React from 'react';
import { IconGraduation, IconAward, IconCheckCircle } from './Icons';

export default function EducationCertifications({ education, certifications }) {
  const educationList = education || [
    {
      degree: 'B.Tech in Computer Science Engineering (Third Year)',
      institution: 'Vasireddy Venkatadri Institute of Technology',
      period: '2025 – 2028',
      score: 'Pursuing (3rd Year)',
      details: 'Comprehensive computer science curriculum specializing in data structures, algorithms, databases, web technologies, and software engineering.',
    },
    {
      degree: 'Diploma in Computer Engineering',
      institution: 'Andhra Polytechnic, Kakinada',
      period: '2022 – 2025',
      score: 'CGPA: 8.9',
      details: 'Graduated with distinction. Rigorous technical foundation in programming, computer networks, operating systems, and computer hardware.',
    },
    {
      degree: 'Secondary School Certificate (SSC)',
      institution: 'A.P. Model School',
      period: 'Completed',
      score: 'Marks: 518 / 600',
      details: 'Strong scholastic achievement with high distinctions in Mathematics, Science, and Information Technology.',
    },
  ];

  const certList = certifications || [
    {
      title: 'Java Programming Fundamentals',
      issuer: 'Infosys Springboard',
      date: '2026',
      description: 'Mastery in Core Java, Object-Oriented Programming principles, exception handling, and collections framework.',
    },
    {
      title: 'Data Structures and Algorithms using Java',
      issuer: 'Infosys Springboard',
      date: '2026',
      description: 'Rigorous training in linear & non-linear data structures, trees, graphs, asymptotic analysis, and problem-solving.',
    },
    {
      title: 'Java Problem Solving',
      issuer: 'CodeChef',
      date: '2026',
      description: 'Hands-on competitive coding and algorithm optimization challenges solved in Java.',
    },
  ];

  return (
    <section id="education" className="section-padding" style={{ background: 'var(--bg-subtle)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Academic & Credentials</div>
          <h2 className="section-title">Education & Certifications</h2>
          <p className="section-desc">
            Strong academic credentials in computer science coupled with verified industry certifications.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
          }}
        >
          {/* Education Column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  background: 'var(--accent-light)',
                  color: 'var(--accent)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <IconGraduation size={22} />
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-main)' }}>
                Academic Timeline
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {educationList.map((edu, idx) => (
                <div key={idx} className="card" style={{ padding: '24px', position: 'relative' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px', marginBottom: '6px' }}>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-main)', margin: 0 }}>
                      {edu.degree}
                    </h4>
                    <span className="badge badge-accent" style={{ fontSize: '0.75rem', flexShrink: 0 }}>
                      {edu.period}
                    </span>
                  </div>

                  <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--accent)', marginBottom: '8px' }}>
                    {edu.institution}
                  </div>

                  {edu.score && (
                    <div style={{ marginBottom: '8px' }}>
                      <span
                        style={{
                          fontSize: '0.8125rem',
                          fontWeight: 700,
                          color: 'var(--success)',
                          background: 'var(--success-bg)',
                          padding: '3px 8px',
                          borderRadius: '6px',
                          display: 'inline-block',
                        }}
                      >
                        {edu.score}
                      </span>
                    </div>
                  )}

                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5, margin: 0 }}>
                    {edu.details}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  background: 'var(--accent-light)',
                  color: 'var(--accent)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <IconAward size={22} />
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-main)' }}>
                Certifications
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {certList.map((cert, idx) => (
                <div key={idx} className="card" style={{ padding: '24px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px', marginBottom: '6px' }}>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-main)', margin: 0 }}>
                      {cert.title}
                    </h4>
                    <span className="badge" style={{ fontSize: '0.75rem', flexShrink: 0 }}>
                      {cert.date}
                    </span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '10px' }}>
                    <span style={{ color: 'var(--success)' }}><IconCheckCircle size={15} /></span>
                    <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--accent)' }}>
                      {cert.issuer}
                    </span>
                  </div>

                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5, margin: 0 }}>
                    {cert.description}
                  </p>
                </div>
              ))}

              {/* Code Problem Solving Highlights */}
              <div
                className="card"
                style={{
                  padding: '20px 24px',
                  background: 'var(--accent-light)',
                  border: '1px solid var(--accent)',
                }}
              >
                <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-main)', marginBottom: '4px' }}>
                  Active Competitive Problem Solving
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>
                  Regularly practicing algorithms, data structures, and edge-case handling on platforms like CodeChef and LeetCode with Java.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
