"use client";

import { Canvas, useFrame } from "@react-three/fiber";

import {
  Float,
  Sparkles,
  MeshDistortMaterial,
  GradientTexture,
} from "@react-three/drei";

import { useRef } from "react";

/* =========================
   FLOATING WAVE SPHERE
========================= */

function EnergySphere() {
  const sphereRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    if (sphereRef.current) {
      sphereRef.current.rotation.y =
        t * 0.25;

      sphereRef.current.rotation.x =
        Math.sin(t * 0.4) * 0.2;

      sphereRef.current.position.y =
        Math.sin(t * 1.2) * 0.25;
    }
  });

  return (
    <Float
      speed={2}
      rotationIntensity={1}
      floatIntensity={2}
    >
      <mesh
        ref={sphereRef}
        position={[3, 0, -2]}
      >
        <sphereGeometry
          args={[1.4, 64, 64]}
        />

        <MeshDistortMaterial
          speed={2}
          distort={0.35}
          radius={1}
          roughness={0}
          metalness={0.2}
        >
          <GradientTexture
            stops={[0, 0.5, 1]}
            colors={[
              "#06b6d4",
              "#3b82f6",
              "#8b5cf6",
            ]}
          />
        </MeshDistortMaterial>
      </mesh>
    </Float>
  );
}

/* =========================
   DIGITAL WAVES
========================= */

function DigitalWaves() {
  const wave1 = useRef();
  const wave2 = useRef();
  const wave3 = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    if (wave1.current) {
      wave1.current.rotation.z =
        t * 0.08;
    }

    if (wave2.current) {
      wave2.current.rotation.z =
        -t * 0.06;
    }

    if (wave3.current) {
      wave3.current.rotation.z =
        t * 0.04;
    }
  });

  return (
    <>
      {/* WAVE 1 */}
      <mesh
        ref={wave1}
        position={[3, 0, -2]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <torusGeometry
          args={[2.3, 0.015, 16, 300]}
        />

        <meshBasicMaterial
          color="#06b6d4"
          transparent
          opacity={0.7}
        />
      </mesh>

      {/* WAVE 2 */}
      <mesh
        ref={wave2}
        position={[3, 0, -2]}
        rotation={[
          Math.PI / 2,
          0.8,
          0,
        ]}
      >
        <torusGeometry
          args={[3, 0.015, 16, 300]}
        />

        <meshBasicMaterial
          color="#3b82f6"
          transparent
          opacity={0.5}
        />
      </mesh>

      {/* WAVE 3 */}
      <mesh
        ref={wave3}
        position={[3, 0, -2]}
        rotation={[
          Math.PI / 2,
          -0.6,
          0,
        ]}
      >
        <torusGeometry
          args={[3.7, 0.01, 16, 300]}
        />

        <meshBasicMaterial
          color="#8b5cf6"
          transparent
          opacity={0.35}
        />
      </mesh>
    </>
  );
}

/* =========================
   FLOATING LIGHTS
========================= */

function FloatingLights() {
  const light1 = useRef();
  const light2 = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    if (light1.current) {
      light1.current.position.y =
        Math.sin(t) * 0.5;
    }

    if (light2.current) {
      light2.current.position.y =
        Math.cos(t) * 0.5;
    }
  });

  return (
    <>
      <mesh
        ref={light1}
        position={[-4, 2, -2]}
      >
        <sphereGeometry
          args={[0.08, 32, 32]}
        />

        <meshBasicMaterial
          color="#38bdf8"
        />
      </mesh>

      <mesh
        ref={light2}
        position={[5, -2, -3]}
      >
        <sphereGeometry
          args={[0.1, 32, 32]}
        />

        <meshBasicMaterial
          color="#8b5cf6"
        />
      </mesh>
    </>
  );
}

/* =========================
   HERO SCENE
========================= */

const HeroScene = () => {
  return (
    <div className="absolute inset-0 -z-10">

      <Canvas
        dpr={[1, 1.5]}
        camera={{
          position: [0, 0, 8],
          fov: 45,
        }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference:
            "high-performance",
        }}
      >
        {/* LIGHTS */}
        <ambientLight intensity={1.2} />

        <pointLight
          position={[5, 5, 5]}
          intensity={2}
          color="#3b82f6"
        />

        <pointLight
          position={[-5, -3, 2]}
          intensity={2}
          color="#8b5cf6"
        />

        {/* MAIN OBJECT */}
        <EnergySphere />

        {/* DIGITAL WAVES */}
        <DigitalWaves />

        {/* FLOATING LIGHTS */}
        <FloatingLights />

        {/* PARTICLES */}
        <Sparkles
          count={180}
          scale={[15, 10, 15]}
          size={2}
          speed={0.25}
          opacity={0.7}
          color="#ffffff"
        />

        {/* FOG */}
        <fog
          attach="fog"
          args={[
            "#020617",
            8,
            20,
          ]}
        />
      </Canvas>
    </div>
  );
};

export default HeroScene;