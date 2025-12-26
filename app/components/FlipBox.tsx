"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const texts = ["UX/UI", "APP/WEB", "BRANDING"];

// 개별 3D 큐브 컴포넌트
function Cube3D({
  text,
  rotation,
  cubeSize,
}: {
  text: string;
  rotation: number;
  cubeSize: number;
}) {
  return (
    <div
      className="relative"
      style={{
        width: "fit-content",
        height: `${cubeSize}px`,
        perspective: "1000px",
      }}
    >
      <motion.div
        animate={{ rotateX: rotation }}
        transition={{
          duration: 3,
          ease: [0.25, 1, 0.25, 1],
        }}
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          transformStyle: "preserve-3d",
        }}
      >
        {/* 앞면 - 텍스트가 보이는 면 */}
        <div
          className="absolute inset-0 flex items-center justify-end lg:justify-end bg-white"
          style={{
            transform: `translateZ(${cubeSize / 2}px)`,
            backfaceVisibility: "hidden",
          }}
        >
          <span className="text-[48px] md:text-[80px] lg:text-[128px] font-semibold tracking-tight">
            {text}
          </span>
        </div>

        {/* 윗면 */}
        <div
          className="absolute inset-0 flex items-center justify-end lg:justify-end bg-gray-100"
          style={{
            transform: `rotateX(90deg) translateZ(${cubeSize / 2}px)`,
            backfaceVisibility: "hidden",
          }}
        >
          <span className="text-[48px] md:text-[80px] lg:text-[128px] font-semibold tracking-tight text-gray-300">
            {text}
          </span>
        </div>

        {/* 뒷면 */}
        <div
          className="absolute inset-0 flex items-center justify-end lg:justify-end bg-gray-200"
          style={{
            transform: `rotateX(180deg) translateZ(${cubeSize / 2}px)`,
            backfaceVisibility: "hidden",
          }}
        >
          <span className="text-[48px] md:text-[80px] lg:text-[128px] font-semibold tracking-tight">
            {text}
          </span>
        </div>

        {/* 아랫면 */}
        <div
          className="absolute inset-0 flex items-center justify-end lg:justify-end bg-gray-100"
          style={{
            transform: `rotateX(-90deg) translateZ(${cubeSize / 2}px)`,
            backfaceVisibility: "hidden",
          }}
        >
          <span className="text-[48px] md:text-[80px] lg:text-[128px] font-semibold tracking-tight text-gray-300">
            {text}
          </span>
        </div>
      </motion.div>
    </div>
  );
}

export default function FlipBox() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [rotations, setRotations] = useState([0, 0, 0]);
  const [cubeSize, setCubeSize] = useState(160);

  // 화면 크기에 따라 큐브 크기 조정
  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth < 768) {
        setCubeSize(60); // 모바일
      } else if (window.innerWidth < 1024) {
        setCubeSize(100); // 태블릿
      } else {
        setCubeSize(160); // 데스크탑
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        const current = prev;
        // 현재 텍스트를 90도 회전 (박스가 앞으로 굴러감)
        setRotations((prevRotations) => {
          const newRotations = [...prevRotations];
          newRotations[current] -= 90; // 앞으로 굴러가기
          return newRotations;
        });
        return (prev + 1) % texts.length;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-end lg:items-end gap-2 md:gap-4 lg:gap-[20px]">
      {texts.map((text, index) => (
        <Cube3D
          key={index}
          text={text}
          rotation={rotations[index]}
          cubeSize={cubeSize}
        />
      ))}
    </div>
  );
}
