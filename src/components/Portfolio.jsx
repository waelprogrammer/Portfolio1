import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { X, ExternalLink, Play } from 'lucide-react';
import { projects } from '../config/siteAssets';
import { useLanguage } from '../context/LanguageContext';

const typeEmoji = { video: '🎬', image: '🎨', photo: '📸', web: '💻' };
const typeLabel = { video: 'VIDEO', image: 'DESIGN', photo: 'PHOTO', web: 'WEB' };
const typeColor = {
  video: '#ff6ec7', image: '#e91e8c', photo: '#ffb6c1', web: '#c084fc',
};

function ProjectModal({ project, onClose }) {
  const { t } = useLanguage();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        position: 'fixed', inset: 0, zIndex: 9000,
        background: 'rgba(0,0,0,0.85)',
        backdropFilter: 'blur(12px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '24px',
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
          maxWidth: '700px', width: '100%',
          borderRadius: '24px', overflow: 'hidden',
          border: '1px solid rgba(255,110,199,0.25)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image area */}
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            style={{ width: '100%', height: '360px', objectFit: 'cover', display: 'block', borderBottom: '1px solid rgba(255,110,199,0.15)' }}
          />
        ) : (
          <div className="placeholder-box" style={{
            height: '360px', borderRadius: '0', border: 'none', borderBottom: '1px solid rgba(255,110,199,0.15)',
          }}>
            <div style={{ fontSize: '4rem' }}>{typeEmoji[project.type]}</div>
            <div style={{ fontWeight: '700', fontSize: '0.85rem', color: 'rgba(255,110,199,0.8)' }}>
              Set project image in src/config/siteAssets.js
            </div>
          </div>
        )}

        {/* Content */}
        <div style={{ padding: '32px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
            <div>
              <span style={{
                fontSize: '0.7rem', letterSpacing: '2px', fontWeight: '600',
                color: typeColor[project.type],
              }}>
                {typeLabel[project.type]} • {project.category}
              </span>
              <h3 style={{ fontFamily: 'Playfair Display', fontSize: '1.6rem', fontWeight: '700', marginTop: '8px' }}>
                {project.title}
              </h3>
            </div>
            <button
              onClick={onClose}
              style={{
                background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '10px', padding: '8px', color: 'rgba(255,255,255,0.6)',
                cursor: 'none', flexShrink: 0,
              }}
            >
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

          <div style={{ display: 'flex', gap: '12px' }}>
            <motion.button
              whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              className="btn-primary" style={{ fontSize: '0.85rem', padding: '10px 22px' }}
            >
              <ExternalLink size={14} /> {t.portfolio.viewProject}
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

const enFilters = ['All', 'Video Ads', 'Social Media', 'Photography', 'Websites'];

export default function Portfolio() {
  const { t } = useLanguage();
  const [activeIdx, setActiveIdx] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const filtered = activeIdx === 0 ? projects : projects.filter(p => p.category === enFilters[activeIdx]);

  return (
    <section id="portfolio" ref={ref} style={{ padding: '120px 0', position: 'relative' }}>
      <div style={{
        position: 'absolute', left: 0, top: '30%',
        width: '350px', height: '350px',
        background: 'radial-gradient(ellipse, rgba(233,30,140,0.08) 0%, transparent 70%)',
        filter: 'blur(50px)', pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <span style={{ fontSize: '0.75rem', letterSpacing: '3px', textTransform: 'uppercase', color: '#ff6ec7', fontWeight: '600' }}>
            {t.portfolio.label}
          </span>
          <div className="section-divider" style={{ margin: '12px auto 0' }} />
          <h2 className="section-title" style={{ marginTop: '20px' }}>
            <span className="text-gradient-white">{t.portfolio.title1}</span>{' '}
            <span className="text-gradient">{t.portfolio.title2}</span>
          </h2>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '48px' }}
        >
          {t.portfolio.filters.map((filter, idx) => (
            <motion.button
              key={idx}
              onClick={() => setActiveIdx(idx)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: '9px 22px',
                borderRadius: '30px',
                fontSize: '0.85rem',
                fontWeight: '500',
                cursor: 'none',
                border: activeIdx === idx
                  ? '1.5px solid #ff6ec7'
                  : '1.5px solid rgba(255,255,255,0.1)',
                background: activeIdx === idx
                  ? 'linear-gradient(135deg, #ff6ec7, #e91e8c)'
                  : 'rgba(255,255,255,0.04)',
                color: activeIdx === idx ? '#fff' : 'rgba(255,255,255,0.6)',
                boxShadow: activeIdx === idx ? '0 4px 20px rgba(255,110,199,0.35)' : 'none',
                transition: 'all 0.25s ease',
                backdropFilter: 'blur(10px)',
              }}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div
          layout
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px',
          }}
          className="portfolio-grid"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="portfolio-item"
                style={{ height: i % 3 === 1 ? '300px' : '250px' }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="thumb-inner" style={{ width: '100%', height: '100%' }}>
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
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
                  <span style={{
                    fontSize: '0.7rem', letterSpacing: '2px', color: typeColor[project.type],
                    fontWeight: '600', marginBottom: '4px',
                  }}>
                    {project.category}
                  </span>
                  <h4 style={{ fontFamily: 'Playfair Display', fontSize: '1.1rem', fontWeight: '700', margin: 0 }}>
                    {project.title}
                  </h4>
                  <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
                    {project.tags.map(t => (
                      <span key={t} style={{
                        fontSize: '0.65rem', background: 'rgba(255,110,199,0.2)',
                        borderRadius: '10px', padding: '2px 8px', color: '#ffb6c1',
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
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 900px) { .portfolio-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 580px) { .portfolio-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
