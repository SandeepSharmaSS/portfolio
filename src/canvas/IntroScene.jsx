"use client";

import { Canvas, useFrame } from "@react-three/fiber";

import {
  Float,
  OrbitControls,
  Environment,
  Line,
  Points,
  PointMaterial,
} from "@react-three/drei";

import { useRef, useMemo } from "react";

/* =========================================
   MAIN TECH ORB
========================================= */

const TechOrb = () => {

  const groupRef = useRef();

  useFrame((state) => {

    if (!groupRef.current) return;

    groupRef.current.rotation.y =
      state.clock.elapsedTime * 0.1;

    groupRef.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.2) * 0.04;
  });

  return (
    <group
      ref={groupRef}
      position={[0, 0.1, 0]}
      scale={0.78} // SMALLER SIZE
    >

      {/* MAIN CORE */}
      <mesh castShadow>
        <icosahedronGeometry args={[2.3, 10]} />

        <meshPhysicalMaterial
          color="#030712"
          roughness={0.18}
          metalness={1}
          clearcoat={1}
          clearcoatRoughness={0}
        />
      </mesh>

      {/* WIREFRAME */}
      <mesh scale={1.02}>
        <icosahedronGeometry args={[2.3, 2]} />

        <meshBasicMaterial
          color="#3b82f6"
          wireframe
        />
      </mesh>

      {/* CENTER BLUE LIGHT */}
      <mesh>
        <sphereGeometry args={[0.16, 32, 32]} />

        <meshStandardMaterial
          color="#60a5fa"
          emissive="#2563eb"
          emissiveIntensity={8}
        />
      </mesh>

      {/* SMALL GLOW LIGHTS */}
      <mesh position={[0.6, 0.2, 0.5]}>
        <sphereGeometry args={[0.05, 32, 32]} />

        <meshStandardMaterial
          color="#2563eb"
          emissive="#2563eb"
          emissiveIntensity={10}
        />
      </mesh>

      <mesh position={[-0.5, -0.3, 0.4]}>
        <sphereGeometry args={[0.04, 32, 32]} />

        <meshStandardMaterial
          color="#7c3aed"
          emissive="#7c3aed"
          emissiveIntensity={8}
        />
      </mesh>

      {/* TECH PANELS */}
      {[...Array(24)].map((_, i) => (
        <mesh
          key={i}
          position={[
            Math.sin(i * 0.7) * 1.6,
            Math.cos(i * 1.1) * 1.4,
            Math.sin(i * 1.4) * 1.5,
          ]}
          rotation={[
            i * 0.3,
            i * 0.5,
            i * 0.2,
          ]}
        >
          <boxGeometry args={[0.45, 0.07, 0.04]} />

          <meshStandardMaterial
            color={
              i % 2 === 0
                ? "#2563eb"
                : "#7c3aed"
            }
            emissive={
              i % 2 === 0
                ? "#2563eb"
                : "#7c3aed"
            }
            emissiveIntensity={2.5}
          />
        </mesh>
      ))}

      {/* OUTER RINGS */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[3.2, 0.012, 16, 200]} />

        <meshBasicMaterial color="#2563eb" />
      </mesh>

      <mesh rotation={[0.5, 1, 0]}>
        <torusGeometry args={[3.5, 0.012, 16, 200]} />

        <meshBasicMaterial color="#7c3aed" />
      </mesh>

      <mesh rotation={[1, 0.2, 0]}>
        <torusGeometry args={[3.9, 0.008, 16, 200]} />

        <meshBasicMaterial color="#60a5fa" />
      </mesh>

    </group>
  );
};

/* =========================================
   TECH LINES
========================================= */

