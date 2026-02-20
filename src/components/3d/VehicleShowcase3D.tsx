"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, PerspectiveCamera, Float, Sparkles } from "@react-three/drei";
import { Suspense } from "react";

function VehicleModel() {
  return (
    <Float
      speed={1.5}
      rotationIntensity={0.3}
      floatIntensity={0.5}
      floatingRange={[-0.1, 0.1]}
    >
      {/* Groupe principal du véhicule */}
      <group position={[0, -0.5, 0]} rotation={[0, Math.PI * 0.25, 0]}>
        {/* Carrosserie principale - forme stylisée de SUV de luxe */}
        <mesh castShadow receiveShadow>
          <boxGeometry args={[4, 1.5, 2]} />
          <meshStandardMaterial
            color="#1a1a1a"
            metalness={0.9}
            roughness={0.1}
            envMapIntensity={1.5}
          />
        </mesh>

        {/* Toit */}
        <mesh position={[0, 1, 0]} castShadow>
          <boxGeometry args={[3.5, 1, 1.8]} />
          <meshStandardMaterial
            color="#0a0a0a"
            metalness={0.95}
            roughness={0.05}
            envMapIntensity={2}
          />
        </mesh>

        {/* Capot */}
        <mesh position={[1.5, 0.2, 0]} rotation={[0, 0, -0.1]} castShadow>
          <boxGeometry args={[1.5, 0.3, 1.9]} />
          <meshStandardMaterial
            color="#1a1a1a"
            metalness={0.9}
            roughness={0.1}
            envMapIntensity={1.5}
          />
        </mesh>

        {/* Roues - Position avant gauche */}
        <group position={[1.3, -0.8, 1.1]}>
          <mesh rotation={[0, 0, Math.PI / 2]} castShadow>
            <cylinderGeometry args={[0.5, 0.5, 0.3, 32]} />
            <meshStandardMaterial color="#0a0a0a" metalness={0.8} roughness={0.2} />
          </mesh>
          <mesh rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.3, 0.3, 0.32, 32]} />
            <meshStandardMaterial color="#99ffcc" emissive="#99ffcc" emissiveIntensity={0.5} />
          </mesh>
        </group>

        {/* Roue avant droite */}
        <group position={[1.3, -0.8, -1.1]}>
          <mesh rotation={[0, 0, Math.PI / 2]} castShadow>
            <cylinderGeometry args={[0.5, 0.5, 0.3, 32]} />
            <meshStandardMaterial color="#0a0a0a" metalness={0.8} roughness={0.2} />
          </mesh>
          <mesh rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.3, 0.3, 0.32, 32]} />
            <meshStandardMaterial color="#99ffcc" emissive="#99ffcc" emissiveIntensity={0.5} />
          </mesh>
        </group>

        {/* Roue arrière gauche */}
        <group position={[-1.3, -0.8, 1.1]}>
          <mesh rotation={[0, 0, Math.PI / 2]} castShadow>
            <cylinderGeometry args={[0.5, 0.5, 0.3, 32]} />
            <meshStandardMaterial color="#0a0a0a" metalness={0.8} roughness={0.2} />
          </mesh>
          <mesh rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.3, 0.3, 0.32, 32]} />
            <meshStandardMaterial color="#99ffcc" emissive="#99ffcc" emissiveIntensity={0.5} />
          </mesh>
        </group>

        {/* Roue arrière droite */}
        <group position={[-1.3, -0.8, -1.1]}>
          <mesh rotation={[0, 0, Math.PI / 2]} castShadow>
            <cylinderGeometry args={[0.5, 0.5, 0.3, 32]} />
            <meshStandardMaterial color="#0a0a0a" metalness={0.8} roughness={0.2} />
          </mesh>
          <mesh rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.3, 0.3, 0.32, 32]} />
            <meshStandardMaterial color="#99ffcc" emissive="#99ffcc" emissiveIntensity={0.5} />
          </mesh>
        </group>

        {/* Vitres teintées */}
        <mesh position={[0.5, 1.3, 0.9]}>
          <boxGeometry args={[2, 0.8, 0.05]} />
          <meshPhysicalMaterial
            color="#1a1a1a"
            metalness={0}
            roughness={0.1}
            transmission={0.7}
            opacity={0.3}
            transparent
          />
        </mesh>
        <mesh position={[0.5, 1.3, -0.9]}>
          <boxGeometry args={[2, 0.8, 0.05]} />
          <meshPhysicalMaterial
            color="#1a1a1a"
            metalness={0}
            roughness={0.1}
            transmission={0.7}
            opacity={0.3}
            transparent
          />
        </mesh>

        {/* Phares avant - accent mint */}
        <mesh position={[2.2, 0.3, 0.7]}>
          <boxGeometry args={[0.3, 0.3, 0.2]} />
          <meshStandardMaterial
            color="#99ffcc"
            emissive="#99ffcc"
            emissiveIntensity={2}
          />
        </mesh>
        <mesh position={[2.2, 0.3, -0.7]}>
          <boxGeometry args={[0.3, 0.3, 0.2]} />
          <meshStandardMaterial
            color="#99ffcc"
            emissive="#99ffcc"
            emissiveIntensity={2}
          />
        </mesh>

        {/* Feux arrière - accent rouge */}
        <mesh position={[-2.1, 0.3, 0.8]}>
          <boxGeometry args={[0.2, 0.3, 0.3]} />
          <meshStandardMaterial
            color="#ff3333"
            emissive="#ff3333"
            emissiveIntensity={1.5}
          />
        </mesh>
        <mesh position={[-2.1, 0.3, -0.8]}>
          <boxGeometry args={[0.2, 0.3, 0.3]} />
          <meshStandardMaterial
            color="#ff3333"
            emissive="#ff3333"
            emissiveIntensity={1.5}
          />
        </mesh>
      </group>

      {/* Particules premium autour du véhicule */}
      <Sparkles
        count={50}
        scale={8}
        size={2}
        speed={0.3}
        opacity={0.4}
        color="#99ffcc"
      />
    </Float>
  );
}

function Scene() {
  return (
    <>
      {/* Caméra avec perspective premium */}
      <PerspectiveCamera makeDefault position={[5, 3, 8]} fov={50} />
      
      {/* Contrôles utilisateur - rotation douce */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={1}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 3}
      />

      {/* Éclairage premium multi-points */}
      <ambientLight intensity={0.3} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.3}
        penumbra={1}
        intensity={2}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <spotLight
        position={[-10, 5, -10]}
        angle={0.3}
        penumbra={1}
        intensity={1}
        color="#99ffcc"
      />
      <pointLight position={[0, -5, 0]} intensity={0.5} color="#99ffcc" />

      {/* Environnement HDR pour reflets réalistes */}
      <Environment preset="city" />

      {/* Sol réfléchissant */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, 0]} receiveShadow>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial
          color="#0a0a0a"
          metalness={0.8}
          roughness={0.2}
          envMapIntensity={1}
        />
      </mesh>

      {/* Modèle du véhicule */}
      <VehicleModel />
    </>
  );
}

export default function VehicleShowcase3D() {
  return (
    <div className="w-full h-full">
      <Canvas
        shadows
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
