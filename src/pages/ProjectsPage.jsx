import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, X, ExternalLink } from 'lucide-react';
import { projects } from '../config/siteAssets';

const filters = ['All', 'Video Ads', 'Social Media', 'Photography', 'Websites'];

const typeEmoji = { video: '🎬', image: '🎨', photo: '📸', web: '💻' };
const typeLabel = { video: 'VIDEO', image: 'DESIGN', photo: 'PHOTO', web: 'WEB' };
const typeColor = { video: '#ff6ec7', image: '#e91e8c', photo: '#ffb6c1', web: '#c084fc' };

function ProjectModal({ project, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        position: 'fixed', inset: 0, zIndex: 9000,
        background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(12px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px',
      }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.85, opacity: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="glass-dark"
        style={{
          maxWidth: '700px', width: '100%', borderRadius: '24px', overflow: 'hidden',
          border: '1px solid rgba(255,110,199,0.25)',
        }}
        onClick={e => e.stopPropagation()}
      >
        {project.image ? (
          <img src={project.image} alt={project.title}
            style={{ width: '100%', height: '360px', objectFit: 'cover', display: 'block', borderBottom: '1px solid rgba(255,110,199,0.15)' }}
          />
        ) : (
          <div className="placeholder-box" style={{ height: '360px', borderRadius: '0', border: 'none', borderBottom: '1px solid rgba(255,110,199,0.15)' }}>
            <div style={{ fontSize: '4rem' }}>{typeEmoji[project.type]}</div>
            <div style={{ fontSize: '0.85rem', color: 'rgba(255,110,199,0.8)', fontWeight: '700' }}>
              Set image in src/config/siteAssets.js
            </div>
          </div>
        )}

        <div style={{ padding: '32px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
            <div>
              <span style={{ fontSize: '0.7rem', letterSpacing: '2px', fontWeight: '600', color: typeColor[project.type] }}>
                {typeLabel[project.type]} • {project.category}
              </span>
              <h3 style={{ fontFamily: 'Playfair Display', fontSize: '1.6rem', fontWeight: '700', marginTop: '8px' }}>
                {project.title}
              </h3>
            </div>
            <button onClick={onClose} style={{
              background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '10px', padding: '8px', color: 'rgba(255,255,255,0.6)', cursor: 'none', flexShrink: 0,
            }}>
              <X size={18} />
            </button>
          </div>

          <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: '1.7', marginBottom: '20px' }}>
            {project.desc}
          </p>

          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '24px' }}>
            {project.tags.map(t => (
              <span key={t} style={{
                background: 'rgba(255,110,199,0.1)', border: '1px solid rgba(255,110,199,0.25)',
                borderRadius: '20px', padding: '4px 12px', fontSize: '0.75rem', color: '#ff6ec7',
              }}>{t}</span>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
            className="btn-primary" style={{ fontSize: '0.85rem', padding: '10px 22px' }}
          >
            <ExternalLink size={14} /> View Project
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ProjectsPage() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('All');
  const [selected, setSelected] = useState(null);

  const filtered = activeFilter === 'All' ? projects : projects.filter(p => p.category === activeFilter);

  return (
    <div style={{ minHeight: '100vh', background: '#050508', paddingTop: '100px', paddingBottom: '80px' }}>
      {/* Grid background */}
      <div className="grid-bg" style={{ position: 'fixed', inset: 0, opacity: 0.5, pointerEvents: 'none', zIndex: 0 }} />

      {/* Glow */}
      <div style={{
        position: 'fixed', left: '50%', top: '30%', transform: 'translate(-50%,-50%)',
        width: '600px', height: '400px',
        background: 'radial-gradient(ellipse, rgba(255,110,199,0.06) 0%, transparent 70%)',
        filter: 'blur(60px)', pointerEvents: 'none', zIndex: 0,
      }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        {/* Back button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ x: -4 }}
          onClick={() => navigate('/')}
          style={{
            display: 'flex', alignItems: 'center', gap: '8px',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '30px', padding: '10px 20px',
            color: 'rgba(255,255,255,0.7)', cursor: 'none',
            fontSize: '0.85rem', fontWeight: '500', marginBottom: '56px',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,110,199,0.4)'; e.currentTarget.style.color = '#ff6ec7'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; }}
        >
          <ArrowLeft size={15} /> Back to Home
        </motion.button>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: '56px' }}
        >
          <span style={{ fontSize: '0.75rem', letterSpacing: '3px', textTransform: 'uppercase', color: '#ff6ec7', fontWeight: '600' }}>
            All Projects
          </span>
          <div className="section-divider" style={{ margin: '12px 0 0' }} />
          <h1 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: '700', lineHeight: '1.1',
            marginTop: '20px', marginBottom: '16px',
          }}>
            <span className="text-gradient-white">Every Project,</span>
            <br />
            <span className="text-gradient">Every Story</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '1rem', maxWidth: '480px', lineHeight: '1.8' }}>
            A full view of the work — videos, designs, photography, and websites.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '48px' }}
        >
          {filters.map(filter => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              style={{
                padding: '9px 22px', borderRadius: '30px',
                fontSize: '0.85rem', fontWeight: '500', cursor: 'none',
                border: activeFilter === filter ? '1.5px solid #ff6ec7' : '1.5px solid rgba(255,255,255,0.1)',
                background: activeFilter === filter ? 'linear-gradient(135deg, #ff6ec7, #e91e8c)' : 'rgba(255,255,255,0.04)',
                color: activeFilter === filter ? '#fff' : 'rgba(255,255,255,0.6)',
                boxShadow: activeFilter === filter ? '0 4px 20px rgba(255,110,199,0.35)' : 'none',
                transition: 'all 0.25s ease', backdropFilter: 'blur(10px)',
              }}
            >
              {filter}
              <span style={{
                marginLeft: '8px', fontSize: '0.7rem', opacity: 0.75,
                background: activeFilter === filter ? 'rgba(255,255,255,0.2)' : 'rgba(255,110,199,0.15)',
                borderRadius: '10px', padding: '1px 7px',
              }}>
                {filter === 'All' ? projects.length : projects.filter(p => p.category === filter).length}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div
          layout
          style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}
          className="all-projects-grid"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                className="portfolio-item"
                style={{ height: '260px' }}
                onClick={() => setSelected(project)}
              >
                <div className="thumb-inner" style={{ width: '100%', height: '100%' }}>
                  {project.image ? (
                    <img src={project.image} alt={project.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                  ) : (
                    <div className="placeholder-box" style={{ height: '100%', borderRadius: '0', border: 'none' }}>
                      <span style={{ fontSize: '2.5rem' }}>{typeEmoji[project.type]}</span>
                      <span style={{ fontSize: '0.7rem', letterSpacing: '1.5px', fontWeight: '600' }}>
                        {project.title}
                      </span>
                    </div>
                  )}
                </div>

                <div className="overlay">
                  <span style={{ fontSize: '0.65rem', letterSpacing: '2px', color: typeColor[project.type], fontWeight: '600', marginBottom: '4px' }}>
                    {project.category}
                  </span>
                  <h4 style={{ fontFamily: 'Playfair Display', fontSize: '1rem', fontWeight: '700', margin: 0 }}>
                    {project.title}
                  </h4>
                  <div style={{ display: 'flex', gap: '6px', marginTop: '6px', flexWrap: 'wrap' }}>
                    {project.tags.map(t => (
                      <span key={t} style={{
                        fontSize: '0.6rem', background: 'rgba(255,110,199,0.2)',
                        borderRadius: '8px', padding: '2px 7px', color: '#ffb6c1',
                      }}>{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>

      <style>{`
        @media (max-width: 1100px) { .all-projects-grid { grid-template-columns: repeat(3, 1fr) !important; } }
        @media (max-width: 768px)  { .all-projects-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 480px)  { .all-projects-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}
