"use client";

import LogoLoop from "../components/LogoLoop";

export default function Work() {
  return (
    <div>
      <p className="h-[150px]" />
      <div className="relative w-full overflow-hidden">
        <LogoLoop />
      </div>
      <p className="h-[150px]" />

      <div className="px-[80px] md:px-8 lg:px-20 xl:px-[80px] pt-12 ">
        <h1 className="text-[48px] md:text-[64px] lg:text-[80px] xl:text-[128px] font-bold">
          WORK_
        </h1>
        <p className="h-[150px]" />

        <div className="flex flex-col gap-8 md:gap-12">
          {/* 첫 번째 섹션 */}
          <div className="flex flex-row gap-8 md:gap-12">
            <div className="flex-1">
              <div
                className="w-full aspect-[4/3] bg-gray-200 mb-4"
                style={{
                  backgroundImage: `
                  linear-gradient(45deg, #e5e5e5 25%, transparent 25%),
                  linear-gradient(-45deg, #e5e5e5 25%, transparent 25%),
                  linear-gradient(45deg, transparent 75%, #e5e5e5 75%),
                  linear-gradient(-45deg, transparent 75%, #e5e5e5 75%)
                `,
                  backgroundSize: "20px 20px",
                  backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px",
                }}
              />
              <p className=" text-sm md:text-base">Whew APP UI/UX DESIGN</p>
            </div>
            <div className="flex-1">
              <div
                className="w-full aspect-[4/3] bg-gray-200 mb-4"
                style={{
                  backgroundImage: `
                  linear-gradient(45deg, #e5e5e5 25%, transparent 25%),
                  linear-gradient(-45deg, #e5e5e5 25%, transparent 25%),
                  linear-gradient(45deg, transparent 75%, #e5e5e5 75%),
                  linear-gradient(-45deg, transparent 75%, #e5e5e5 75%)
                `,
                  backgroundSize: "20px 20px",
                  backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px",
                }}
              />
              <p className=" text-sm md:text-base">Whew APP UI/UX DESIGN</p>
            </div>
          </div>

          {/* 두 번째 섹션 */}
          <div className="flex flex-row gap-8 md:gap-12">
            <div className="flex-1">
              <div
                className="w-full aspect-[4/3] bg-gray-200 mb-4"
                style={{
                  backgroundImage: `
                  linear-gradient(45deg, #e5e5e5 25%, transparent 25%),
                  linear-gradient(-45deg, #e5e5e5 25%, transparent 25%),
                  linear-gradient(45deg, transparent 75%, #e5e5e5 75%),
                  linear-gradient(-45deg, transparent 75%, #e5e5e5 75%)
                `,
                  backgroundSize: "20px 20px",
                  backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px",
                }}
              />
              <p className=" text-sm md:text-base">Whew APP UI/UX DESIGN</p>
            </div>
            <div className="flex-1">
              <div
                className="w-full aspect-[4/3] bg-gray-200 mb-4"
                style={{
                  backgroundImage: `
                  linear-gradient(45deg, #e5e5e5 25%, transparent 25%),
                  linear-gradient(-45deg, #e5e5e5 25%, transparent 25%),
                  linear-gradient(45deg, transparent 75%, #e5e5e5 75%),
                  linear-gradient(-45deg, transparent 75%, #e5e5e5 75%)
                `,
                  backgroundSize: "20px 20px",
                  backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px",
                }}
              />
              <p className=" text-sm md:text-base">Whew APP UI/UX DESIGN</p>
            </div>
          </div>
        </div>
        <p className="h-[150px]" />
      </div>
    </div>
  );
}
