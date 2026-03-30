import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const skills = [
  { name: 'Photoshop', level: 50, category: 'Design' },
  { name: 'Premiere Pro', level: 88, category: 'Video' },
  { name: 'Social Media Marketing', level: 90, category: 'Marketing' },
  { name: 'Photography', level: 85, category: 'Creative' },
  { name: 'WordPress', level: 20, category: 'Web' },
  { name: 'PHP', level: 80, category: 'Web' },
];

const tools = [
  { name: 'Photoshop', icon: '🎨' },
  { name: 'Premiere Pro', icon: '🎬' },
  { name: 'WordPress', icon: '💻' },
  { name: 'Canva', icon: '🖼️' },
  { name: 'CapCut', icon: '📱' },
  { name: 'Meta Business', icon: '📊' },
];

function SkillBar({ skill, isInView, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.1 }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.85)', fontWeight: '500' }}>
            {skill.name}
          </span>
          <span style={{
            fontSize: '0.65rem', color: '#ff6ec7', fontWeight: '600',
            background: 'rgba(255,110,199,0.1)', border: '1px solid rgba(255,110,199,0.2)',
            borderRadius: '10px', padding: '1px 8px', letterSpacing: '0.5px',
          }}>
            {skill.category}
          </span>
        </div>
        <span style={{ fontSize: '0.85rem', fontWeight: '700', color: '#ff6ec7' }}>
          {skill.level}%
        </span>
      </div>
      <div className="skill-bar-track">
        <motion.div
          className="skill-bar-fill"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1.4, delay: index * 0.1 + 0.3, ease: [0.4, 0, 0.2, 1] }}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" ref={ref} style={{ padding: '120px 0', position: 'relative' }} className="grid-bg">
      <div style={{
        position: 'absolute', right: '10%', bottom: '10%',
        width: '400px', height: '400px',
        background: 'radial-gradient(ellipse, rgba(255,110,199,0.07) 0%, transparent 70%)',
        filter: 'blur(50px)', pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          style={{ textAlign: 'center', marginBottom: '72px' }}
        >
          <span style={{ fontSize: '0.75rem', letterSpacing: '3px', textTransform: 'uppercase', color: '#ff6ec7', fontWeight: '600' }}>
            Expertise
          </span>
          <div className="section-divider" style={{ margin: '12px auto 0' }} />
          <h2 className="section-title" style={{ marginTop: '20px' }}>
            <span className="text-gradient-white">Skills &</span>{' '}
            <span className="text-gradient">Tools</span>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }} className="skills-layout">
          {/* Skill Bars */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <motion.h3
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              style={{ fontFamily: 'Playfair Display', fontSize: '1.5rem', marginBottom: '8px' }}
            >
              Proficiency Levels
            </motion.h3>
            {skills.map((skill, i) => (
              <SkillBar key={skill.name} skill={skill} isInView={isInView} index={i} />
            ))}
          </div>

          {/* Right — circular skill display & tools */}
          <div>
            {/* Circular charts */}
            <motion.h3
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              style={{ fontFamily: 'Playfair Display', fontSize: '1.5rem', marginBottom: '32px' }}
            >
              Core Strengths
            </motion.h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '48px' }}>
              {[
                { label: 'Video', value: 88, color: '#ff6ec7' },
                { label: 'Design', value: 92, color: '#e91e8c' },
                { label: 'Marketing', value: 90, color: '#ffb6c1' },
                { label: 'Photo', value: 85, color: '#ff6ec7' },
                { label: 'Web Dev', value: 75, color: '#c084fc' },
                { label: 'Creative', value: 95, color: '#e91e8c' },
              ].map((item, i) => {
                const circumference = 2 * Math.PI * 40;
                const dash = (item.value / 100) * circumference;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: i * 0.1 + 0.2 }}
                    className="glass"
                    style={{ padding: '20px', borderRadius: '16px', textAlign: 'center' }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <svg width="90" height="90" viewBox="0 0 90 90">
                      <circle cx="45" cy="45" r="40" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="6" />
                      <motion.circle
                        cx="45" cy="45" r="40"
                        fill="none"
                        stroke={item.color}
                        strokeWidth="6"
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        initial={{ strokeDashoffset: circumference }}
                        animate={isInView ? { strokeDashoffset: circumference - dash } : { strokeDashoffset: circumference }}
                        transition={{ duration: 1.5, delay: i * 0.1 + 0.5, ease: [0.4, 0, 0.2, 1] }}
                        transform="rotate(-90 45 45)"
                        style={{ filter: `drop-shadow(0 0 6px ${item.color})` }}
                      />
                      <text x="45" y="50" textAnchor="middle" fill="white" fontSize="15" fontWeight="700">
                        {item.value}%
                      </text>
                    </svg>
                    <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.6)', marginTop: '8px', fontWeight: '500' }}>
                      {item.label}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Tools */}
            <motion.h3
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              style={{ fontFamily: 'Playfair Display', fontSize: '1.5rem', marginBottom: '24px' }}
            >
              Tools I Use
            </motion.h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              {tools.map((tool, i) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: i * 0.08 + 0.4 }}
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="glass"
                  style={{
                    padding: '10px 16px', borderRadius: '40px',
                    display: 'flex', alignItems: 'center', gap: '8px',
                    fontSize: '0.82rem', color: 'rgba(255,255,255,0.75)', fontWeight: '500',
                    cursor: 'default',
                  }}
                >
                  <span>{tool.icon}</span> {tool.name}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .skills-layout { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
