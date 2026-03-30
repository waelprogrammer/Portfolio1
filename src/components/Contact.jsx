import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, Mail, AtSign, MapPin, Phone } from 'lucide-react';
import { personalInfo } from '../config/siteAssets';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [focused, setFocused] = useState({});
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const inputStyle = (field) => ({
    width: '100%',
    background: 'rgba(255,255,255,0.04)',
    border: `1.5px solid ${focused[field] ? '#ff6ec7' : 'rgba(255,255,255,0.1)'}`,
    borderRadius: '14px',
    padding: '18px 18px 10px',
    color: 'white',
    fontFamily: 'Space Grotesk',
    fontSize: '0.95rem',
    outline: 'none',
    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
    boxShadow: focused[field] ? '0 0 0 3px rgba(255,110,199,0.1)' : 'none',
    resize: 'none',
  });

  const labelStyle = (field) => ({
    position: 'absolute',
    left: '18px',
    top: formData[field] || focused[field] ? '8px' : '50%',
    transform: formData[field] || focused[field] ? 'none' : 'translateY(-50%)',
    fontSize: formData[field] || focused[field] ? '0.7rem' : '0.9rem',
    color: focused[field] ? '#ff6ec7' : 'rgba(255,255,255,0.35)',
    transition: 'all 0.25s ease',
    pointerEvents: 'none',
    fontWeight: '500',
    letterSpacing: '0.3px',
    zIndex: 1,
  });

  return (
    <section id="contact" ref={ref} style={{ padding: '120px 0', position: 'relative' }} className="grid-bg">
      <div style={{
        position: 'absolute', left: '20%', top: '20%',
        width: '400px', height: '400px',
        background: 'radial-gradient(ellipse, rgba(255,110,199,0.07) 0%, transparent 70%)',
        filter: 'blur(60px)', pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          style={{ textAlign: 'center', marginBottom: '72px' }}
        >
          <span style={{ fontSize: '0.75rem', letterSpacing: '3px', textTransform: 'uppercase', color: '#ff6ec7', fontWeight: '600' }}>
            Contact
          </span>
          <div className="section-divider" style={{ margin: '12px auto 0' }} />
          <h2 className="section-title" style={{ marginTop: '20px' }}>
            <span className="text-gradient-white">Let's Work</span>{' '}
            <span className="text-gradient">Together</span>
          </h2>
          <p style={{ maxWidth: '480px', margin: '16px auto 0', color: 'rgba(255,255,255,0.5)', lineHeight: '1.8' }}>
            Have a project in mind? Let's create something extraordinary together.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '64px', alignItems: 'start' }} className="contact-layout">
          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}
          >
            <div>
              <h3 style={{ fontFamily: 'Playfair Display', fontSize: '1.6rem', marginBottom: '16px' }}>
                Ready to Start a Project?
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.55)', lineHeight: '1.8' }}>
                Whether it's a video campaign, a photoshoot, social media management, or a new website — I'm here to bring your vision to life.
              </p>
            </div>

            {/* Contact Details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { icon: Mail, label: 'Email', value: personalInfo.email, color: '#ff6ec7' },
                { icon: AtSign, label: 'Instagram', value: personalInfo.instagram, color: '#e91e8c' },
                { icon: MapPin, label: 'Location', value: personalInfo.location, color: '#ffb6c1' },
                { icon: Phone, label: 'Phone', value: personalInfo.phone, color: '#ff6ec7' },
              ].map(({ icon: Icon, label, value, color }) => (
                <motion.div
                  key={label}
                  whileHover={{ x: 4 }}
                  className="glass"
                  style={{ padding: '16px 20px', borderRadius: '14px', display: 'flex', alignItems: 'center', gap: '16px' }}
                >
                  <div style={{
                    width: '40px', height: '40px', borderRadius: '12px',
                    background: `rgba(${color === '#ff6ec7' ? '255,110,199' : color === '#e91e8c' ? '233,30,140' : '255,182,193'}, 0.15)`,
                    border: `1px solid ${color}30`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <Icon size={17} color={color} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.35)', fontWeight: '500' }}>{label}</div>
                    <div style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.8)', fontWeight: '500' }}>{value}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Availability badge */}
            <motion.div
              animate={{ boxShadow: ['0 0 0 0 rgba(74,222,128,0.4)', '0 0 0 12px rgba(74,222,128,0)', '0 0 0 0 rgba(74,222,128,0)'] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="glass"
              style={{ padding: '16px 20px', borderRadius: '14px', display: 'flex', alignItems: 'center', gap: '12px' }}
            >
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#4ade80', boxShadow: '0 0 10px #4ade80' }} />
              <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)' }}>
                Currently available for new projects
              </span>
            </motion.div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {/* Name & Email row */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="form-row">
                {['name', 'email'].map(field => (
                  <div key={field} style={{ position: 'relative' }}>
                    <label style={labelStyle(field)}>
                      {field.charAt(0).toUpperCase() + field.slice(1)}
                    </label>
                    <input
                      type={field === 'email' ? 'email' : 'text'}
                      style={inputStyle(field)}
                      value={formData[field]}
                      onChange={e => setFormData({ ...formData, [field]: e.target.value })}
                      onFocus={() => setFocused({ ...focused, [field]: true })}
                      onBlur={() => setFocused({ ...focused, [field]: false })}
                      required
                    />
                  </div>
                ))}
              </div>

              {/* Subject */}
              <div style={{ position: 'relative' }}>
                <label style={labelStyle('subject')}>Subject</label>
                <input
                  type="text"
                  style={inputStyle('subject')}
                  value={formData.subject}
                  onChange={e => setFormData({ ...formData, subject: e.target.value })}
                  onFocus={() => setFocused({ ...focused, subject: true })}
                  onBlur={() => setFocused({ ...focused, subject: false })}
                />
              </div>

              {/* Message */}
              <div style={{ position: 'relative' }}>
                <label style={{ ...labelStyle('message'), top: formData.message || focused.message ? '10px' : '20px', transform: 'none' }}>
                  Message
                </label>
                <textarea
                  rows={6}
                  style={inputStyle('message')}
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  onFocus={() => setFocused({ ...focused, message: true })}
                  onBlur={() => setFocused({ ...focused, message: false })}
                  required
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary"
                style={{ padding: '16px 32px', fontSize: '1rem', justifyContent: 'center' }}
              >
                {sent ? '✓ Message Sent!' : <>Send Message <Send size={16} /></>}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-layout { grid-template-columns: 1fr !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
