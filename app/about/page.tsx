"use client";

import Image from "next/image";
import LogoLoop from "../components/LogoLoop";

export default function About() {
  return (
    <div className="min-h-screen bg-white text-[#171717]">
      {/* 상단 섹션 */}
      <div className="mb-12 md:mb-16 lg:mb-20 px-[20px] md:px-8 lg:px-20 xl:px-[80px] pt-[40px] md:pt-16 lg:pt-20 xl:pt-[80px]">
        {/* 모바일: 왼쪽 파란 바 + 콘텐츠 */}
        <div className="flex">
          {/* 모바일 전용 파란색 세로 바 */}

          {/* 콘텐츠 영역 */}
          <div className="flex-1">
            <h1 className="text-[40px] md:text-[64px] lg:text-[80px] xl:text-[128px] font-bold mb-[32px] md:mb-0">
              ABOUT_
            </h1>
            <p className="hidden md:block h-8 md:h-12 lg:h-16 xl:h-20"></p>

            {/* 3개 컬럼 - 모바일: 세로, 데스크톱: 가로 */}
            <div className="flex flex-col md:flex-row md:gap-[80px] lg:gap-[120px] gap-[40px]">
              {/* BASIC */}
              <div>
                <div className="relative w-fit md:w-full lg:w-[224px] mb-[12px] md:mb-[20px]">
                  <h2 className="text-[36px] md:text-[48px] lg:text-[64px] font-bold">
                    BASIC
                    <sup className="text-[10px] md:text-[12px] lg:text-[16px] font-normal ml-1 align-super">
                      분석
                    </sup>
                  </h2>
                </div>
                <p className="text-[12px] lg:text-[16px] leading-[1.8]">
                  시장 트렌드와 소비자 행동을 분석해,
                  <br />
                  고객이 무엇을 원하는지 니즈를 파악하며
                  <br />
                  타겟의 UX를 분석하는 것에서 시작합니다.
                </p>
              </div>

              {/* STRATEGYIC */}
              <div>
                <div className="relative w-fit md:w-full lg:w-[428px] mb-[12px] md:mb-[20px]">
                  <h2 className="text-[36px] md:text-[48px] lg:text-[64px] font-bold">
                    STRATEGYIC
                    <sup className="text-[10px] md:text-[12px] lg:text-[16px] font-normal ml-1 align-super">
                      전략
                    </sup>
                  </h2>
                </div>
                <p className="text-[12px] lg:text-[16px] leading-[1.8]">
                  시장 트렌드와 소비자 행동을 통해 비즈니스의
                  <br />
                  성장 기회를 발굴하며 정체성과 목표를 구체화하여
                  <br />
                  지속 가능한 성장 전략을 설계합니다.
                </p>
              </div>

              {/* EXTEND */}
              <div>
                <div className="relative w-fit md:w-full lg:w-[284px] mb-[12px] md:mb-[20px]">
                  <h2 className="text-[36px] md:text-[48px] lg:text-[64px] font-bold">
                    EXTEND
                    <sup className="text-[10px] md:text-[12px] lg:text-[16px] font-normal ml-1 align-super">
                      확장
                    </sup>
                  </h2>
                </div>
                <p className="text-[12px] lg:text-[16px] leading-[1.8]">
                  클라이언트와 긴밀히 소통하여 이후의 스텝에서
                  <br />
                  장에 한 단계 더 도약하는 전환점 되도록 돕고
                  <br />
                  전략과 확장이 만나는 지점에서, 미래를 함께합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 구분선 */}
      <hr className="border-t border-[#171717] mb-12 md:mb-16 lg:mb-20 mx-4 md:mx-8 lg:mx-20 xl:mx-[80px]" />

      {/* 하단 섹션 - 모바일: 회색 배경 */}
      <div className="flex flex-col gap-6 md:gap-8 lg:gap-10 px-[20px] md:px-8 lg:px-20 xl:px-[80px] py-[40px] md:py-0">
        <div className="w-full max-w-[160px] md:max-w-[349px]">
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
          <p className="h-[16px] md:h-[20px]"></p>
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
          <p className="h-[16px] md:h-[20px]"></p>
          <div className="text-[12px] lg:text-[16px]">
            랩 모듈은 클라이언트와 긴밀히 소통하여 이후의 스텝에서 비지니스가
            시장에 한 단계 더 도약하는 전환점 되도록 돕겠습니다.
            <br />
            전략과 확장이 만나는 지점에서, 고객님의 비지니스 미래를 랩 모듈이
            함께합니다.
          </div>

          <p className="h-[40px] md:h-[80px]"></p>

          <div className="grid grid-cols-3 gap-4 md:gap-2 w-full md:w-[70%]">
            <div>
              <h3 className="text-[12px] lg:text-[16px] font-bold mb-[10px]">
                PRODUCT
              </h3>
              <ul className="space-y-1 md:space-y-2 text-[11px] md:text-base font-normal">
                <li>• analysis</li>
                <li>• wireframe</li>
                <li>• prototype</li>
              </ul>
            </div>

            <div>
              <h3 className="text-[12px] lg:text-[16px] font-bold mb-[10px]">
                DESIGN
              </h3>
              <ul className="space-y-1 md:space-y-2 text-[11px] md:text-base font-normal">
                <li>• UX/UI</li>
                <li>• BX/BI</li>
                <li>• web/app</li>
              </ul>
            </div>

            <div>
              <h3 className="text-[12px] lg:text-[16px] font-bold mb-[10px]">
                DEVELOPMENT
              </h3>
              <ul className="space-y-1 md:space-y-2 text-[11px] md:text-base font-normal">
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
        <LogoLoop />
      </div>
      <p className="h-20 md:h-24 lg:h-32 xl:h-[150px]"></p>
    </div>
  );
}
