"use client";
import dynamic from "next/dynamic";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

const Canvas = dynamic(
  () => import("@react-three/fiber").then((m) => m.Canvas),
  { ssr: false }
);

// ---- Snow Particles Effect -----------------------------------------
function SnowParticles({ count = 700 }: { count?: number }) {
  const positions = useMemo(() => {
    const a = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      a[i * 3 + 0] = THREE.MathUtils.randFloatSpread(10);
      a[i * 3 + 1] = THREE.MathUtils.randFloat(0, 8);
      a[i * 3 + 2] = THREE.MathUtils.randFloatSpread(10);
    }
    return a;
  }, [count]);

  const speeds = useMemo(
    () =>
      Float32Array.from({ length: count }, () =>
        THREE.MathUtils.randFloat(0.002, 0.01)
      ),
    [count]
  );
  const ref = useRef<THREE.Points>(null);

  useFrame((_, delta) => {
    const geom = ref.current?.geometry as THREE.BufferGeometry;
    const pos = geom?.getAttribute("position") as THREE.BufferAttribute;
    if (!pos) return;
    for (let i = 0; i < count; i++) {
      let y = pos.getY(i) + speeds[i] * (delta * 60);
      if (y > 2) y = -2;
      pos.setY(i, y);
    }
    pos.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#e5e7eb"
        transparent
        opacity={0.9}
        depthWrite={false}
      />
    </points>
  );
}

function RainParticles({ count = 1000 }: { count?: number }) {
  const positions = useMemo(() => {
    const a = new Float32Array(count * 3); // Store positions (X, Y, Z)
    for (let i = 0; i < count; i++) {
      a[i * 3 + 0] = THREE.MathUtils.randFloatSpread(10); // Random X position
      a[i * 3 + 1] = Math.random() * 10; // Random Y position (falling down)
      a[i * 3 + 2] = THREE.MathUtils.randFloatSpread(10); // Random Z position
    }
    return a;
  }, [count]);

  const speeds = useMemo(
    () =>
      Float32Array.from({ length: count }, () =>
        THREE.MathUtils.randFloat(0.05, 0.1)
      ), // Falling speed
    [count]
  );

  const ref = useRef<THREE.Points>(null);

  // Continuous rain particle movement (falling down)
  useFrame(() => {
    const geom = ref.current?.geometry as THREE.BufferGeometry;
    const pos = geom?.getAttribute("position") as THREE.BufferAttribute;
    if (!pos) return;
    for (let i = 0; i < count; i++) {
      let y = pos.getY(i) - speeds[i]; // Decrease the Y value to make the raindrops fall
      if (y < -10) {
        y = 10; // Reset the raindrop to the top once it goes out of view
      }
      pos.setY(i, y);
    }
    pos.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        color="#22c55e"
        transparent
        opacity={0.7}
        depthWrite={false}
      />
    </points>
  );
}

// ---- Background Orchestrator --------------------------------
export default function BgAnimation({ mode = "snow" as "snow" | "rain" }) {
  return (
    <div className="absolute inset-0 -z-10">
      <Suspense fallback={null}>
        <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
          {/* <color attach="background" args={[0.039215686, 0.039215686, 0.039215686]} /> */}
          <ambientLight intensity={0} />
          <directionalLight position={[3, 5, 2]} intensity={1} />
          {mode === "snow" && <SnowParticles />}
          {mode === "rain" && <RainParticles />}
        </Canvas>
      </Suspense>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-500/10 via-transparent to-transparent" />
    </div>
  );
}
