"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import { BBH_Bartle } from "next/font/google";

const bbhBartle = BBH_Bartle({
  weight: "400",
});

// 크롬 토러스 낫 (꼬인 토러스) - 이미지와 비슷한 형태
function ChromeTorusKnot() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.003;
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.3}>
      <mesh ref={meshRef} scale={1.2}>
        {/* TorusKnot: 꼬인 토러스 형태 (이미지와 비슷) */}
        {/* <torusKnotGeometry args={[1, 0.6, 256, 64, 2, 3]} /> */}
        <torusKnotGeometry args={[1, 0.5, 256, 64, 3, 4]} />
        <meshStandardMaterial
          color="#c0c0c0"
          metalness={1}
          roughness={0.03}
          envMapIntensity={2.5}
        />
      </mesh>
    </Float>
  );
}

export default function Scene3D() {
  return (
    <div className="relative w-full h-full bg-black overflow-hidden">
      {/* 3D Canvas */}
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        style={{ width: "100%", height: "100%" }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-5, -5, 5]} intensity={0.5} />

        <ChromeTorusKnot />

        {/* 환경맵 - 크롬 반사 효과 (배경 숨김) */}
        <Environment
          files="/qwantani_night_puresky_4k.exr"
          background={false}
        />
      </Canvas>

      {/* 텍스트 오버레이 - 왼쪽 상단 */}
      <div className="absolute top-8 left-8 text-white font-bold text-[20px] md:text-[62px] lg:text-[80px] leading-tight lg:ml-20">
        <p className={bbhBartle.className}>DEVELOPMENT</p>
        <p className={bbhBartle.className}>DESIGN</p>
        <p className={bbhBartle.className}>WEB</p>
        <p className={bbhBartle.className}>APP</p>
      </div>

      {/* 텍스트 오버레이 - 오른쪽 중앙 */}
      <div className="absolute top-1/2 right-8 -translate-y-1/2 text-white font-bold text-[24px] md:text-[62px] lg:text-[100px] text-right leading-tight lg:mx-22">
        <p className={bbhBartle.className}>BRANDING</p>
        <p className={bbhBartle.className}>UX/UI</p>
      </div>

      {/* 텍스트 오버레이 - 하단 */}
      <div className="absolute bottom-1/5 left-8 text-white font-bold text-[26px] md:text-[80px] lg:text-[120px] leading-tight lg:ml-6">
        <p className={bbhBartle.className}>ART</p>
        <p className={bbhBartle.className}>MOTION</p>
      </div>

      <div className="absolute bottom-8 right-8 text-white font-bold text-[20px] md:text-[80px] lg:text-[112px] text-right leading-tight lg:mx-12">
        <p className={bbhBartle.className}>GRAPHIC</p>
      </div>
    </div>
  );
}
