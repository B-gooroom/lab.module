"use client";

import LogoLoop from "../components/LogoLoop";

export default function Contact() {
  return (
    <div>
      <div className="px-[80px] md:px-8 lg:px-20 xl:px-[80px] pt-12 ">
        <h1 className="text-[48px] md:text-[64px] lg:text-[80px] xl:text-[128px] font-bold">
          CONTACT_
        </h1>
        <p className="h-[80px]" />
        <div className="flex items-center justify-between py-[30px] border-b border-[#111111] gap-8 md:gap-16 lg:gap-32">
          <div className="flex items-center gap-8 md:gap-16 lg:gap-32">
            <span className="text-[18px] md:text-[24px] lg:text-[36px] font-semibold w-8 ml-[50px]">
              1
            </span>
            <span className="text-[24px] md:text-[32px] lg:text-[48px] font-semibold w-[360px]">
              NAME*
            </span>
            <span className="text-md text-gray-600 leading-relaxed">
              이름을 입력해주세요
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between py-[30px] border-b border-[#111111] gap-8 md:gap-16 lg:gap-32">
          <div className="flex items-center gap-8 md:gap-16 lg:gap-32">
            <span className="text-[18px] md:text-[24px] lg:text-[36px] font-semibold w-8 ml-[50px]">
              2
            </span>
            <span className="text-[24px] md:text-[32px] lg:text-[48px] font-semibold w-[360px]">
              COMPANY*
            </span>
            <span className="text-md text-gray-600 leading-relaxed">
              회사명을 입력해주세요
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between py-[30px] border-b border-[#111111] gap-8 md:gap-16 lg:gap-32">
          <div className="flex items-center gap-8 md:gap-16 lg:gap-32">
            <span className="text-[18px] md:text-[24px] lg:text-[36px] font-semibold w-8 ml-[50px]">
              3
            </span>
            <span className="text-[24px] md:text-[32px] lg:text-[48px] font-semibold w-[360px]">
              E-MAIL*
            </span>
            <span className="text-md text-gray-600 leading-relaxed">
              이메일을 입력해주세요
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between py-[30px] border-b border-[#111111] gap-8 md:gap-16 lg:gap-32">
          <div className="flex items-center gap-8 md:gap-16 lg:gap-32">
            <span className="text-[18px] md:text-[24px] lg:text-[36px] font-semibold w-8 ml-[50px]">
              4
            </span>
            <span className="text-[24px] md:text-[32px] lg:text-[48px] font-semibold w-[360px]">
              TEL*
            </span>
            <span className="text-md text-gray-600 leading-relaxed">
              연락처를 입력해주세요
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between py-[30px]">
          <div className="flex items-center gap-8 md:gap-16 lg:gap-32">
            <span className="text-[18px] md:text-[24px] lg:text-[36px] font-semibold w-8 ml-[50px]">
              5
            </span>
            <span className="text-[24px] md:text-[32px] lg:text-[48px] font-semibold w-[360px]">
              PROJECT FIELD
            </span>
            <span className="text-md text-gray-600 leading-relaxed">
              웹사이트, 앱, 브랜딩, 기타 등 진행하시는 프로젝트를 입력해주세요
            </span>
          </div>
        </div>
        <p className="h-[80px]" />
        <button className="w-full h-[56px] bg-black text-white text-[16px] font-semibold cursor-pointer">
          CONNECTING
        </button>
        <p className="h-[310px]" />

        <div className="relative w-full overflow-hidden">
          <LogoLoop />
        </div>
        <p className="h-[150px]" />
      </div>
    </div>
  );
}
