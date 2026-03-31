import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

const services = [
  {
    icon: '🎬',
    title: 'Video Editing',
    subtitle: 'Ads, Reels & Social Media',
    desc: 'Cinematic edits, color grading, motion graphics for ads, reels, and social media campaigns that capture attention.',
    tags: ['Premiere Pro', 'CapCut'],
    color: '#ff6ec7',
    glow: 'rgba(255,110,199,0.2)',
  },
  {
    icon: '🎨',
    title: 'Graphic Design',
    subtitle: 'Photoshop Ads & Branding',
    desc: 'Striking visual identities, ad creatives, posters, and branded content that communicate with impact.',
    tags: ['Photoshop'],
    color: '#e91e8c',
    glow: 'rgba(233,30,140,0.2)',
  },
  {
    icon: '📱',
    title: 'Digital Marketing',
    subtitle: 'Instagram Growth & Strategy',
    desc: 'Data-driven social media strategies to grow your audience, boost engagement, and convert followers into customers.',
    tags: ['Instagram', 'Facebook', 'Tiktok','youtube'],
    color: '#ff6ec7',
    glow: 'rgba(255,110,199,0.2)',
  },
  {
    icon: '📸',
    title: 'Photography',
    subtitle: 'Events, Weddings & Parties',
    desc: 'Capturing raw emotion and beautiful moments — weddings, corporate events, parties, and product shoots.',
    tags: ['Events', 'Weddings', 'Portrait'],
    color: '#ffb6c1',
    glow: 'rgba(255,182,193,0.2)',
  },
  {
    icon: '🎥',
    title: 'Live Camera Coverage',
    subtitle: 'Events & Live Streaming',
    desc: 'Professional real-time camera operation for live events, conferences, weddings, and broadcast productions.',
    tags: ['Live Events', 'Streaming', 'Coverage'],
    color: '#e91e8c',
    glow: 'rgba(233,30,140,0.2)',
  },
  {
    icon: '💻',
    title: 'WordPress Development',
    subtitle: 'Modern Web Experiences',
    desc: 'Clean, fast, and responsive WordPress websites tailored to your brand — with custom themes and SEO optimization.',
    tags: ['WordPress', 'Elementor', 'SEO'],
    color: '#ff6ec7',
    glow: 'rgba(255,110,199,0.2)',
  },
];

function ServiceCard({ service, index, isInView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
      className="glass service-card"
      style={{ padding: '32px 28px', borderRadius: '20px', position: 'relative', overflow: 'hidden', cursor: 'default' }}
    >
      {/* Glow background */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.5,
        background: `radial-gradient(ellipse at top left, ${service.glow}, transparent 60%)`,
        pointerEvents: 'none',
      }} />

      {/* Top line accent */}
      <div style={{
        position: 'absolute', top: 0, left: '28px', right: '28px', height: '2px',
        background: `linear-gradient(90deg, ${service.color}, transparent)`,
        borderRadius: '1px',
      }} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Icon */}
        <div style={{
          width: '64px', height: '64px',
          background: `linear-gradient(135deg, ${service.glow.replace('0.2', '0.25')}, rgba(5,5,8,0.5))`,
          border: `1px solid ${service.glow.replace('0.2', '0.35')}`,
          borderRadius: '18px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '28px',
          marginBottom: '24px',
          boxShadow: `0 8px 24px ${service.glow}`,
        }}>
          {service.icon}
        </div>

        <h3 style={{
          fontFamily: 'Space Grotesk',
          fontWeight: '700',
          fontSize: '1.2rem',
          color: '#fff',
          marginBottom: '4px',
        }}>
          {service.title}
        </h3>

        <p style={{
          fontSize: '0.78rem',
          color: service.color,
          fontWeight: '500',
          marginBottom: '14px',
          letterSpacing: '0.3px',
        }}>
          {service.subtitle}
        </p>

        <p style={{
          fontSize: '0.88rem',
          color: 'rgba(255,255,255,0.5)',
          lineHeight: '1.75',
          marginBottom: '22px',
        }}>
          {service.desc}
        </p>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {service.tags.map(tag => (
            <span key={tag} style={{
              background: `${service.glow.replace('0.2', '0.12')}`,
              border: `1px solid ${service.glow.replace('0.2', '0.3')}`,
              color: service.color,
              borderRadius: '20px',
              padding: '3px 12px',
              fontSize: '0.72rem',
              fontWeight: '500',
            }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const { t } = useLanguage();

  return (
    <section id="services" ref={ref} style={{ padding: '120px 0', position: 'relative' }} className="grid-bg">
      <div style={{
        position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)',
        width: '600px', height: '600px',
        background: 'radial-gradient(ellipse, rgba(255,110,199,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '72px' }}
        >
          <span style={{
            fontSize: '0.75rem', letterSpacing: '3px', textTransform: 'uppercase',
            color: '#ff6ec7', fontWeight: '600',
          }}>
            {t.services.label}
          </span>
          <div className="section-divider" style={{ margin: '12px auto 0' }} />
          <h2 className="section-title" style={{ marginTop: '20px' }}>
            <span className="text-gradient-white">{t.services.title1}</span>{' '}
            <span className="text-gradient">{t.services.title2}</span>
          </h2>
          <p style={{
            maxWidth: '520px', margin: '16px auto 0',
            color: 'rgba(255,255,255,0.5)', lineHeight: '1.8', fontSize: '1rem',
          }}>
            {t.services.subtitle}
          </p>
        </motion.div>

        {/* Cards grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
        }}
        className="services-grid"
        >
          {services.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} isInView={isInView} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) { .services-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 640px) { .services-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
