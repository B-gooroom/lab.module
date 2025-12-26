import FlipBox from "./components/FlipBox";
import Image from "next/image";
import Scene3D from "./components/Scene3D";

export default function Home() {
  return (
    <main className="">
      <p className="h-[150px]"></p>
      {/* DESIGN 섹션 */}
      <section className="flex flex-row h-[400px] md:h-[600px] lg:h-[800px] items-start justify-between mx-4 md:mx-10 lg:mx-20">
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
      {/* 영상 섹션 - 1440:800 (9:5) 비율 유지 */}
      <section
        className="w-full max-w-[1440px] mx-auto bg-gray-100 flex items-center justify-center mx-4 md:mx-10 lg:mx-20"
        style={{ aspectRatio: "1440 / 800" }}
      >
        <span className="text-gray-400">영상 섹션</span>
        {/* <div className="flex items-center justify-center w-full h-full">
          <video src="/video.mp4" autoPlay muted loop className="w-full h-full object-cover" />
        </div> */}
      </section>
      <p className="h-[150px]"></p>

      {/* WORK 섹션 */}
      <section className="flex items-start justify-between mx-4 md:mx-10 lg:mx-20">
        {/* 왼쪽: 라벨 + 타이틀 */}
        <div className="flex flex-col gap-[20px]">
          <span className="text-[16px]">WORK</span>
          <Image src="/LOGO.png" alt="lab.MODULE" width={221} height={43} />
        </div>

        {/* 오른쪽: 프로젝트 카드 */}
        <div className="flex flex-col gap-4">
          {/* 이미지 플레이스홀더 */}
          <div className="w-[500px] h-[300px] bg-gray-200 flex items-center justify-center">
            <span className="text-gray-400">이미지</span>
          </div>
          {/* 프로젝트 제목 */}
          <p className="text-lg font-medium">Whew APP UI/UX DESIGN</p>
        </div>
      </section>
      <p className="h-[150px]"></p>

      {/* 3D 섹션 - 전체 너비 */}
      <section
        className="w-screen relative left-1/2 -translate-x-1/2 overflow-hidden"
        style={{ aspectRatio: "1 / 1" }}
      >
        <Scene3D />
      </section>
      <p className="h-[150px]"></p>

      {/* 작업 리스트 섹션 */}
      <section className="px-4 md:px-10 lg:px-20 border-t border-gray-200">
        {/* 항목 1 */}
        <div className="flex items-center justify-between py-8 border-b border-gray-200">
          <div className="flex items-center gap-8 md:gap-16 lg:gap-32">
            <span className="text-2xl md:text-3xl lg:text-4xl font-semibold w-8">
              1
            </span>
            <span className="text-2xl md:text-3xl lg:text-4xl font-semibold">
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
        <div className="flex items-center justify-between py-8 border-b border-gray-200">
          <div className="flex items-center gap-8 md:gap-16 lg:gap-32">
            <span className="text-2xl md:text-3xl lg:text-4xl font-semibold w-8">
              2
            </span>
            <span className="text-2xl md:text-3xl lg:text-4xl font-semibold">
              UX/UI DESIGN
            </span>
          </div>
          <div className="text-right text-sm text-gray-600 leading-relaxed">
            <p>Whew</p>
            <p>Amond</p>
            <p>Buyaladin</p>
          </div>
        </div>

        {/* 항목 3 */}
        <div className="flex items-center justify-between py-8 border-b border-gray-200">
          <div className="flex items-center gap-8 md:gap-16 lg:gap-32">
            <span className="text-2xl md:text-3xl lg:text-4xl font-semibold w-8">
              3
            </span>
            <span className="text-2xl md:text-3xl lg:text-4xl font-semibold">
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
        <div className="flex items-center justify-between py-8 border-b border-gray-200">
          <div className="flex items-center gap-8 md:gap-16 lg:gap-32">
            <span className="text-2xl md:text-3xl lg:text-4xl font-semibold w-8">
              4
            </span>
            <span className="text-2xl md:text-3xl lg:text-4xl font-semibold">
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

      {/* 푸터 */}
      <footer className="border-t border-gray-200 py-[80px] px-4 md:px-10 lg:px-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* BUSINESS */}
          <div className="flex flex-col gap-2">
            <span className="text-md font-semibold text-gray-900">
              BUSINESS
            </span>
            <span className="text-md text-gray-600">
              offl.labmodule@gmail.com
            </span>
          </div>

          {/* CONTACT */}
          <div className="flex flex-col gap-2">
            <span className="text-md font-semibold text-gray-900">CONTACT</span>
            <span className="text-md text-gray-600">+82.10-9631-1524</span>
          </div>

          {/* OFFICE */}
          <div className="flex flex-col gap-2">
            <span className="text-md font-semibold text-gray-900">OFFICE</span>
            <span className="text-md text-gray-600">
              Wiryeseong-daero 6-gil, Songpa-gu,
              <br />
              Seoul, Republic of Korea
            </span>
          </div>

          {/* COPYRIGHT */}
          <div className="flex flex-col gap-2">
            <span className="text-md font-semibold text-gray-900">
              COPYRIGHT
            </span>
            <span className="text-md text-gray-600">
              COPYRIGHT lab.MODULE. Inc © 2026
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}
