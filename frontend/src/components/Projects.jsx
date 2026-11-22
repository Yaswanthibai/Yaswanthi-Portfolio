import React, { useState } from 'react';
import { IconCode, IconExternalLink, IconGithub, IconArrowRight, IconCheckCircle } from './Icons';
import ProjectModal from './ProjectModal';

export default function Projects({ projects }) {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectList = projects || [
    {
      id: 'shopstack',
      title: 'ShopStack — Enterprise Multi-Vendor E-Commerce Platform',
      category: 'Full Stack Web Application',
      featured: true,
      tagline: 'High-performance multi-vendor marketplace with secure Razorpay integration and JWT RBAC.',
      description: 'Engineered an end-to-end multi-vendor e-commerce platform that empowers vendors to manage catalogs and customers to browse, cart, and purchase items seamlessly.',
      highlights: [
        'User Registration & Login with JWT authentication and role-based access for Buyers and Vendors.',
        'Dynamic Shopping Cart, Coupon Management engine, and order state transitions.',
        'Seamless checkout flow with Razorpay Payment Gateway integration.',
        'Responsive React frontend integrated with Spring Boot REST microservices and PostgreSQL.',
      ],
      technologies: ['Java', 'Spring Boot', 'React.js', 'PostgreSQL', 'Razorpay', 'JWT', 'REST APIs'],
      github: 'https://github.com',
      liveDemo: '#',
    },
    {
      id: 'vidyapedia',
      title: 'VidyaPedia — College Information Student Portal',
      category: 'Full Stack Educational Portal',
      featured: true,
      tagline: 'Intuitive college discovery portal with multi-criteria filtering and verified profiles.',
      description: 'Developed a comprehensive college exploration web application designed to help prospective students make informed academic decisions based on location, courses, fees, and institution type.',
      highlights: [
        'Secure backend services using Spring Boot and REST APIs with MySQL database persistence.',
        'Responsive React.js user interface featuring fast dynamic filtering and institution comparisons.',
        'Detailed college profiles complete with fee structures, courses, and educational resources.',
        'Optimized relational query patterns for fast retrieval across complex filter combinations.',
      ],
      technologies: ['Java', 'Spring Boot', 'React.js', 'MySQL', 'REST APIs', 'CSS3', 'Postman'],
      github: 'https://github.com',
      liveDemo: '#',
    },
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Featured Work</div>
          <h2 className="section-title">Projects & Systems</h2>
          <p className="section-desc">
            Production-grade full-stack applications showcasing end-to-end engineering, secure APIs, and responsive design.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '32px',
          }}
        >
          {projectList.map((project) => (
            <div
              key={project.id}
              className="card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '20px',
                overflow: 'hidden',
                padding: '32px',
                position: 'relative',
              }}
            >
              {/* Category & Badge */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <span className="badge badge-accent">
                  {project.category}
                </span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-subtle)', fontWeight: 600 }}>
                  Featured Project
                </span>
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: '1.4rem',
                  fontWeight: 800,
                  color: 'var(--text-main)',
                  lineHeight: 1.3,
                  marginBottom: '12px',
                }}
              >
                {project.title}
              </h3>

              {/* Tagline / Description */}
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9375rem', lineHeight: 1.6, marginBottom: '20px' }}>
                {project.tagline || project.description}
              </p>

              {/* Key Features Preview */}
              <div style={{ marginBottom: '24px', flexGrow: 1 }}>
                <div style={{ fontSize: '0.8125rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-subtle)', marginBottom: '10px' }}>
                  Key Capabilities
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {project.highlights.slice(0, 3).map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <span style={{ color: 'var(--accent)', marginTop: '2px', flexShrink: 0 }}>
                        <IconCheckCircle size={15} />
                      </span>
                      <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Chips */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '24px' }}>
                {project.technologies.map((t, idx) => (
                  <span key={idx} className="badge" style={{ fontSize: '0.78rem' }}>
                    {t}
                  </span>
                ))}
              </div>

              {/* Actions Footer */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '12px',
                  borderTop: '1px solid var(--border-color)',
                  paddingTop: '20px',
                  marginTop: 'auto',
                }}
              >
                <button
                  onClick={() => setSelectedProject(project)}
                  className="btn btn-secondary btn-sm"
                  style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
                >
                  View Details <IconArrowRight size={15} />
                </button>

                <div style={{ display: 'flex', gap: '8px' }}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-secondary btn-sm"
                    title="View Source on GitHub"
                    aria-label="GitHub Repository"
                  >
                    <IconGithub size={16} /> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
