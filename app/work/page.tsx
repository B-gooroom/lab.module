"use client";

import Link from "next/link";
import LogoLoop from "../components/LogoLoop";

export const works = [
  {
    title: "Whew APP UI/UX DESIGN",
    image: "/work_1.jpg",
    workId: 1,
  },
  {
    title: "Amond APP/WEB UI/UX DESIGN",
    image: "/work_2.jpg",
    workId: 1,
  },
  {
    title: "Real Research APP UI/UX DESIGN",
    image: "/work_3.jpg",
    workId: 1,
  },
  {
    title: "HoHoDang Content DESIGN",
    image: "/work_4.jpg",
    workId: 4,
  },
  {
    title: "Buyaladin APP UI/UX DESIGN",
    image: "/work_5.jpg",
    workId: 1,
  },
  {
    title: "MeiTalk APP UI/UX DESIGN",
    image: "/work_6.jpg",
    workId: 1,
  },
  {
    title: "cafe ma.me Branding DESIGN",
    image: "/work_7.jpg",
    workId: 2,
  },
  {
    title: "cafe KISO Illustration",
    image: "/work_8.jpg",
    workId: 3,
  },
];

export default function Work() {
  return (
    <div>
      <p className="h-[60px] lg:h-[150px]" />
      <div className="relative w-full overflow-hidden">
        <LogoLoop />
      </div>
      <p className="h-[40px] lg:h-[150px]" />

      <div className="px-[20px] md:px-8 lg:px-[80px] xl:px-[80px] pt-12 ">
        <h1 className="text-[48px] md:text-[64px] lg:text-[80px] xl:text-[128px] font-bold">
          WORK_
        </h1>
        <p className="h-[60px] lg:h-[150px]" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {works.map((work, index) => (
            <Link
              href={`/work/${index + 1}?workId=${work.workId}`}
              key={index}
              className="group cursor-pointer"
            >
              <div
                className="w-full aspect-[4/3] bg-gray-200 mb-4 overflow-hidden"
                style={{
                  backgroundImage: `url(${work.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <p className="text-sm md:text-base">{work.title}</p>
            </Link>
          ))}
        </div>
        <p className="h-[150px]" />
      </div>
    </div>
  );
}
