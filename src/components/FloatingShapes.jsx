import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float, Environment, MeshTransmissionMaterial, Torus, Box } from '@react-three/drei';
import { useRef, Suspense } from 'react';
import * as THREE from 'three';

function GlassSphere({ position, scale, speed, distort, color }) {
  const meshRef = useRef();
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * speed * 0.3) * 0.3;
      meshRef.current.rotation.y += 0.005 * speed;
    }
  });
  return (
    <Float speed={speed} rotationIntensity={0.4} floatIntensity={1.5}>
      <Sphere ref={meshRef} args={[1, 64, 64]} position={position} scale={scale}>
        <MeshDistortMaterial
          color={color || '#ff6ec7'}
          attach="material"
          distort={distort || 0.35}
          speed={2}
          roughness={0.1}
          metalness={0.8}
          transparent
          opacity={0.65}
          envMapIntensity={1.5}
        />
      </Sphere>
    </Float>
  );
}

function GlassTorus({ position, scale, speed }) {
  const meshRef = useRef();
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.2;
      meshRef.current.rotation.z = state.clock.elapsedTime * speed * 0.15;
    }
  });
  return (
    <Float speed={speed * 0.7} rotationIntensity={0.5} floatIntensity={1}>
      <Torus ref={meshRef} args={[1, 0.35, 32, 64]} position={position} scale={scale}>
        <meshStandardMaterial
          color="#ff6ec7"
          metalness={0.9}
          roughness={0.1}
          transparent
          opacity={0.5}
          emissive="#ff1493"
          emissiveIntensity={0.3}
        />
      </Torus>
    </Float>
  );
}

function SmallCube({ position, scale, speed }) {
  const meshRef = useRef();
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.4;
      meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.3;
    }
  });
  return (
    <Float speed={speed * 1.2} rotationIntensity={1} floatIntensity={2}>
      <Box ref={meshRef} args={[1, 1, 1]} position={position} scale={scale}>
        <meshStandardMaterial
          color="#ffb6c1"
          metalness={0.7}
          roughness={0.2}
          transparent
          opacity={0.4}
          emissive="#ff6ec7"
          emissiveIntensity={0.2}
          wireframe
        />
      </Box>
    </Float>
  );
}

export default function FloatingShapes({ minimal = false }) {
  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        gl={{ alpha: true, antialias: true }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} color="#ff6ec7" />
          <directionalLight position={[5, 5, 5]} intensity={0.8} color="#ff6ec7" />
          <pointLight position={[-5, -5, -5]} intensity={0.5} color="#e91e8c" />
          <pointLight position={[3, 3, 3]} intensity={1} color="#ffb6c1" />

          <GlassSphere position={[-4, 2, -2]} scale={1.4} speed={0.8} distort={0.4} color="#ff6ec7" />
          <GlassSphere position={[4, -1, -3]} scale={1.0} speed={1.1} distort={0.3} color="#e91e8c" />
          <GlassSphere position={[2, 3, -1]} scale={0.6} speed={1.4} distort={0.5} color="#ffb6c1" />
          <GlassSphere position={[-2, -3, -2]} scale={0.8} speed={0.9} distort={0.35} color="#ff6ec7" />

          {!minimal && (
            <>
              <GlassTorus position={[5, 1, -4]} scale={0.5} speed={0.7} />
              <GlassTorus position={[-5, -2, -5]} scale={0.35} speed={1.2} />
              <SmallCube position={[1, -3, -1]} scale={0.3} speed={1.5} />
              <SmallCube position={[-3, 2.5, -3]} scale={0.25} speed={1.8} />
              <GlassSphere position={[0, 0, -6]} scale={2.5} speed={0.4} distort={0.2} color="#1a0520" />
            </>
          )}

          <Environment preset="night" />
        </Suspense>
      </Canvas>
    </div>
  );
}
