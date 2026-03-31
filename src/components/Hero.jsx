import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import Avatar3D from './Avatar3D';
import { personalInfo } from '../config/siteAssets';
import { useLanguage } from '../context/LanguageContext';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (d = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.8, delay: d, ease: [0.4, 0, 0.2, 1] }
  }),
};

export default function Hero() {
  const { t } = useLanguage();
  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '80px',
      }}
    >

      {/* Deep gradient overlays */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'radial-gradient(ellipse 80% 60% at 20% 50%, rgba(233,30,140,0.12) 0%, transparent 60%)',
      }} />
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'radial-gradient(ellipse 60% 80% at 80% 50%, rgba(255,110,199,0.08) 0%, transparent 60%)',
      }} />
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '200px', zIndex: 2,
        background: 'linear-gradient(to top, #050508, transparent)',
      }} />

      {/* Grid background */}
      <div className="grid-bg" style={{ position: 'absolute', inset: 0, zIndex: 1, opacity: 0.6 }} />

      {/* Main Content */}
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 24px',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '48px',
        alignItems: 'center',
        position: 'relative',
        zIndex: 3,
      }}
      className="hero-grid"
      >
        {/* LEFT — Text */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
          {/* Badge */}
          <motion.div
            custom={0.2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
          >
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'rgba(255,110,199,0.1)',
              border: '1px solid rgba(255,110,199,0.25)',
              borderRadius: '30px',
              padding: '8px 16px',
              fontSize: '0.8rem',
              color: '#ff6ec7',
              backdropFilter: 'blur(10px)',
            }}>
              <Sparkles size={13} />
              {t.hero.badge}
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4ade80', boxShadow: '0 0 8px #4ade80' }} />
            </div>
          </motion.div>

          {/* Name */}
          <motion.div custom={0.4} variants={fadeUp} initial="hidden" animate="visible">
            <div style={{
              fontSize: '0.9rem',
              fontWeight: '500',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: 'rgba(255,110,199,0.7)',
              marginBottom: '12px',
            }}>
              {t.hero.label}
            </div>
            <h1 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(3rem, 6vw, 5.5rem)',
              fontWeight: '700',
              lineHeight: '1.0',
              letterSpacing: '-2px',
              margin: 0,
            }}>
              <span className="text-gradient-white">{personalInfo.firstName}</span>
              <br />
              <span className="text-gradient">{personalInfo.lastName}</span>
            </h1>
          </motion.div>

          {/* Tagline */}
          <motion.div custom={0.55} variants={fadeUp} initial="hidden" animate="visible">
            <div style={{
              display: 'flex', alignItems: 'center', gap: '12px',
              marginBottom: '8px',
            }}>
              <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, #ff6ec7, transparent)' }} />
            </div>
            <p style={{
              fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
              color: 'rgba(255,255,255,0.8)',
              fontWeight: '400',
              lineHeight: '1.6',
              fontFamily: 'Space Grotesk',
            }}>
              {t.hero.taglinePart1}{' '}
              <span style={{ color: '#ff6ec7', fontWeight: '600' }}>{t.hero.taglinePart2}</span>
            </p>
          </motion.div>

          {/* Skills pills */}
          <motion.div
            custom={0.7}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}
          >
            {['Video Editing', 'Photography', 'Digital Marketing', 'WordPress', 'Graphic Design'].map((skill) => (
              <span key={skill} style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '20px',
                padding: '5px 14px',
                fontSize: '0.78rem',
                color: 'rgba(255,255,255,0.6)',
                backdropFilter: 'blur(10px)',
              }}>
                {skill}
              </span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            custom={0.85}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="btn-primary"
              onClick={() => scrollTo('#portfolio')}
            >
              {t.hero.viewWork}
              <ArrowRight size={16} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="btn-outline"
              onClick={() => scrollTo('#contact')}
            >
              <Play size={14} fill="currentColor" />
              {t.hero.contactMe}
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            custom={1.0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            style={{ display: 'flex', gap: '36px', paddingTop: '8px' }}
          >
            {[
              { num: '50+', label: t.hero.stat1 },
              { num: '30+', label: t.hero.stat2 },
              { num: '3+',  label: t.hero.stat3 },
            ].map((stat) => (
              <div key={stat.label}>
                <div style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '1.8rem',
                  fontWeight: '700',
                  lineHeight: '1',
                }} className="text-gradient">
                  {stat.num}
                </div>
                <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', marginTop: '4px' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — 3D Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          style={{ height: '600px', position: 'relative' }}
          className="hero-avatar"
        >
          <Avatar3D />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{
          position: 'absolute', bottom: '32px', left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
          zIndex: 3,
        }}
      >
        <span style={{ fontSize: '0.7rem', letterSpacing: '2px', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase' }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          style={{
            width: '1.5px', height: '40px',
            background: 'linear-gradient(to bottom, #ff6ec7, transparent)',
          }}
        />
      </motion.div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; text-align: center; }
          .hero-avatar { height: 400px !important; }
        }
      `}</style>
    </section>
  );
}
