"use client";

import FlipBox from "./components/FlipBox";
import Image from "next/image";
import Scene3D from "./components/Scene3D";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const section1Ref = useRef<HTMLElement>(null);
  const section2Ref = useRef<HTMLElement>(null);
  const section3Ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const section1 = section1Ref.current;
    const section2 = section2Ref.current;
    const section3 = section3Ref.current;

    if (!container || !section1 || !section2 || !section3) return;

    // 컨텍스트 생성 (클린업을 위해)
    const ctx = gsap.context(() => {
      // 섹션 1의 내부 요소들 애니메이션
      const section1Left = section1.querySelector(".work-left");
      const section1Right = section1.querySelector(".work-right");

      // 섹션 2의 내부 요소들 애니메이션
      const section2Left = section2.querySelector(".work-left");
      const section2Right = section2.querySelector(".work-right");

      // 섹션 3의 내부 요소들 애니메이션
      const section3Left = section3.querySelector(".work-left");
      const section3Right = section3.querySelector(".work-right");

      // 섹션 1: 왼쪽에서 슬라이드 + 페이드
      gsap.fromTo(
        section1Left,
        { x: -200, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section1,
            start: "top 80%",
            end: "top 30%",
            scrub: 1,
          },
        }
      );

      // 섹션 1: 오른쪽에서 슬라이드 + 페이드
      gsap.fromTo(
        section1Right,
        { x: 100, opacity: 0, scale: 0.9 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section1,
            start: "top 80%",
            end: "top 30%",
            scrub: 1,
          },
        }
      );

      // 섹션 2: 아래에서 슬라이드 + 페이드
      gsap.fromTo(
        section2Left,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section2,
            start: "top 80%",
            end: "top 30%",
            scrub: 1,
          },
        }
      );

      // 섹션 2: 회전 + 스케일 + 페이드
      gsap.fromTo(
        section2Right,
        { y: 100, opacity: 0, rotateY: 15, scale: 0.85 },
        {
          y: 0,
          opacity: 1,
          rotateY: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section2,
            start: "top 80%",
            end: "top 30%",
            scrub: 1,
          },
        }
      );

      // 섹션 2: 아래에서 슬라이드 + 페이드
      gsap.fromTo(
        section3Left,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section3,
            start: "top 80%",
            end: "top 30%",
            scrub: 1,
          },
        }
      );

      gsap.fromTo(
        section3Right,
        { y: 100, opacity: 0, rotateY: 15, scale: 0.85 },
        {
          y: 0,
          opacity: 1,
          rotateY: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section3,
            start: "top 80%",
            end: "top 30%",
            scrub: 1,
          },
        }
      );

      // 핀 효과: 섹션 1이 고정되면서 섹션 2가 위로 올라옴
      ScrollTrigger.create({
        trigger: section1,
        start: "top top",
        end: "bottom top",
        pin: true,
        pinSpacing: false,
      });

      ScrollTrigger.create({
        trigger: section2,
        start: "top top",
        end: "bottom top",
        pin: true,
        pinSpacing: false,
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <main className="">
      {/* DESIGN 섹션 */}
      <section className="flex flex-row items-start justify-between mx-4 md:mx-10 lg:mx-20 flex-shrink-0 pt-[150px] pb-[150px]">
        {/* 왼쪽: 타이틀 + 설명 */}
        <div className="flex flex-col gap-3 md:gap-[20px] max-w-[50%]">
          <h2 className="text-[48px] md:text-[80px] lg:text-[128px] font-semibold tracking-tight leading-none">
            DESIGN
          </h2>
          <p className="text-[14px] md:text-[16px] leading-relaxed text-gray-700">
            브랜드의 가치를 깊이 이해하고 시각적으로 표현하며,
            <br />
            UX/UI 전반의 디자인과 디지털 콘텐츠를 운영하는
            <br />
            디자인 전문 에이전시 랩 모듈입니다.
          </p>
        </div>
        {/* 오른쪽: 3D 플립 박스 텍스트 */}
        <FlipBox />
      </section>

      <section
        className=" w-screen relative left-1/2 -translate-x-1/2 overflow-hidden flex-shrink-0 flex items-center justify-center"
        style={{ aspectRatio: "1 / 1" }}
      >
        <Scene3D />
      </section>

      {/* WORK 섹션 컨테이너 */}
      <div ref={containerRef} className="relative overflow-hidden ">
        {/* WORK 섹션 1 */}
        <section
          ref={section1Ref}
          className="relative z-10 flex items-start justify-between px-4 md:px-10 lg:px-[40px] flex-shrink-0 pt-[150px] pb-[150px] bg-[#111111]"
          style={{
            marginLeft: "calc(-50vw + 50%)",
            marginRight: "calc(-50vw + 50%)",
            paddingLeft: "calc(50vw - 50% + 1rem)",
            paddingRight: "calc(50vw - 50% + 1rem)",
          }}
        >
          <div className="work-left flex flex-col gap-[20px] px-[80px]">
            <span className="text-[16px] text-white/70">WORK</span>
            <Image
              src="/LOGO.png"
              alt="lab.MODULE"
              width={221}
              height={43}
              className="invert"
            />
          </div>

          {/* 오른쪽: 프로젝트 카드 */}
          <div
            className="work-right flex flex-col gap-4"
            style={{ perspective: "1000px" }}
          >
            {/* 이미지 플레이스홀더 */}
            <div className="w-[500px] h-[300px] bg-white/10 flex items-center justify-center overflow-hidden rounded-lg mr-[80px]">
              <span className="text-white/40">이미지</span>
            </div>
            {/* 프로젝트 제목 */}
            <p className="text-lg font-medium text-white">
              Whew APP UI/UX DESIGN
            </p>
          </div>
        </section>

        {/* WORK 섹션 2 */}
        <section
          ref={section2Ref}
          className="relative z-20 flex items-start justify-between px-4 md:px-10 lg:px-20 flex-shrink-0 pt-[150px] pb-[150px] bg-[#5A5B5F]"
          style={{
            marginLeft: "calc(-50vw + 50%)",
            marginRight: "calc(-50vw + 50%)",
            paddingLeft: "calc(50vw - 50% + 1rem)",
            paddingRight: "calc(50vw - 50% + 1rem)",
            // boxShadow: "0 -30px 80px rgba(0,0,0,0.6)",
          }}
        >
          <div className="work-left flex flex-col gap-[20px] px-[80px]">
            <span className="text-[16px] text-white/70 ">WORK</span>
            <Image
              src="/LOGO.png"
              alt="lab.MODULE"
              width={221}
              height={43}
              className="invert"
            />
          </div>

          {/* 오른쪽: 프로젝트 카드 */}
          <div
            className="work-right flex flex-col gap-4"
            style={{ perspective: "1000px" }}
          >
            {/* 이미지 플레이스홀더 */}
            <div className="w-[500px] h-[300px] bg-white/10 flex items-center justify-center overflow-hidden rounded-lg mr-[80px]">
              <span className="text-white/40">이미지</span>
            </div>
            {/* 프로젝트 제목 */}
            <p className="text-lg font-medium text-white">
              Whew APP UI/UX DESIGN
            </p>
          </div>
        </section>
        {/* WORK 섹션 3 */}
        <section
          ref={section3Ref}
          className="relative z-30 flex items-start justify-between px-4 md:px-10 lg:px-20 flex-shrink-0 pt-[150px] pb-[150px] bg-[#D9DADF]"
          style={{
            marginLeft: "calc(-50vw + 50%)",
            marginRight: "calc(-50vw + 50%)",
            paddingLeft: "calc(50vw - 50% + 1rem)",
            paddingRight: "calc(50vw - 50% + 1rem)",
          }}
        >
          <div className="work-left flex flex-col gap-[20px] px-[80px]">
            <span className="text-[16px] text-black/70">WORK</span>
            <Image
              src="/LOGO.png"
              alt="lab.MODULE"
              width={221}
              height={43}
              // className="invert"
            />
          </div>
          {/* 오른쪽: 프로젝트 카드 */}
          <div
            className="work-right flex flex-col gap-4"
            style={{ perspective: "1000px" }}
          >
            {/* 이미지 플레이스홀더 */}
            <div className="w-[500px] h-[300px] bg-white/10 flex items-center justify-center overflow-hidden rounded-lg mr-[80px]">
              <span className="text-white/40">이미지</span>
            </div>
            {/* 프로젝트 제목 */}
            <p className="text-lg font-medium text-black/70">
              Whew APP UI/UX DESIGN
            </p>
          </div>
        </section>
      </div>

      {/* 작업 리스트 섹션 */}
      <section className="px-4 md:px-10 lg:px-20 pt-[150px] pb-[150px] flex-shrink-0">
        {/* 항목 1 */}
        <div className="flex items-center justify-between py-8 border-y border-[#111111]">
          <div className="flex items-center gap-8 md:gap-16 lg:gap-32">
            <span className="text-[18px] md:text-[24px] lg:text-[36px] font-semibold w-8">
              1
            </span>
            <span className="text-[24px] md:text-[32px] lg:text-[48px] font-semibold">
              BUNKERSHOT PARTNERS
            </span>
          </div>
          <div className="text-right text-sm text-gray-600 leading-relaxed">
            <p>STAR-UP APP</p>
            <p>UX/UI DESIGN</p>
            <p>MVP PROTOTYPE</p>
          </div>
        </div>

        {/* 항목 2 */}
        <div className="flex items-center justify-between py-8 border-b border-[#111111]">
          <div className="flex items-center gap-8 md:gap-16 lg:gap-32">
            <span className="text-[18px] md:text-[24px] lg:text-[36px] font-semibold w-8">
              2
            </span>
            <span className="text-[24px] md:text-[32px] lg:text-[48px] font-semibold">
              UX/UI DESIGN
            </span>
          </div>
          <div className="text-right text-sm text-gray-600 leading-relaxed">
            <p>Amond</p>
            <p>Buyaladin</p>
            <p>Real Research</p>
          </div>
        </div>

        {/* 항목 3 */}
        <div className="flex items-center justify-between py-8 border-b border-[#111111]">
          <div className="flex items-center gap-8 md:gap-16 lg:gap-32">
            <span className="text-[18px] md:text-[24px] lg:text-[36px] font-semibold w-8">
              3
            </span>
            <span className="text-[24px] md:text-[32px] lg:text-[48px] font-semibold">
              BRANDING DESIGN
            </span>
          </div>
          <div className="text-right text-sm text-gray-600 leading-relaxed">
            <p>Whew</p>
            <p>Amond</p>
            <p>MeiTalk</p>
          </div>
        </div>

        {/* 항목 4 */}
        <div className="flex items-center justify-between py-8 border-b border-[#111111]">
          <div className="flex items-center gap-8 md:gap-16 lg:gap-32">
            <span className="text-[18px] md:text-[24px] lg:text-[36px] font-semibold w-8">
              4
            </span>
            <span className="text-[24px] md:text-[32px] lg:text-[48px] font-semibold">
              ART WORK
            </span>
          </div>
          <div className="text-right text-sm text-gray-600 leading-relaxed">
            <p>Hahadang</p>
            <p>KISO</p>
            <p>ma.me</p>
          </div>
        </div>
      </section>
    </main>
  );
}
