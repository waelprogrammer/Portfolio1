import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Camera, Code2, Palette, TrendingUp, Video, University } from 'lucide-react';
import { aboutImage } from '../config/siteAssets';
import { useLanguage } from '../context/LanguageContext';

const roleIcons = [Video, Palette, TrendingUp, Camera, Code2, University];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { t } = useLanguage();

  return (
    <section id="about" ref={ref} style={{ padding: '120px 0', position: 'relative' }}>
      {/* Background decoration */}
      <div style={{
        position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)',
        width: '400px', height: '400px',
        background: 'radial-gradient(ellipse, rgba(255,110,199,0.08) 0%, transparent 70%)',
        filter: 'blur(40px)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'center',
        }}
        className="about-grid"
        >
          {/* LEFT — Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
            style={{ position: 'relative' }}
          >
            {/* Main image placeholder */}
            <div style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden' }}>
              {/* Glow border */}
              <div style={{
                position: 'absolute', inset: '-2px',
                borderRadius: '24px',
                background: 'linear-gradient(135deg, #ff6ec7, #e91e8c, #ff6ec7)',
                zIndex: 0,
                animation: 'spin-slow 4s linear infinite',
              }} />
              {aboutImage ? (
                <img
                  src={aboutImage}
                  alt="About"
                  style={{
                    height: '480px', width: '100%',
                    borderRadius: '22px',
                    objectFit: 'cover', objectPosition: 'top',
                    position: 'relative', zIndex: 1,
                    display: 'block',
                  }}
                />
              ) : (
                <div className="placeholder-box" style={{
                  height: '480px', borderRadius: '22px',
                  position: 'relative', zIndex: 1, margin: '2px',
                }}>
                  <div style={{ fontSize: '3rem', marginBottom: '8px' }}>📷</div>
                  <div style={{ fontWeight: '700', fontSize: '0.9rem', color: 'rgba(255,110,199,0.8)' }}>
                    About photo → src/config/siteAssets.js
                  </div>
                </div>
              )}
            </div>

            {/* Floating experience card — outside overflow:hidden so it shows on top */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="glass-dark"
              style={{
                position: 'absolute',
                bottom: '-24px',
                right: '-24px',
                padding: '20px 24px',
                borderRadius: '16px',
                minWidth: '160px',
                zIndex: 10,
              }}
            >
              <div style={{ fontSize: '2rem', fontWeight: '800', lineHeight: '1' }} className="text-gradient">3+</div>
              <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', marginTop: '4px' }}>{t.about.years}</div>
            </motion.div>

            {/* Floating projects card */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="glass-dark"
              style={{
                position: 'absolute',
                top: '30px',
                right: '-32px',
                padding: '16px 20px',
                zIndex: 10,
                borderRadius: '14px',
              }}
            >
              <div style={{ fontSize: '1.5rem', fontWeight: '700', lineHeight: '1' }} className="text-gradient">50+</div>
              <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', marginTop: '2px' }}>{t.about.projects}</div>
            </motion.div>
          </motion.div>

          {/* RIGHT — Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}
          >
            {/* Label */}
            <div>
              <span style={{
                fontSize: '0.75rem', letterSpacing: '3px', textTransform: 'uppercase',
                color: '#ff6ec7', fontWeight: '600',
              }}>
                {t.about.label}
              </span>
              <div className="section-divider" style={{ marginTop: '12px' }} />
            </div>

            <h2 className="section-title" style={{ margin: 0 }}>
              <span className="text-gradient-white">{t.about.title1}</span>
              <br />
              <span className="text-gradient">{t.about.title2}</span>
            </h2>

            <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: '1.85', fontSize: '1rem' }}>
              {t.about.p1}
            </p>

            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: '1.85', fontSize: '0.95rem' }}>
              {t.about.p2}
            </p>

            {/* Role Cards */}
            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px',
            }}>
              {t.about.roles.map((role, i) => {
                const Icon = roleIcons[i];
                return (
                  <motion.div
                    key={role.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 + i * 0.08 }}
                    className="glass"
                    style={{
                      padding: '14px 16px',
                      borderRadius: '14px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      transition: 'all 0.3s ease',
                    }}
                    whileHover={{ scale: 1.03, borderColor: 'rgba(255,110,199,0.4)' }}
                  >
                    <div style={{
                      width: '36px', height: '36px',
                      background: 'linear-gradient(135deg, rgba(255,110,199,0.2), rgba(233,30,140,0.1))',
                      borderRadius: '10px',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      <Icon size={16} color="#ff6ec7" />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.83rem', fontWeight: '600', color: 'rgba(255,255,255,0.9)' }}>
                        {role.label}
                      </div>
                      <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', marginTop: '2px' }}>
                        {role.desc}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}
