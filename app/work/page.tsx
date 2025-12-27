"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Work() {
  return (
    <div>
      <p className="h-[150px]" />
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
