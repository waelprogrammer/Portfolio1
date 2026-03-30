import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, LayoutGrid } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { personalInfo } from '../config/siteAssets';

const links = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#portfolio', label: 'Work' },
  { href: '#skills', label: 'Skills' },
  { href: '#testimonials', label: 'Reviews' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isProjectsPage = location.pathname === '/projects';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    if (isProjectsPage) {
      // Navigate home first, then scroll
      navigate('/');
      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: scrolled ? '12px 0' : '20px 0',
        background: scrolled ? 'rgba(5,5,8,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,110,199,0.1)' : 'none',
        transition: 'all 0.4s ease',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <a href="#" onClick={(e) => handleNav(e, '#')} style={{ textDecoration: 'none' }}>
          <motion.div whileHover={{ scale: 1.05 }} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '36px', height: '36px',
              background: 'linear-gradient(135deg, #ff6ec7, #e91e8c)',
              borderRadius: '10px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '16px', fontWeight: '700', color: 'white',
              boxShadow: '0 0 20px rgba(255,110,199,0.5)',
            }}>{personalInfo.firstName[0]}</div>
            <span style={{ fontFamily: 'Space Grotesk', fontWeight: '700', fontSize: '1.1rem', letterSpacing: '-0.3px' }}>
              <span style={{ color: 'white' }}>{personalInfo.firstName}</span>
              <span className="text-gradient"> {personalInfo.lastName}</span>
            </span>
          </motion.div>
        </a>

        {/* Desktop Links */}
        <div style={{ display: 'flex', gap: '36px', alignItems: 'center' }} className="hidden-mobile">
          {links.map(link => (
            <a key={link.href} href={link.href} className="nav-link" onClick={(e) => handleNav(e, link.href)}>
              {link.label}
            </a>
          ))}

          {/* All Projects page link */}
          <motion.button
            onClick={() => { setMenuOpen(false); navigate('/projects'); }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            style={{
              display: 'flex', alignItems: 'center', gap: '6px',
              background: isProjectsPage
                ? 'linear-gradient(135deg, rgba(255,110,199,0.2), rgba(233,30,140,0.15))'
                : 'rgba(255,110,199,0.08)',
              border: `1.5px solid ${isProjectsPage ? '#ff6ec7' : 'rgba(255,110,199,0.3)'}`,
              borderRadius: '30px', padding: '8px 18px',
              color: '#ff6ec7', cursor: 'none', fontSize: '0.85rem', fontWeight: '600',
              transition: 'all 0.3s ease',
              boxShadow: isProjectsPage ? '0 0 16px rgba(255,110,199,0.25)' : 'none',
            }}
          >
            <LayoutGrid size={14} />
            Projects
          </motion.button>

          <motion.a
            href="#contact"
            onClick={(e) => handleNav(e, '#contact')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="btn-primary"
            style={{ padding: '10px 24px', fontSize: '0.85rem', textDecoration: 'none' }}
          >
            Hire Me
          </motion.a>
        </div>

        {/* Mobile Hamburger */}
        <motion.button
          onClick={() => setMenuOpen(!menuOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{
            background: 'rgba(255,110,199,0.1)',
            border: '1px solid rgba(255,110,199,0.3)',
            borderRadius: '10px',
            padding: '8px',
            color: '#ff6ec7',
            cursor: 'none',
            display: 'none',
          }}
          className="mobile-menu-btn"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              background: 'rgba(5,5,8,0.97)',
              backdropFilter: 'blur(20px)',
              borderTop: '1px solid rgba(255,110,199,0.15)',
              overflow: 'hidden',
            }}
          >
            <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNav(e, link.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="nav-link"
                  style={{ fontSize: '1.1rem' }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: links.length * 0.06 }}
                onClick={() => { setMenuOpen(false); navigate('/projects'); }}
                style={{
                  display: 'flex', alignItems: 'center', gap: '8px',
                  background: 'rgba(255,110,199,0.1)',
                  border: '1.5px solid rgba(255,110,199,0.3)',
                  borderRadius: '30px', padding: '10px 20px',
                  color: '#ff6ec7', cursor: 'none', fontSize: '1rem', fontWeight: '600',
                  width: 'fit-content',
                }}
              >
                <LayoutGrid size={16} /> All Projects
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </motion.nav>
  );
}
