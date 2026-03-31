import { motion } from 'framer-motion';
import { AtSign, Video, Mail, ArrowUp, Heart } from 'lucide-react';
import { personalInfo } from '../config/siteAssets';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const handleNav = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const socials = [
    { icon: AtSign, label: 'Instagram', href: personalInfo.instagramUrl, color: '#e91e8c' },
    { icon: Video, label: 'YouTube', href: personalInfo.youtubeUrl, color: '#ff6ec7' },
    { icon: Mail, label: 'Email', href: `mailto:${personalInfo.email}`, color: '#ffb6c1' },
  ];

  const navLinks = [
    { label: t.nav.about, href: '#about' },
    { label: t.nav.services, href: '#services' },
    { label: t.nav.work, href: '#portfolio' },
    { label: t.nav.skills, href: '#skills' },
    { label: t.nav.contact, href: '#contact' },
  ];

  return (
    <footer style={{
      position: 'relative',
      background: '#030306',
      borderTop: '1px solid rgba(255,110,199,0.1)',
      overflow: 'hidden',
    }}>
      {/* Top glow line */}
      <div style={{
        position: 'absolute', top: 0, left: '10%', right: '10%', height: '1px',
        background: 'linear-gradient(90deg, transparent, #ff6ec7, #e91e8c, #ff6ec7, transparent)',
      }} />

      {/* Background glow */}
      <div style={{
        position: 'absolute', left: '50%', top: 0, transform: 'translateX(-50%)',
        width: '600px', height: '300px',
        background: 'radial-gradient(ellipse, rgba(255,110,199,0.05) 0%, transparent 70%)',
        filter: 'blur(40px)', pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '60px 24px 32px' }}>
        {/* Main footer grid */}
        <div style={{
          display: 'grid', gridTemplateColumns: '2fr 1fr 1fr',
          gap: '60px', marginBottom: '48px',
        }}
        className="footer-grid"
        >
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <div style={{
                width: '40px', height: '40px',
                background: 'linear-gradient(135deg, #ff6ec7, #e91e8c)',
                borderRadius: '12px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '18px', fontWeight: '700', color: 'white',
                boxShadow: '0 0 20px rgba(255,110,199,0.4)',
              }}>{personalInfo.firstName[0]}</div>
              <span style={{ fontFamily: 'Space Grotesk', fontWeight: '700', fontSize: '1.15rem' }}>
                <span style={{ color: 'white' }}>{personalInfo.firstName}</span>
                <span style={{
                  background: 'linear-gradient(135deg, #ff6ec7, #e91e8c)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                }}> {personalInfo.lastName}</span>
              </span>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.4)', lineHeight: '1.8', fontSize: '0.88rem', maxWidth: '300px' }}>
              {t.footer.desc}
            </p>

            {/* Social Icons */}
            <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
              {socials.map(({ icon: Icon, label, href, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  title={label}
                  style={{
                    width: '42px', height: '42px',
                    background: 'rgba(255,255,255,0.05)',
                    border: `1px solid rgba(255,255,255,0.1)`,
                    borderRadius: '12px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'all 0.3s ease',
                    cursor: 'none',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = `${color}20`;
                    e.currentTarget.style.borderColor = `${color}60`;
                    e.currentTarget.style.boxShadow = `0 0 20px ${color}40`;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <Icon size={17} color="rgba(255,255,255,0.6)" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 style={{ fontWeight: '600', fontSize: '0.85rem', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: '20px' }}>
              {t.footer.nav}
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={e => handleNav(e, link.href)}
                  className="nav-link"
                  style={{ width: 'fit-content', fontSize: '0.88rem' }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontWeight: '600', fontSize: '0.85rem', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: '20px' }}>
              {t.footer.services}
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {t.footer.serviceList.map(s => (
                <span key={s} style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.4)', cursor: 'default' }}>
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          paddingTop: '24px',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: '12px',
        }}>
          <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.3)' }}>
            {t.footer.copy}{' '}
            <Heart size={12} style={{ display: 'inline', color: '#ff6ec7', verticalAlign: 'middle' }} />
            {' '}in Lebanon.
          </p>

          {/* Scroll to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            style={{
              width: '40px', height: '40px', borderRadius: '50%',
              background: 'linear-gradient(135deg, #ff6ec7, #e91e8c)',
              border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'none',
              boxShadow: '0 4px 16px rgba(255,110,199,0.4)',
            }}
          >
            <ArrowUp size={16} color="white" />
          </motion.button>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </footer>
  );
}
