import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function PageTransition({ children }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Intro loader */}
      <AnimatePresence>
        {!loaded && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            style={{
              position: 'fixed', inset: 0, zIndex: 99999,
              background: '#050508',
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              gap: '24px',
            }}
          >
            {/* Logo mark */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
              style={{
                width: '72px', height: '72px',
                background: 'linear-gradient(135deg, #ff6ec7, #e91e8c)',
                borderRadius: '20px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '32px', fontWeight: '800', color: 'white',
                boxShadow: '0 0 40px rgba(255,110,199,0.6)',
              }}
            >
              L
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              style={{ textAlign: 'center' }}
            >
              <div style={{
                fontFamily: 'Playfair Display', fontSize: '1.8rem', fontWeight: '700',
                background: 'linear-gradient(135deg, #ffffff, #ff6ec7)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>
                Ranim Toutanji
              </div>
              <div style={{ fontSize: '0.8rem', letterSpacing: '3px', color: 'rgba(255,110,199,0.6)', marginTop: '6px', textTransform: 'uppercase' }}>
                Creative Studio
              </div>
            </motion.div>

            {/* Loading bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              style={{ width: '200px', height: '2px', background: 'rgba(255,255,255,0.1)', borderRadius: '1px', overflow: 'hidden' }}
            >
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.4, delay: 0.6, ease: 'easeInOut' }}
                style={{ height: '100%', background: 'linear-gradient(90deg, #ff6ec7, #e91e8c)', borderRadius: '1px' }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Page content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: 0.6 }}
      >
        {children}
      </motion.div>
    </>
  );
}
