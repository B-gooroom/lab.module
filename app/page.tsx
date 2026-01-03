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
      <section className="flex flex-col md:flex-row items-start justify-between mx-[20px] md:mx-10 lg:mx-[80px] flex-shrink-0 pt-[40px] md:pt-[150px] pb-[80px] md:pb-[150px] gap-8 md:gap-0">
        {/* 왼쪽: 타이틀 + 설명 */}
        <div className="flex flex-col gap-3 md:gap-[20px] w-full md:max-w-[50%]">
          <h2 className="text-[40px] md:text-[80px] lg:text-[128px] font-semibold tracking-tight leading-none">
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
        <div className="self-end md:self-start">
          <FlipBox />
        </div>
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
          className="relative z-10 flex flex-col md:flex-row items-start justify-between px-4 md:px-10 lg:px-[40px] flex-shrink-0 pt-[80px] md:pt-[150px] pb-[80px] md:pb-[150px] bg-[#111111] gap-6 md:gap-0"
          style={{
            marginLeft: "calc(-50vw + 50%)",
            marginRight: "calc(-50vw + 50%)",
            paddingLeft: "calc(50vw - 50% + 1rem)",
            paddingRight: "calc(50vw - 50% + 1rem)",
          }}
        >
          <div className="work-left flex flex-col gap-[12px] md:gap-[20px] px-0 md:px-[80px]">
            <span className="text-[14px] md:text-[16px] text-white/70">
              WORK
            </span>
            <Image
              src="/LOGO.png"
              alt="lab.MODULE"
              width={221}
              height={43}
              className="invert w-[140px] md:w-[221px] h-auto"
            />
          </div>

          {/* 오른쪽: 프로젝트 카드 */}
          <div
            className="work-right flex flex-col gap-3 md:gap-4 w-full md:w-auto"
            style={{ perspective: "1000px" }}
          >
            {/* 이미지 플레이스홀더 */}
            <div className="w-full md:w-[750px] aspect-[16/10] md:h-[450px] bg-white/10 flex items-center justify-center overflow-hidden rounded-lg md:mr-[80px]">
              <Image
                src="/work_1.jpg"
                alt="Whew APP UI/UX DESIGN"
                width={500}
                height={300}
                className="w-full h-full object-cover"
                unoptimized
              />
            </div>
            {/* 프로젝트 제목 */}
            <p className="text-base md:text-lg font-medium text-white">
              whew APP UI/UX DESIGN
            </p>
          </div>
        </section>

        {/* WORK 섹션 2 */}
        <section
          ref={section2Ref}
          className="relative z-20 flex flex-col md:flex-row items-start justify-between px-4 md:px-10 lg:px-20 flex-shrink-0 pt-[80px] md:pt-[150px] pb-[80px] md:pb-[150px] bg-[#5A5B5F] gap-6 md:gap-0"
          style={{
            marginLeft: "calc(-50vw + 50%)",
            marginRight: "calc(-50vw + 50%)",
            paddingLeft: "calc(50vw - 50% + 1rem)",
            paddingRight: "calc(50vw - 50% + 1rem)",
          }}
        >
          <div className="work-left flex flex-col gap-[12px] md:gap-[20px] px-0 md:px-[80px]">
            <span className="text-[14px] md:text-[16px] text-white/70">
              WORK
            </span>
            <Image
              src="/LOGO.png"
              alt="lab.MODULE"
              width={221}
              height={43}
              className="invert w-[140px] md:w-[221px] h-auto"
            />
          </div>

          {/* 오른쪽: 프로젝트 카드 */}
          <div
            className="work-right flex flex-col gap-3 md:gap-4 w-full md:w-auto"
            style={{ perspective: "1000px" }}
          >
            {/* 이미지 플레이스홀더 */}
            <div className="w-full md:w-[750px] aspect-[16/10] md:h-[450px] bg-white/10 flex items-center justify-center overflow-hidden rounded-lg md:mr-[80px]">
              <Image
                src="/work_2.jpg"
                alt="아몬드 APP/WEB UI/UX DESIGN"
                width={500}
                height={300}
                className="w-full h-full object-cover"
                unoptimized
              />
            </div>
            {/* 프로젝트 제목 */}
            <p className="text-base md:text-lg font-medium text-white">
              아몬드 APP/WEB UI/UX DESIGN
            </p>
          </div>
        </section>
        {/* WORK 섹션 3 */}
        <section
          ref={section3Ref}
          className="relative z-30 flex flex-col md:flex-row items-start justify-between px-4 md:px-10 lg:px-20 flex-shrink-0 pt-[80px] md:pt-[150px] pb-[60px] md:pb-[100px] bg-[#D9DADF] gap-6 md:gap-0"
          style={{
            marginLeft: "calc(-50vw + 50%)",
            marginRight: "calc(-50vw + 50%)",
            paddingLeft: "calc(50vw - 50% + 1rem)",
            paddingRight: "calc(50vw - 50% + 1rem)",
          }}
        >
          <div className="work-left flex flex-col gap-[12px] md:gap-[20px] px-0 md:px-[80px]">
            <span className="text-[14px] md:text-[16px] text-black/70">
              WORK
            </span>
            <Image
              src="/LOGO.png"
              alt="lab.MODULE"
              width={221}
              height={43}
              className="w-[140px] md:w-[221px] h-auto"
            />
          </div>
          {/* 오른쪽: 프로젝트 카드 */}
          <div
            className="work-right flex flex-col gap-3 md:gap-4 w-full md:w-auto"
            style={{ perspective: "1000px" }}
          >
            {/* 이미지 플레이스홀더 */}
            <div className="w-full md:w-[750px] aspect-[16/10] md:h-[450px] bg-white/10 flex items-center justify-center overflow-hidden rounded-lg md:mr-[80px]">
              <Image
                src="/work_4.jpg"
                alt="HoHoDang Content DESIGN"
                width={500}
                height={300}
                className="w-full h-full object-cover"
                unoptimized
              />
            </div>
            {/* 프로젝트 제목 */}
            <p className="text-base md:text-lg font-medium text-black/70">
              HoHoDang Content DESIGN
            </p>
          </div>
        </section>
      </div>

      {/* 작업 리스트 섹션 */}
      <section className="px-4 md:px-10 lg:px-20 pt-[80px] md:pt-[150px] pb-[60px] md:pb-[150px] flex-shrink-0">
        {/* 항목 1 */}
        <div className="flex md:flex-row md:items-center justify-between py-4 md:py-8 border-y border-[#111111] gap-2 md:gap-0">
          <div className="flex items-center gap-4 md:gap-16 lg:gap-32">
            <span className="text-[14px] md:text-[24px] lg:text-[36px] font-semibold w-6 md:w-8">
              1
            </span>
            <span className="text-[14px] md:text-[32px] lg:text-[48px] lg:font-semibold">
              BUNKERSHOT PARTNERS
            </span>
          </div>
          <div className="text-left md:text-right text-[10px] md:text-[16px] font-light text-gray-600 leading-relaxed min-w-[84px]">
            <p>STAR-UP APP</p>
            <p>UX/UI DESIGN</p>
            <p>MVP PROTOTYPE</p>
          </div>
        </div>

        {/* 항목 2 */}
        <div className="flex md:flex-row md:items-center justify-between py-4 md:py-8 border-b border-[#111111] gap-2 md:gap-0">
          <div className="flex items-center gap-4 md:gap-16 lg:gap-32">
            <span className="text-[14px] md:text-[24px] lg:text-[36px] font-semibold w-6 md:w-8">
              2
            </span>
            <span className="text-[14px] md:text-[32px] lg:text-[48px] lg:font-semibold">
              UX/UI DESIGN
            </span>
          </div>
          <div className="text-left md:text-right text-[10px] md:text-[16px] font-light text-gray-600 leading-relaxed min-w-[84px]">
            <p>아몬드</p>
            <p>Buyaladin</p>
            <p>Real Research</p>
          </div>
        </div>

        {/* 항목 3 */}
        <div className="flex md:flex-row md:items-center justify-between py-4 md:py-8 border-b border-[#111111] gap-2 md:gap-0">
          <div className="flex items-center gap-4 md:gap-16 lg:gap-32">
            <span className="text-[14px] md:text-[24px] lg:text-[36px] font-semibold w-6 md:w-8">
              3
            </span>
            <span className="text-[14px] md:text-[32px] lg:text-[48px] lg:font-semibold">
              BRANDING DESIGN
            </span>
          </div>
          <div className="text-left md:text-right text-[10px] md:text-[16px] font-light text-gray-600 leading-relaxed min-w-[84px]">
            <p>whew</p>
            <p>Amond</p>
            <p>MeiTalk</p>
          </div>
        </div>

        {/* 항목 4 */}
        <div className="flex md:flex-row md:items-center justify-between py-4 md:py-8 border-b border-[#111111] gap-2 md:gap-0">
          <div className="flex items-center gap-4 md:gap-16 lg:gap-32">
            <span className="text-[14px] md:text-[24px] lg:text-[36px] font-semibold w-6 md:w-8">
              4
            </span>
            <span className="text-[14px] md:text-[32px] lg:text-[48px] lg:font-semibold">
              ART WORK
            </span>
          </div>
          <div className="text-left md:text-right text-[10px] md:text-[16px] font-light text-gray-600 leading-relaxed min-w-[84px]">
            <p>Hahadang</p>
            <p>KISO</p>
            <p>ma.me</p>
          </div>
        </div>
      </section>
    </main>
  );
}
