'use client';

import { useRef, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { useIsMobile, usePrefersReducedMotion } from '@/hooks/useMediaQuery';
import { shouldUse3D } from '@/lib/webgl';

/**
 * Animated 3D Sphere Component
 * Rotates and distorts with neon glow effect
 */
function AnimatedSphere() {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  
  useFrame((state) => {
    if (meshRef.current) {
      // Interactive rotation with mouse
      const x = (state.mouse.x * Math.PI) / 6;
      const y = (state.mouse.y * Math.PI) / 6;
      
      meshRef.current.rotation.x += (y - meshRef.current.rotation.x) * 0.05;
      meshRef.current.rotation.y += (x - meshRef.current.rotation.y) * 0.05;
      
      // Floating animation
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.3;
    }
  });

  return (
    <group>
      <Sphere 
        ref={meshRef} 
        args={[1, 100, 100]} 
        scale={hovered ? 2.2 : 2}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <MeshDistortMaterial
          color={hovered ? "#ff0080" : "#00ffff"}
          attach="material"
          distort={hovered ? 0.6 : 0.4}
          speed={hovered ? 3 : 2}
          roughness={0.2}
          metalness={0.8}
          emissive={hovered ? "#ff0080" : "#00ffff"}
          emissiveIntensity={hovered ? 0.8 : 0.5}
        />
      </Sphere>
      
      {/* Orbiting particles */}
      {[...Array(5)].map((_, i) => (
        <mesh
          key={i}
          position={[
            Math.cos((i * Math.PI * 2) / 5 + Date.now() * 0.001) * 3,
            Math.sin((i * Math.PI * 2) / 5 + Date.now() * 0.001) * 3,
            0
          ]}
        >
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial
            color="#ff0080"
            emissive="#ff0080"
            emissiveIntensity={1.5}
          />
        </mesh>
      ))}
    </group>
  );
}

/**
 * 3D Scene Component
 * Contains the animated sphere with lighting
 */
function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff0080" />
      <AnimatedSphere />
      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </>
  );
}

/**
 * Static Avatar Fallback Component
 * Used on mobile devices or when WebGL is not supported
 */
function StaticAvatar() {
  return (
    <div className="w-full h-full rounded-2xl bg-gradient-to-br from-neon-cyan/20 to-neon-magenta/20 flex items-center justify-center relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/10 via-transparent to-neon-magenta/10 animate-pulse" />
      
      {/* Avatar icon */}
      <div className="relative z-10 text-center">
        <div className="text-8xl mb-4 filter drop-shadow-[0_0_20px_rgba(0,255,255,0.5)]">
          👨‍💻
        </div>
        <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-neon-cyan/30 to-neon-magenta/30 blur-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10" />
      </div>
    </div>
  );
}

/**
 * Loading Component
 * Displayed while 3D scene is loading
 */
function LoadingFallback() {
  return (
    <div className="w-full h-full rounded-2xl bg-gradient-to-br from-neon-cyan/20 to-neon-magenta/20 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-neon-cyan border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-text-secondary text-sm">Loading 3D Avatar...</p>
      </div>
    </div>
  );
}

/**
 * Avatar3D Component
 * Displays a rotating 3D sphere with neon glow effect
 * Falls back to static image on mobile or when WebGL is not supported
 * 
 * @param {Object} props
 * @param {string} props.className - Additional CSS classes
 */
export default function Avatar3D({ className = '' }) {
  const [use3D, setUse3D] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const isMobile = useIsMobile();
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    setIsClient(true);
    
    // Check if we should use 3D based on device capabilities and user preferences
    const canUse3D = shouldUse3D(isMobile, prefersReducedMotion);
    setUse3D(canUse3D);
  }, [isMobile, prefersReducedMotion]);

  // Don't render anything on server
  if (!isClient) {
    return <LoadingFallback />;
  }

  // Use static avatar on mobile or if WebGL is not supported
  if (!use3D) {
    return <StaticAvatar />;
  }

  // Render 3D scene
  return (
    <div className={`w-full h-full ${className}`}>
      <Suspense fallback={<LoadingFallback />}>
        <Canvas
          camera={{ position: [0, 0, 5], fov: 45 }}
          style={{ background: 'transparent' }}
        >
          <Scene />
        </Canvas>
      </Suspense>
    </div>
  );
}
