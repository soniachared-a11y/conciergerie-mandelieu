"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { Mesh, Vector3 } from "three";

// Particules flottantes premium pour le background
function FloatingParticles() {
  const particlesRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  const particlePositions = Array.from({ length: 100 }, () => ({
    x: (Math.random() - 0.5) * 40,
    y: (Math.random() - 0.5) * 40,
    z: (Math.random() - 0.5) * 40,
  }));

  return (
    <group ref={particlesRef}>
      {particlePositions.map((pos, i) => (
        <mesh key={i} position={[pos.x, pos.y, pos.z]}>
          <sphereGeometry args={[0.05, 8, 8]} />
          <meshBasicMaterial
            color="#99ffcc"
            transparent
            opacity={Math.random() * 0.3 + 0.1}
          />
        </mesh>
      ))}
    </group>
  );
}

// Lignes lumineuses type "grille cyber"
function CyberGrid() {
  const gridRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (gridRef.current) {
      gridRef.current.position.z = ((state.clock.elapsedTime * 2) % 20) - 10;
    }
  });

  return (
    <group>
      {Array.from({ length: 20 }).map((_, i) => (
        <mesh
          key={`h-${i}`}
          position={[0, -5 + i, 0]}
          rotation={[0, 0, 0]}
        >
          <boxGeometry args={[40, 0.02, 0.02]} />
          <meshBasicMaterial
            color="#99ffcc"
            transparent
            opacity={0.15}
          />
        </mesh>
      ))}
      {Array.from({ length: 20 }).map((_, i) => (
        <mesh
          key={`v-${i}`}
          ref={i === 10 ? gridRef : null}
          position={[-10 + i, 0, 0]}
          rotation={[0, 0, Math.PI / 2]}
        >
          <boxGeometry args={[40, 0.02, 0.02]} />
          <meshBasicMaterial
            color="#99ffcc"
            transparent
            opacity={0.15}
          />
        </mesh>
      ))}
    </group>
  );
}

// Anneaux orbitaux
function OrbitalRings() {
  const ring1Ref = useRef<Mesh>(null);
  const ring2Ref = useRef<Mesh>(null);
  const ring3Ref = useRef<Mesh>(null);

  useFrame((state) => {
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = state.clock.elapsedTime * 0.2;
      ring1Ref.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.x = state.clock.elapsedTime * -0.15;
      ring2Ref.current.rotation.z = state.clock.elapsedTime * 0.1;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.y = state.clock.elapsedTime * 0.25;
      ring3Ref.current.rotation.z = state.clock.elapsedTime * -0.1;
    }
  });

  return (
    <group position={[0, 0, -5]}>
      <mesh ref={ring1Ref}>
        <torusGeometry args={[8, 0.02, 16, 100]} />
        <meshBasicMaterial color="#99ffcc" transparent opacity={0.3} />
      </mesh>
      <mesh ref={ring2Ref}>
        <torusGeometry args={[6, 0.015, 16, 100]} />
        <meshBasicMaterial color="#0d9488" transparent opacity={0.2} />
      </mesh>
      <mesh ref={ring3Ref}>
        <torusGeometry args={[10, 0.025, 16, 100]} />
        <meshBasicMaterial color="#99ffcc" transparent opacity={0.15} />
      </mesh>
    </group>
  );
}

function Scene() {
  return (
    <>
      <FloatingParticles />
      <CyberGrid />
      <OrbitalRings />
      <ambientLight intensity={0.2} />
      <pointLight position={[0, 0, 5]} intensity={1} color="#99ffcc" />
    </>
  );
}

export default function HeroBackground3D() {
  return (
    <div className="absolute inset-0 -z-10 opacity-40">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 60 }}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 1.5]}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
