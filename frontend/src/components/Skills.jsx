import React, { useState } from 'react';
import {
  IconJava,
  IconCode,
  IconServer,
  IconDatabase,
  IconLayers,
  IconShield
} from './Icons';

export default function Skills({ skills }) {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'languages', label: 'Languages' },
    { id: 'backend', label: 'Backend' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'databases', label: 'Databases' },
    { id: 'tools', label: 'Tools & Concepts' },
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Technical Competencies</div>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-desc">
            A comprehensive overview of my technical stack across backend engineering, frontend development, and databases.
          </p>
        </div>

        {/* Tab Filters */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '8px',
            marginBottom: '40px',
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              style={{
                padding: '8px 18px',
                borderRadius: '9999px',
                border: '1px solid',
                borderColor: activeTab === cat.id ? 'var(--accent)' : 'var(--border-color)',
                background: activeTab === cat.id ? 'var(--accent)' : 'var(--bg-surface)',
                color: activeTab === cat.id ? '#ffffff' : 'var(--text-muted)',
                fontWeight: 600,
                fontSize: '0.875rem',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
          }}
        >
          {/* Languages */}
          {(activeTab === 'all' || activeTab === 'languages') && (
            <div className="card" style={{ padding: '28px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                <div style={{ color: 'var(--accent)' }}><IconCode size={24} /></div>
                <div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-main)' }}>Programming Languages</h3>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-subtle)' }}>Foundational & System Languages</div>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div style={{ padding: '12px 16px', background: 'var(--bg-subtle)', borderRadius: '10px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                    <strong style={{ color: 'var(--text-main)' }}>Java</strong>
                    <span className="badge badge-accent">Advanced</span>
                  </div>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                    Core Java, OOP, Collections Framework, Multithreading, Exception Handling, Streams
                  </div>
                </div>

                <div style={{ padding: '12px 16px', background: 'var(--bg-subtle)', borderRadius: '10px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                    <strong style={{ color: 'var(--text-main)' }}>SQL</strong>
                    <span className="badge badge-accent">Proficient</span>
                  </div>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                    Complex Queries, Joins, Aggregations, Schema Design, Stored Procedures
                  </div>
                </div>

                <div style={{ padding: '12px 16px', background: 'var(--bg-subtle)', borderRadius: '10px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                    <strong style={{ color: 'var(--text-main)' }}>JavaScript (ES6+)</strong>
                    <span className="badge">Intermediate</span>
                  </div>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                    Async/Await, Promises, DOM Manipulation, Fetch API, Modular Code
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Backend */}
          {(activeTab === 'all' || activeTab === 'backend') && (
            <div className="card" style={{ padding: '28px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                <div style={{ color: 'var(--accent)' }}><IconServer size={24} /></div>
                <div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-main)' }}>Backend Engineering</h3>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-subtle)' }}>Server, APIs & Microservices</div>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div style={{ padding: '12px 16px', background: 'var(--bg-subtle)', borderRadius: '10px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                    <strong style={{ color: 'var(--text-main)' }}>Spring Boot</strong>
                    <span className="badge badge-accent">Core Focus</span>
                  </div>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                    REST Controllers, Spring Data JPA, Spring Security, Inversion of Control
                  </div>
                </div>

                <div style={{ padding: '12px 16px', background: 'var(--bg-subtle)', borderRadius: '10px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                    <strong style={{ color: 'var(--text-main)' }}>RESTful APIs & JWT</strong>
                    <span className="badge">Secured</span>
                  </div>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                    Stateless Authentication, Token Generation & Validation, RBAC
                  </div>
                </div>

                <div style={{ padding: '12px 16px', background: 'var(--bg-subtle)', borderRadius: '10px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                    <strong style={{ color: 'var(--text-main)' }}>Node.js & Express</strong>
                    <span className="badge">Complementary</span>
                  </div>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                    REST API endpoints, Middleware, JSON serialization, Event Loop
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Frontend */}
          {(activeTab === 'all' || activeTab === 'frontend') && (
            <div className="card" style={{ padding: '28px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                <div style={{ color: 'var(--accent)' }}><IconLayers size={24} /></div>
                <div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-main)' }}>Frontend Development</h3>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-subtle)' }}>User Interfaces & Interactions</div>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div style={{ padding: '12px 16px', background: 'var(--bg-subtle)', borderRadius: '10px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                    <strong style={{ color: 'var(--text-main)' }}>React.js</strong>
                    <span className="badge badge-accent">Primary UI</span>
                  </div>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                    Components, Hooks (useState, useEffect), Props, State Management, Virtual DOM
                  </div>
                </div>

                <div style={{ padding: '12px 16px', background: 'var(--bg-subtle)', borderRadius: '10px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                    <strong style={{ color: 'var(--text-main)' }}>HTML5 & CSS3</strong>
                    <span className="badge">Responsive</span>
                  </div>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                    Flexbox, Grid, CSS Variables, Transitions, Semantic markup, Mobile-first
                  </div>
                </div>

                <div style={{ padding: '12px 16px', background: 'var(--bg-subtle)', borderRadius: '10px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                    <strong style={{ color: 'var(--text-main)' }}>Bootstrap</strong>
                    <span className="badge">UI Kit</span>
                  </div>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                    Responsive layouts, UI components, Grid systems, Utility classes
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Databases */}
          {(activeTab === 'all' || activeTab === 'databases') && (
            <div className="card" style={{ padding: '28px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                <div style={{ color: 'var(--accent)' }}><IconDatabase size={24} /></div>
                <div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-main)' }}>Databases & Storage</h3>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-subtle)' }}>Relational & Persistent Stores</div>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div style={{ padding: '12px 16px', background: 'var(--bg-subtle)', borderRadius: '10px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                    <strong style={{ color: 'var(--text-main)' }}>PostgreSQL</strong>
                    <span className="badge badge-accent">Production</span>
                  </div>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                    Relational schema design, Foreign keys, ACID compliance, Complex indexing
                  </div>
                </div>

                <div style={{ padding: '12px 16px', background: 'var(--bg-subtle)', borderRadius: '10px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                    <strong style={{ color: 'var(--text-main)' }}>MySQL</strong>
                    <span className="badge badge-accent">Standard</span>
                  </div>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                    Database normalization, CRUD optimizations, Table relationships, Workbench
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tools & Concepts */}
          {(activeTab === 'all' || activeTab === 'tools') && (
            <div className="card" style={{ padding: '28px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                <div style={{ color: 'var(--accent)' }}><IconShield size={24} /></div>
                <div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-main)' }}>Core Concepts</h3>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-subtle)' }}>CS Foundations & Patterns</div>
                </div>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
                {[
                  'Object-Oriented Programming (OOP)',
                  'Data Structures & Algorithms',
                  'DBMS & Normalization',
                  'MVC Architecture',
                  'Authentication & Authorization',
                  'Role-Based Access Control (RBAC)',
                ].map((concept, idx) => (
                  <span key={idx} className="badge" style={{ padding: '6px 12px', fontSize: '0.8125rem' }}>
                    {concept}
                  </span>
                ))}
              </div>

              <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '16px' }}>
                <h4 style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '10px' }}>
                  Developer Tools
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {['Git', 'GitHub', 'IntelliJ IDEA', 'VS Code', 'Postman'].map((tool, idx) => (
                    <span
                      key={idx}
                      style={{
                        padding: '6px 12px',
                        background: 'var(--bg-subtle)',
                        borderRadius: '6px',
                        fontSize: '0.8125rem',
                        fontWeight: 600,
                        color: 'var(--text-main)',
                      }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
