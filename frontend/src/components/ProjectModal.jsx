import React from 'react';
import { IconX, IconCheckCircle, IconGithub, IconExternalLink, IconServer, IconLayers, IconDatabase, IconShield } from './Icons';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2000,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        backdropFilter: 'blur(6px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
      onClick={onClose}
    >
      <div
        className="card"
        style={{
          width: '100%',
          maxWidth: '720px',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: '32px',
          position: 'relative',
          background: 'var(--bg-surface)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close project modal"
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            border: '1px solid var(--border-color)',
            background: 'var(--bg-subtle)',
            color: 'var(--text-main)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <IconX size={18} />
        </button>

        {/* Modal Header */}
        <div style={{ marginBottom: '20px' }}>
          <span className="badge badge-accent" style={{ marginBottom: '8px' }}>
            {project.category}
          </span>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-main)', marginTop: '6px' }}>
            {project.title}
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.975rem', marginTop: '6px', lineHeight: 1.6 }}>
            {project.tagline}
          </p>
        </div>

        {/* Project Description */}
        <div style={{ marginBottom: '24px' }}>
          <h4 style={{ fontSize: '0.9375rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-subtle)', marginBottom: '8px' }}>
            Overview
          </h4>
          <p style={{ color: 'var(--text-main)', lineHeight: 1.7, fontSize: '0.9375rem' }}>
            {project.description}
          </p>
        </div>

        {/* Architecture & Engineering Highlights */}
        <div style={{ marginBottom: '24px' }}>
          <h4 style={{ fontSize: '0.9375rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-subtle)', marginBottom: '12px' }}>
            Core Engineering Highlights
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {project.highlights.map((highlight, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <span style={{ color: 'var(--success)', marginTop: '3px', flexShrink: 0 }}>
                  <IconCheckCircle size={16} />
                </span>
                <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  {highlight}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Matrix */}
        <div style={{ marginBottom: '28px' }}>
          <h4 style={{ fontSize: '0.9375rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-subtle)', marginBottom: '10px' }}>
            Tech Stack Stacked
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {project.technologies.map((t, idx) => (
              <span key={idx} className="badge" style={{ padding: '6px 12px', fontSize: '0.85rem' }}>
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Actions */}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', borderTop: '1px solid var(--border-color)', paddingTop: '20px' }}>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary"
          >
            <IconGithub size={18} /> View on GitHub
          </a>
          <button
            onClick={onClose}
            className="btn btn-primary"
            style={{ marginLeft: 'auto' }}
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
}
