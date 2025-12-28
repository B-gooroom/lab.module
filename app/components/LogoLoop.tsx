"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function LogoLoop() {
  return (
    <div>
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
    </div>
  );
}
