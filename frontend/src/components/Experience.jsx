import React from 'react';
import { IconBriefcase, IconCheckCircle } from './Icons';

export default function Experience({ experience }) {
  const experiences = experience || [
    {
      id: 'infosys-springboard',
      role: 'Java Full Stack Virtual Intern',
      company: 'Infosys Springboard 7.0 Virtual Internship',
      period: 'June 2026 – August 2026',
      type: 'Virtual Internship',
      achievements: [
        'Worked in a 9-member Agile team using Scrum sprints to architect and build an Enterprise E-Commerce Platform.',
        'Developed scalable backend modules using Java, Spring Boot, PostgreSQL, and REST APIs.',
        'Implemented secure JWT Authentication and Role-Based Access Control (RBAC) to ensure role-specific permissions.',
        'Developed core user workflows including Shopping Cart, Coupon Management, and Checkout modules.',
        'Used Git, GitHub, and Postman for collaboration, code reviews, automated endpoint testing, and debugging.',
      ],
      technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'REST APIs', 'JWT', 'RBAC', 'Git', 'GitHub', 'Postman', 'Agile/Scrum'],
    },
  ];

  return (
    <section id="experience" className="section-padding" style={{ background: 'var(--bg-subtle)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Work History</div>
          <h2 className="section-title">Internship Experience</h2>
          <p className="section-desc">
            Hands-on professional software engineering experience working with Agile teams on enterprise applications.
          </p>
        </div>

        <div style={{ maxWidth: '850px', margin: '0 auto' }}>
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="card"
              style={{
                padding: '36px',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Top Accent Bar */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: 'var(--accent-gradient)',
                }}
              />

              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  gap: '16px',
                  marginBottom: '20px',
                }}
              >
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      background: 'var(--accent-light)',
                      color: 'var(--accent)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <IconBriefcase size={24} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text-main)', margin: 0 }}>
                      {exp.role}
                    </h3>
                    <div style={{ fontSize: '1.025rem', fontWeight: 600, color: 'var(--accent)', marginTop: '2px' }}>
                      {exp.company}
                    </div>
                  </div>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <span className="badge badge-accent" style={{ fontSize: '0.8125rem', padding: '6px 12px' }}>
                    {exp.period}
                  </span>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-subtle)', marginTop: '4px' }}>
                    {exp.type}
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div style={{ marginBottom: '24px' }}>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {exp.achievements.map((item, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                      <span style={{ color: 'var(--accent)', marginTop: '3px', flexShrink: 0 }}>
                        <IconCheckCircle size={16} />
                      </span>
                      <span style={{ color: 'var(--text-muted)', fontSize: '0.9375rem', lineHeight: 1.6 }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies Used */}
              <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '18px' }}>
                <div style={{ fontSize: '0.8125rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-subtle)', marginBottom: '10px' }}>
                  Technologies & Practices
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {exp.technologies.map((tech, idx) => (
                    <span key={idx} className="badge" style={{ fontSize: '0.8125rem', padding: '5px 10px' }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
