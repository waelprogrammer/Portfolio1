import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial, Ring, Torus, Environment } from '@react-three/drei';
import { useRef, Suspense } from 'react';
import { profileImage } from '../config/siteAssets';

function AvatarScene() {
  const groupRef = useRef();
  const orbitRingRef = useRef();
  const orbitRing2Ref = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.15;
    }
    if (orbitRingRef.current) {
      orbitRingRef.current.rotation.z = state.clock.elapsedTime * 0.4;
      orbitRingRef.current.rotation.x = 0.3;
    }
    if (orbitRing2Ref.current) {
      orbitRing2Ref.current.rotation.z = -state.clock.elapsedTime * 0.25;
      orbitRing2Ref.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.5}>
        {/* Main body sphere */}
        <Sphere args={[1.4, 64, 64]} position={[0, 0, 0]}>
          <MeshDistortMaterial
            color="#2a0a1a"
            distort={0.15}
            speed={1.5}
            roughness={0.2}
            metalness={0.9}
            emissive="#ff1493"
            emissiveIntensity={0.08}
          />
        </Sphere>

        {/* Head sphere */}
        <Sphere args={[0.9, 64, 64]} position={[0, 1.5, 0]}>
          <MeshDistortMaterial
            color="#3a1020"
            distort={0.1}
            speed={1}
            roughness={0.15}
            metalness={0.85}
            emissive="#ff6ec7"
            emissiveIntensity={0.12}
          />
        </Sphere>

        {/* Glow halo */}
        <Sphere args={[1.5, 32, 32]} position={[0, 1.5, -0.2]}>
          <meshStandardMaterial
            color="#ff6ec7"
            transparent
            opacity={0.06}
            emissive="#ff6ec7"
            emissiveIntensity={1}
          />
        </Sphere>

        {/* Inner glow sphere */}
        <Sphere args={[1.6, 32, 32]} position={[0, 0, 0]}>
          <meshStandardMaterial
            color="#ff6ec7"
            transparent
            opacity={0.04}
            emissive="#e91e8c"
            emissiveIntensity={0.6}
            side={2}
          />
        </Sphere>

        {/* Small accent spheres */}
        <Sphere args={[0.18, 32, 32]} position={[1.1, 1.2, 0.8]}>
          <meshStandardMaterial color="#ff6ec7" emissive="#ff6ec7" emissiveIntensity={1.5} />
        </Sphere>
        <Sphere args={[0.12, 32, 32]} position={[-0.9, 2.1, 0.6]}>
          <meshStandardMaterial color="#ffb6c1" emissive="#ffb6c1" emissiveIntensity={2} />
        </Sphere>
        <Sphere args={[0.08, 32, 32]} position={[0.5, 2.5, 0.4]}>
          <meshStandardMaterial color="#fff" emissive="#fff" emissiveIntensity={3} />
        </Sphere>
      </Float>

      {/* Orbiting ring 1 */}
      <Torus ref={orbitRingRef} args={[2.2, 0.025, 16, 100]} position={[0, 0.5, 0]}>
        <meshStandardMaterial
          color="#ff6ec7"
          emissive="#ff6ec7"
          emissiveIntensity={1}
          transparent
          opacity={0.7}
        />
      </Torus>

      {/* Orbiting ring 2 */}
      <Torus ref={orbitRing2Ref} args={[1.8, 0.018, 16, 100]} position={[0, 0.5, 0]}>
        <meshStandardMaterial
          color="#e91e8c"
          emissive="#e91e8c"
          emissiveIntensity={0.8}
          transparent
          opacity={0.5}
        />
      </Torus>

      {/* Particle dots on orbit */}
      {[...Array(8)].map((_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        const r = 2.2;
        return (
          <Sphere
            key={i}
            args={[0.06, 16, 16]}
            position={[Math.cos(angle) * r, 0.5 + Math.sin(angle * 0.5) * 0.3, Math.sin(angle) * r]}
          >
            <meshStandardMaterial
              color="#ff6ec7"
              emissive="#ff6ec7"
              emissiveIntensity={2}
            />
          </Sphere>
        );
      })}
    </group>
  );
}

export default function Avatar3D() {
  // If a real profile photo is set in siteAssets.js, show it instead of the 3D avatar
  if (profileImage) {
    return (
      <div style={{ width: '100%', height: '100%', position: 'relative' }}>
        <div style={{
          position: 'absolute', inset: '10%', borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(255,110,199,0.3) 0%, transparent 70%)',
          filter: 'blur(40px)', zIndex: 0,
        }} />
        <div style={{
          position: 'relative', zIndex: 1, width: '100%', height: '100%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          {/* Glow ring behind image */}
          <div style={{
            position: 'absolute',
            width: '420px', height: '420px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, rgba(255,110,199,0.25), rgba(233,30,140,0.1))',
            filter: 'blur(20px)',
          }} />
          <div style={{
            position: 'relative',
            width: '380px', height: '480px',
            borderRadius: '200px 200px 180px 180px',
            overflow: 'hidden',
            border: '2px solid rgba(255,110,199,0.3)',
            boxShadow: '0 0 60px rgba(255,110,199,0.3), 0 0 120px rgba(255,110,199,0.1)',
          }}>
            <img
              src={profileImage}
              alt="Profile"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
            />
          </div>
        </div>
      </div>
    );
  }

  // Default: 3D animated avatar (shown when profileImage is null)
  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      {/* Pink glow background */}
      <div style={{
        position: 'absolute',
        inset: '20%',
        borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(255,110,199,0.25) 0%, transparent 70%)',
        filter: 'blur(30px)',
        zIndex: 0,
      }} />
      <Canvas
        camera={{ position: [0, 1, 6], fov: 50 }}
        gl={{ alpha: true, antialias: true }}
        style={{ background: 'transparent', position: 'relative', zIndex: 1 }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} color="#fff" />
          <pointLight position={[3, 4, 3]} intensity={3} color="#ff6ec7" />
          <pointLight position={[-3, -2, -3]} intensity={1.5} color="#e91e8c" />
          <pointLight position={[0, 5, 2]} intensity={1} color="#ffb6c1" />
          <spotLight position={[2, 5, 4]} angle={0.4} penumbra={0.7} intensity={4} color="#ff6ec7" />
          <AvatarScene />
          <Environment preset="night" />
        </Suspense>
      </Canvas>
      {/* Placeholder badge — disappears once profileImage is set */}
      <div style={{
        position: 'absolute', bottom: '24px', left: '50%',
        transform: 'translateX(-50%)',
        background: 'rgba(255,110,199,0.15)',
        border: '1px dashed rgba(255,110,199,0.5)',
        borderRadius: '30px', padding: '8px 20px',
        fontSize: '0.75rem', color: 'rgba(255,110,199,0.8)',
        whiteSpace: 'nowrap', backdropFilter: 'blur(10px)', zIndex: 2,
      }}>
        📸 Add photo → src/config/siteAssets.js
      </div>
    </div>
  );
}
