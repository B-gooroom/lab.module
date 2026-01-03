"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

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
          <span className="text-[40px] md:text-[80px] lg:text-[128px] font-semibold tracking-tight">
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
          <span className="text-[40px] md:text-[80px] lg:text-[128px] font-semibold tracking-tight text-gray-300">
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
          <span className="text-[40px] md:text-[80px] lg:text-[128px] font-semibold tracking-tight">
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
          <span className="text-[40px] md:text-[80px] lg:text-[128px] font-semibold tracking-tight text-gray-300">
            {text}
          </span>
        </div>
      </motion.div>
    </div>
  );
}

export default function FlipBox() {
  const [rotations, setRotations] = useState([0, 0, 0]);
  const [cubeSize, setCubeSize] = useState(160);
  const [isMounted, setIsMounted] = useState(false);

  // Strict Mode 중복 실행 방지용 ref
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const activeIndexRef = useRef(0);

  // 클라이언트 마운트 확인 (SSR hydration 문제 해결)
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // 화면 크기에 따라 큐브 크기 조정
  useEffect(() => {
    if (!isMounted) return;

    const updateSize = () => {
      if (window.innerWidth < 768) {
        setCubeSize(64); // 모바일 (375px 기준)
      } else if (window.innerWidth < 1024) {
        setCubeSize(100); // 태블릿
      } else {
        setCubeSize(160); // 데스크탑
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, [isMounted]);

  // 롤링 애니메이션 - useRef로 Strict Mode 중복 실행 방지
  useEffect(() => {
    if (!isMounted) return;

    // 이미 interval이 있으면 중복 생성 방지
    if (intervalRef.current) return;

    intervalRef.current = setInterval(() => {
      const current = activeIndexRef.current;

      // 현재 텍스트를 90도 회전 (박스가 앞으로 굴러감)
      setRotations((prevRotations) => {
        const newRotations = [...prevRotations];
        newRotations[current] -= 180;
        return newRotations;
      });

      // 다음 인덱스로
      activeIndexRef.current = (current + 1) % texts.length;
    }, 3000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isMounted]);

  // 마운트 전에는 렌더링하지 않음 (hydration 불일치 방지)
  if (!isMounted) {
    return (
      <div className="flex flex-col items-end lg:items-end gap-1 md:gap-4 lg:gap-[20px]">
        {texts.map((text, index) => (
          <div key={index} className="h-[32px] md:h-[100px] lg:h-[160px]">
            <span className="text-[40px] md:text-[80px] lg:text-[128px] font-semibold tracking-tight">
              {text}
            </span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-end lg:items-end gap-1 md:gap-4 lg:gap-[20px]">
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
