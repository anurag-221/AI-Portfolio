
'use client';

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface SceneProps {
  isDarkMode: boolean;
}

export const Scene: React.FC<SceneProps> = ({ isDarkMode }) => {
  const pointsRef = useRef<THREE.Points>(null!);
  const sphereRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (pointsRef.current) {
      pointsRef.current.rotation.y = time * 0.05;
      pointsRef.current.rotation.x = time * 0.02;
    }
  });

  const particlesCount = 1000;
  const positions = new Float32Array(particlesCount * 3);
  for (let i = 0; i < particlesCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 15;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 15;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 15;
  }

  const accentColor = isDarkMode ? '#22d3ee' : '#0891b2';

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute 
            attach="attributes-position"
            count={particlesCount}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial 
          size={0.02} 
          color={accentColor} 
          transparent 
          opacity={0.6} 
          sizeAttenuation 
        />
      </points>

      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <Sphere ref={sphereRef} args={[1, 64, 64]} position={[3, 1, -2]}>
          <MeshDistortMaterial
            color={accentColor}
            speed={2}
            distort={0.4}
            radius={1}
          />
        </Sphere>
      </Float>

      <Float speed={1.5} rotationIntensity={1} floatIntensity={1}>
        <mesh position={[-4, -2, -3]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color={isDarkMode ? "#8b5cf6" : "#7c3aed"} wireframe />
        </mesh>
      </Float>
    </>
  );
};