const TechLines = () => {
  return (
    <group>

      {/* TOP */}
      <Line
        points={[
          [-8, 2.5, -2],
          [-5, 2, -1],
          [-2, 2.4, 0],
          [2, 2.2, 0],
          [5, 1.8, -1],
          [8, 2.5, -2],
        ]}
        color="#172554"
        lineWidth={1}
      />

      {/* BOTTOM */}
      <Line
        points={[
          [-8, -2.5, -2],
          [-5, -2, -1],
          [-2, -2.4, 0],
          [2, -2.2, 0],
          [5, -1.8, -1],
          [8, -2.5, -2],
        ]}
        color="#1d4ed8"
        lineWidth={1}
      />

      {/* LEFT */}
      <Line
        points={[
          [-6, 3, -1],
          [-5, 1, 0],
          [-6, -1, 0],
          [-5, -3, 0],
        ]}
        color="#581c87"
        lineWidth={1}
      />

      {/* RIGHT */}
      <Line
        points={[
          [6, 3, -1],
          [5, 1, 0],
          [6, -1, 0],
          [5, -3, 0],
        ]}
        color="#2563eb"
        lineWidth={1}
      />

    </group>
  );
};

/* =========================================
   PARTICLES
========================================= */

const Particles = () => {

  const positions = useMemo(() => {

    const arr = new Float32Array(1200);

    for (let i = 0; i < 1200; i += 3) {

      arr[i] =
        ((i % 60) - 30) * 0.35;

      arr[i + 1] =
        Math.sin(i * 0.15) * 5;

      arr[i + 2] =
        Math.cos(i * 0.2) * 3;
    }

    return arr;

  }, []);

  return (
    <Points
      positions={positions}
      stride={3}
    >
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.015}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
};

/* =========================================
   DARK CINEMATIC OVERLAY
========================================= */

const DarkOverlay = () => {
  return (
    <>
      {/* CENTER DARKNESS */}
      <mesh position={[0, 0, -8]}>
        <planeGeometry args={[40, 25]} />

        <meshBasicMaterial
          color="#000000"
          transparent
          opacity={0.45}
        />
      </mesh>

      {/* LEFT SHADOW */}
      <mesh position={[-10, 0, -7]}>
        <planeGeometry args={[12, 25]} />

        <meshBasicMaterial
          color="#000000"
          transparent
          opacity={0.65}
        />
      </mesh>

      {/* RIGHT SHADOW */}
      <mesh position={[10, 0, -7]}>
        <planeGeometry args={[12, 25]} />

        <meshBasicMaterial
          color="#000000"
          transparent
          opacity={0.65}
        />
      </mesh>

      {/* TOP SHADOW */}
      <mesh position={[0, 7, -7]}>
        <planeGeometry args={[40, 10]} />

        <meshBasicMaterial
          color="#000000"
          transparent
          opacity={0.55}
        />
      </mesh>

      {/* BOTTOM SHADOW */}
      <mesh position={[0, -7, -7]}>
        <planeGeometry args={[40, 10]} />

        <meshBasicMaterial
          color="#000000"
          transparent
          opacity={0.7}
        />
      </mesh>
    </>
  );
};

/* =========================================
   MAIN INTRO SCENE
========================================= */

const IntroScene = () => {
  return (
    <Canvas
      camera={{
        position: [0, 0, 10],
        fov: 42,
      }}
    >

      {/* BACKGROUND */}
      <color
        attach="background"
        args={["#01030a"]}
      />

      {/* FOG */}
      <fog
        attach="fog"
        args={["#01030a", 5, 16]}
      />

      {/* LIGHTS */}
      <ambientLight intensity={0.25} />

      <directionalLight
        position={[5, 5, 5]}
        intensity={1}
        color="#7c3aed"
      />

      <pointLight
        position={[2, 1, 3]}
        intensity={8}
        color="#2563eb"
      />

      <pointLight
        position={[-2, -1, 2]}
        intensity={6}
        color="#7c3aed"
      />

      {/* BLUE CENTER LIGHT */}
      <pointLight
        position={[0, 0, 2]}
        intensity={18}
        color="#3b82f6"
      />

      {/* ENVIRONMENT */}
      <Environment preset="night" />

      {/* DARK OVERLAY */}
      <DarkOverlay />

      {/* BACKGROUND LINES */}
      <TechLines />

      {/* PARTICLES */}
      <Particles />

      {/* MAIN OBJECT */}
      <Float
        speed={1}
        rotationIntensity={0.15}
        floatIntensity={0.2}
      >
        <TechOrb />
      </Float>

      {/* CAMERA */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={false}
      />

    </Canvas>
  );
};

export default IntroScene;