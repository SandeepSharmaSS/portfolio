"use client";

import { Canvas } from "@react-three/fiber";

import {
  Float,
  Points,
  PointMaterial,
  Line,
} from "@react-three/drei";

const particlePositions =
  new Float32Array([
    -4, 2, 0,
    -3, 1, 0,
    -2, -1, 0,
    1, 2, 0,
    2, -2, 0,
    4, 1, 0,
    3, -1, 0,
    0, 0, 0,
  ]);

const HeroScene = () => {
  return (
    <Canvas
      dpr={[1, 1.5]}
      gl={{
        antialias: false,
        powerPreference:
          "high-performance",
        alpha: true,
      }}
      camera={{
        position: [0, 0, 8],
        fov: 45,
      }}
    >

      {/* LIGHTS */}
      <ambientLight intensity={0.6} />

      <pointLight
        position={[2, 3, 4]}
        intensity={2}
        color="#38BDF8"
      />

      {/* FLOATING TECH OBJECT */}
      <Float
        speed={1.5}
        rotationIntensity={0.7}
        floatIntensity={1}
      >

        <mesh position={[2.6, 0.4, 0]}>

          <icosahedronGeometry
            args={[1, 1]}
          />

          <meshStandardMaterial
            color="#38BDF8"
            wireframe
            emissive="#38BDF8"
            emissiveIntensity={1.5}
          />

        </mesh>

      </Float>

      {/* GLOW SPHERE */}
      <mesh position={[-2.2, -1.3, -1]}>

        <sphereGeometry
          args={[0.22, 16, 16]}
        />

        <meshStandardMaterial
          color="#7DD3FC"
          emissive="#38BDF8"
          emissiveIntensity={3}
        />

      </mesh>

      {/* TECH LINES */}
      <Line
        points={[
          [-4, 2, 0],
          [-2, 1, 0],
          [0, 2, 0],
          [2, 1, 0],
          [4, 2, 0],
        ]}
        color="#38BDF8"
        lineWidth={1}
      />

      <Line
        points={[
          [-4, -2, 0],
          [-2, -1, 0],
          [0, -2, 0],
          [2, -1, 0],
          [4, -2, 0],
        ]}
        color="#0EA5E9"
        lineWidth={1}
      />

      {/* LIGHT RING */}
      <mesh
        rotation={[
          Math.PI / 2,
          0,
          0,
        ]}
      >

        <torusGeometry
          args={[2.5, 0.015, 12, 60]}
        />

        <meshStandardMaterial
          color="#38BDF8"
          emissive="#38BDF8"
          emissiveIntensity={1}
        />

      </mesh>

      {/* PARTICLES */}
      <Points
        positions={particlePositions}
        stride={3}
      >

        <PointMaterial
          transparent
          color="#E0F2FE"
          size={0.06}
          sizeAttenuation
          depthWrite={false}
        />

      </Points>

    </Canvas>
  );
};

export default HeroScene;