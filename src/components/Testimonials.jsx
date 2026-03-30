import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    role: 'Brand Owner',
    company: 'Bloom Boutique',
    text: "Ranim completely transformed our Instagram presence. Her creative vision and editing skills are extraordinary — every reel she made went viral. She's not just talented, she's a strategic creative genius.",
    stars: 5,
    initial: 'S',
  },
  {
    id: 2,
    name: 'Ahmad K.',
    role: 'Event Planner',
    company: 'Golden Events LB',
    text: "The wedding photos she delivered were breathtaking. She captured every emotion, every small detail that we would have missed. Our clients were blown away. Will definitely work with her again.",
    stars: 5,
    initial: 'A',
  },
  {
    id: 3,
    name: 'Lena R.',
    role: 'Marketing Director',
    company: 'Zara Beirut',
    text: "We hired Ranim for a product campaign and were impressed from day one. The video ads she produced converted incredibly well. Professional, creative, and always delivers on time.",
    stars: 5,
    initial: 'L',
  },
  {
    id: 4,
    name: 'Ramzi B.',
    role: 'Restaurant Owner',
    company: 'Le Cedre',
    text: "She built our WordPress website from scratch — clean, fast, beautiful. Also manages our social media. Everything she touches looks premium. Couldn't ask for more.",
    stars: 5,
    initial: 'R',
  },
  {
    id: 5,
    name: 'Maya T.',
    role: 'Photographer',
    company: 'Freelance',
    text: "I collaborated with Ranim on a large wedding project. Her eye for composition and lighting is truly remarkable. She works seamlessly in a team and brings incredible energy to every shoot.",
    stars: 5,
    initial: 'M',
  },
];

const colors = ['#ff6ec7', '#e91e8c', '#c084fc', '#ffb6c1', '#f472b6'];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });


  const prev = () => {
    setDirection(-1);
    setCurrent(c => (c - 1 + testimonials.length) % testimonials.length);
  };
  const next = () => {
    setDirection(1);
    setCurrent(c => (c + 1) % testimonials.length);
  };

  const t = testimonials[current];

  return (
    <section id="testimonials" ref={ref} style={{ padding: '120px 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)',
        width: '600px', height: '400px',
        background: 'radial-gradient(ellipse, rgba(255,110,199,0.06) 0%, transparent 70%)',
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
            Testimonials
          </span>
          <div className="section-divider" style={{ margin: '12px auto 0' }} />
          <h2 className="section-title" style={{ marginTop: '20px' }}>
            <span className="text-gradient-white">What Clients</span>{' '}
            <span className="text-gradient">Say</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          style={{ maxWidth: '800px', margin: '0 auto' }}
        >
          {/* Main card */}
          <div style={{
            position: 'relative', minHeight: '320px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                initial={{ opacity: 0, x: direction * 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -direction * 60 }}
                transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                className="glass"
                style={{ padding: '48px', borderRadius: '24px', width: '100%', position: 'relative' }}
              >
                {/* Quote icon */}
                <div style={{
                  position: 'absolute', top: '-20px', left: '40px',
                  width: '44px', height: '44px',
                  background: 'linear-gradient(135deg, #ff6ec7, #e91e8c)',
                  borderRadius: '12px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 8px 24px rgba(255,110,199,0.4)',
                }}>
                  <Quote size={20} color="white" />
                </div>

                {/* Stars */}
                <div style={{ display: 'flex', gap: '4px', marginBottom: '20px', marginTop: '8px' }}>
                  {[...Array(t.stars)].map((_, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.08 }}
                      style={{ fontSize: '1rem', color: '#fbbf24' }}
                    >★</motion.span>
                  ))}
                </div>

                <p style={{
                  fontSize: '1.05rem', lineHeight: '1.9',
                  color: 'rgba(255,255,255,0.8)', fontStyle: 'italic',
                  marginBottom: '32px', fontFamily: 'Playfair Display',
                }}>
                  "{t.text}"
                </p>

                {/* Author */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{
                    width: '50px', height: '50px', borderRadius: '50%',
                    background: `linear-gradient(135deg, ${colors[current % colors.length]}, ${colors[(current + 1) % colors.length]})`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.2rem', fontWeight: '700', color: 'white',
                    flexShrink: 0,
                    boxShadow: `0 4px 16px ${colors[current % colors.length]}60`,
                  }}>
                    {t.initial}
                  </div>
                  <div>
                    <div style={{ fontWeight: '700', fontSize: '0.95rem' }}>{t.name}</div>
                    <div style={{ fontSize: '0.8rem', color: '#ff6ec7' }}>{t.role}</div>
                    <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)' }}>{t.company}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '24px', marginTop: '36px' }}>
            <motion.button
              onClick={prev}
              whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
              style={{
                width: '44px', height: '44px', borderRadius: '50%',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.12)',
                color: 'rgba(255,255,255,0.6)', cursor: 'none',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >
              <ChevronLeft size={18} />
            </motion.button>

            {/* Dots */}
            <div style={{ display: 'flex', gap: '8px' }}>
              {testimonials.map((_, i) => (
                <motion.button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                  animate={{ width: i === current ? '24px' : '8px', background: i === current ? '#ff6ec7' : 'rgba(255,255,255,0.2)' }}
                  style={{ height: '8px', borderRadius: '4px', border: 'none', cursor: 'none' }}
                />
              ))}
            </div>

            <motion.button
              onClick={next}
              whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
              style={{
                width: '44px', height: '44px', borderRadius: '50%',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.12)',
                color: 'rgba(255,255,255,0.6)', cursor: 'none',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >
              <ChevronRight size={18} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
