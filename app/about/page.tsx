"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen bg-white text-[#171717]">
      {/* 상단 섹션 */}
      <div className="mb-12 md:mb-16 lg:mb-20 px-[80px] md:px-8 lg:px-20 xl:px-[80px] pt-12 md:pt-16 lg:pt-20 xl:pt-[80px]">
        <h1 className="text-[48px] md:text-[64px] lg:text-[80px] xl:text-[128px] font-bold">
          ABOUT_
        </h1>
        <p className="h-8 md:h-12 lg:h-16 xl:h-20"></p>
        {/* 3개 컬럼 */}
        <div className="flex md:gap-[80px] lg:gap-[120px]">
          {/* BASIC */}
          <div>
            <div className="relative w-full lg:w-[216px] mb-[20px]">
              <span className="text-[12px] lg:text-[16px] absolute top-0 right-0">
                분석
              </span>
              <h2 className="text-[24px] md:text-[48px] lg:text-[64px] font-bold">
                BASIC
              </h2>
            </div>
            <p className="text-[12px] lg:text-[16px]">
              시장 트렌드와 소비자 행동을 분석해,{" "}
              <br className="hidden md:block" />
              고객이 무엇을 원하는지 니즈를 파악하며
              <br className="hidden md:block" />
              타겟의 UX를 분석하는 것에서 시작합니다.
            </p>
          </div>

          {/* STRATEGY */}
          <div>
            <div className="relative w-full lg:w-[360px] mb-[20px]">
              <span className="text-[12px] lg:text-[16px] absolute top-0 right-0">
                전략
              </span>
              <h2 className="text-[24px] md:text-[48px] lg:text-[64px] font-bold">
                STRATEGY
              </h2>
            </div>
            <p className="text-[12px] lg:text-[16px]">
              시장 트렌드와 소비자 행동을 통해 비즈니스의{" "}
              <br className="hidden md:block" />
              성장 기회를 발굴하며 정체성과 목표를 구체화하여
              <br className="hidden md:block" />
              지속 가능한 성장 전략을 설계합니다.
            </p>
          </div>

          {/* EXTEND */}
          <div>
            <div className="relative w-full lg:w-[280px] mb-[20px]">
              <span className="text-[12px] lg:text-[16px] absolute top-0 right-0">
                확장
              </span>
              <h2 className="text-[24px] md:text-[48px] lg:text-[64px] font-bold">
                EXTEND
              </h2>
            </div>
            <p className="text-[12px] lg:text-[16px]">
              클라이언트와 긴밀히 소통하여 이후의 스텝에서
              <br className="hidden md:block" />
              장에 한 단계 더 도약하는 전환점 되도록 돕고
              <br className="hidden md:block" />
              전략과 확장이 만나는 지점에서, 미래를 함께합니다.
            </p>
          </div>
        </div>
      </div>

      {/* 구분선 */}
      <hr className="border-t border-[#171717] mb-12 md:mb-16 lg:mb-20 mx-4 md:mx-8 lg:mx-20 xl:mx-[80px]" />

      {/* 하단 섹션 */}
      <div className="flex flex-col gap-6 md:gap-8 lg:gap-10 px-4 md:px-8 lg:px-20 xl:px-[80px]">
        <div className="w-full max-w-[349px]">
          <Image
            src="/LOGO.png"
            alt="lab.MODULE"
            width={349}
            height={52}
            className="w-full h-auto"
          />
        </div>

        {/* 상세 설명 */}
        <div className="text-base font-normal leading-relaxed">
          <div className="text-[12px] lg:text-[16px]">
            랩 모듈은 비지니스의 가치를 깊이 이해하고 시각적으로 표현하며
            <br /> UX/UI 전반의 디자인과 디지털 콘텐츠를 운영하는 디자인 전문
            에이전시입니다.
          </div>
          <p className="h-[20px]"></p>
          <div className="text-[12px] lg:text-[16px]">
            시장 트렌드와 소비자 행동을 분석해, 비즈니스의 정체성과 목표를
            구체화하여 지속 가능한 성장 전략을 설계합니다.
            <br />
            사용자 중심의 직관적이고 감각적인 경험을 제공하는 UX/UI를
            디자인하며, 최적의 인터랙션과 서비스 개선 방향을 도출합니다.
            <br />
            기획부터 디자인, 개발까지 하나의 흐름으로 이어지는 맞춤형
            애플리케이션을 개발하여 프로세스 맵을 그립니다.
          </div>
          <p className="h-[20px]"></p>
          <div className="text-[12px] lg:text-[16px]">
            랩 모듈은 클라이언트와 긴밀히 소통하여 이후의 스텝에서 비지니스가
            시장에 한 단계 더 도약하는 전환점 되도록 돕겠습니다.
            <br />
            전략과 확장이 만나는 지점에서, 고객님의 비지니스 미래를 랩 모듈이
            함께합니다.
          </div>

          <p className="h-[80px]"></p>

          <div className="flex flex-col gap-2 grid grid-cols-3 w-[70%]">
            <div>
              <h3 className="text-[12px] lg:text-[16px] font-bold mb-[10px]">
                PRODUCT
              </h3>
              <ul className="space-y-2 text-base font-normal">
                <li>• analysis</li>
                <li>• wireframe</li>
                <li>• prototype</li>
              </ul>
            </div>

            <div>
              <h3 className="text-[12px] lg:text-[16px] font-bold mb-[10px]">
                DESIGN
              </h3>
              <ul className="space-y-2 text-base font-normal">
                <li>• UX/UI</li>
                <li>• BX/BI</li>
                <li>• web/app</li>
              </ul>
            </div>

            <div>
              <h3 className="text-[12px] lg:text-[16px] font-bold mb-[10px]">
                DEVELOPMENT
              </h3>
              <ul className="space-y-2 text-base font-normal">
                <li>• html/css</li>
                <li>• react.js</li>
                <li>• vue.js</li>
                <li>• android/iOS</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <p className="h-24 md:h-32 lg:h-40 xl:h-[180px]" />
      {/* 흐르는 로고 효과 - framer-motion */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex"
          animate={{
            x: [0, -1588], // 한 세트 전체 너비: (349px * 4) + (64px * 3) = 1588px
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {/* 첫 번째 세트 */}
          <div className="flex flex-shrink-0">
            <div className="flex-shrink-0 mr-8 md:mr-12 lg:mr-16">
              <Image
                src="/LOGO.png"
                alt="lab.MODULE"
                width={349}
                height={52}
                className="w-auto h-8 md:h-10 lg:h-[52px]"
              />
            </div>
            <div className="flex-shrink-0 mr-8 md:mr-12 lg:mr-16">
              <Image
                src="/LOGO.png"
                alt="lab.MODULE"
                width={349}
                height={52}
                className="w-auto h-8 md:h-10 lg:h-[52px]"
              />
            </div>
            <div className="flex-shrink-0 mr-8 md:mr-12 lg:mr-16">
              <Image
                src="/LOGO.png"
                alt="lab.MODULE"
                width={349}
                height={52}
                className="w-auto h-8 md:h-10 lg:h-[52px]"
              />
            </div>
            <div className="flex-shrink-0 mr-8 md:mr-12 lg:mr-16">
              <Image
                src="/LOGO.png"
                alt="lab.MODULE"
                width={349}
                height={52}
                className="w-auto h-8 md:h-10 lg:h-[52px]"
              />
            </div>
          </div>
          {/* 두 번째 세트 (무한 루프를 위해 복제) */}
          <div className="flex flex-shrink-0">
            <div className="flex-shrink-0 mr-8 md:mr-12 lg:mr-16">
              <Image
                src="/LOGO.png"
                alt="lab.MODULE"
                width={349}
                height={52}
                className="w-auto h-8 md:h-10 lg:h-[52px]"
              />
            </div>
            <div className="flex-shrink-0 mr-8 md:mr-12 lg:mr-16">
              <Image
                src="/LOGO.png"
                alt="lab.MODULE"
                width={349}
                height={52}
                className="w-auto h-8 md:h-10 lg:h-[52px]"
              />
            </div>
            <div className="flex-shrink-0 mr-8 md:mr-12 lg:mr-16">
              <Image
                src="/LOGO.png"
                alt="lab.MODULE"
                width={349}
                height={52}
                className="w-auto h-8 md:h-10 lg:h-[52px]"
              />
            </div>
            <div className="flex-shrink-0 mr-8 md:mr-12 lg:mr-16">
              <Image
                src="/LOGO.png"
                alt="lab.MODULE"
                width={349}
                height={52}
                className="w-auto h-8 md:h-10 lg:h-[52px]"
              />
            </div>
          </div>
        </motion.div>
      </div>
      <p className="h-20 md:h-24 lg:h-32 xl:h-[150px]"></p>
    </div>
  );
}
