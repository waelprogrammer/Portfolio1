import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Camera, Heart, Zap } from 'lucide-react';
import { photographyImages } from '../config/siteAssets';

// Grid span config — first and last photos are wider
const spanConfig = ['span 2', 'span 1', 'span 1', 'span 1', 'span 2'];

export default function Photography() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} style={{ padding: '120px 0', position: 'relative', overflow: 'hidden' }}>
      {/* Background glow */}
      <div style={{
        position: 'absolute', right: '10%', top: '20%',
        width: '500px', height: '500px',
        background: 'radial-gradient(ellipse, rgba(255,110,199,0.07) 0%, transparent 70%)',
        filter: 'blur(60px)', pointerEvents: 'none',
      }} />

      {/* Cinematic top/bottom bars */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
        background: 'linear-gradient(90deg, transparent, #ff6ec7, #e91e8c, #ff6ec7, transparent)',
      }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.8fr', gap: '80px', alignItems: 'center' }} className="photo-layout">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span style={{ fontSize: '0.75rem', letterSpacing: '3px', textTransform: 'uppercase', color: '#ff6ec7', fontWeight: '600' }}>
              Photography
            </span>
            <div className="section-divider" style={{ marginTop: '12px' }} />

            <h2 className="section-title" style={{ marginTop: '20px' }}>
              <span className="text-gradient-white">Capturing</span>
              <br />
              <span className="text-gradient">Raw Moments</span>
            </h2>

            <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: '1.85', fontSize: '0.98rem', marginTop: '24px' }}>
              Every frame tells a story. From the quiet emotion of a first dance to the electric energy
              of a celebration — I photograph the moments that matter most.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '32px' }}>
              {[
                { icon: Heart, label: 'Weddings & Engagements', color: '#ff6ec7' },
                { icon: Zap, label: 'Events & Corporate', color: '#e91e8c' },
                { icon: Camera, label: 'Parties & Celebrations', color: '#ffb6c1' },
              ].map(({ icon: Icon, label, color }) => (
                <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{
                    width: '40px', height: '40px',
                    background: `rgba(${color === '#ff6ec7' ? '255,110,199' : color === '#e91e8c' ? '233,30,140' : '255,182,193'}, 0.12)`,
                    border: `1px solid ${color}40`,
                    borderRadius: '12px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon size={18} color={color} />
                  </div>
                  <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>{label}</span>
                </div>
              ))}
            </div>

            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{
                marginTop: '40px',
                background: 'rgba(255,110,199,0.08)',
                border: '1px dashed rgba(255,110,199,0.4)',
                borderRadius: '14px',
                padding: '18px 22px',
                fontSize: '0.8rem',
                color: 'rgba(255,110,199,0.7)',
                lineHeight: '1.6',
              }}
            >
              <strong style={{ display: 'block', marginBottom: '4px' }}>📸 [PHOTOGRAPHY IMAGE PLACEHOLDER]</strong>
              Replace grid with real photography work — weddings, events, parties. High resolution,
              storytelling style, emotionally driven.
            </motion.div>
          </motion.div>

          {/* RIGHT — Photo Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gridTemplateRows: 'repeat(2, 220px)',
              gap: '12px',
            }}
            className="photo-grid"
          >
            {photographyImages.map((photo, i) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                whileHover={{ scale: 1.03, zIndex: 10 }}
                style={{
                  borderRadius: '14px',
                  gridColumn: spanConfig[i] || 'span 1',
                  overflow: 'hidden',
                  cursor: 'none',
                  position: 'relative',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
              >
                {photo.image ? (
                  <>
                    <img
                      src={photo.image}
                      alt={photo.label}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                    {/* label overlay */}
                    <div style={{
                      position: 'absolute', bottom: 0, left: 0, right: 0,
                      background: 'linear-gradient(transparent, rgba(5,5,8,0.8))',
                      padding: '20px 12px 10px',
                      fontSize: '0.75rem', fontWeight: '600', color: 'rgba(255,255,255,0.8)',
                    }}>{photo.label}</div>
                  </>
                ) : (
                  <div className="placeholder-box" style={{ height: '100%', borderRadius: '0', border: 'none' }}>
                    <div style={{ fontSize: '2rem' }}>{photo.emoji}</div>
                    <div style={{ fontSize: '0.72rem', fontWeight: '600', color: 'rgba(255,110,199,0.6)' }}>
                      {photo.label}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .photo-layout { grid-template-columns: 1fr !important; }
          .photo-grid { grid-template-rows: repeat(3, 160px) !important; }
        }
      `}</style>
    </section>
  );
}
