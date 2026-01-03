"use client";

import { useParams, useSearchParams } from "next/navigation";
import { works } from "../page";
import Image from "next/image";

const worksCategory = [
  {
    category: "UI/UX DESIGN",
  },
  {
    category: "BRANDING DESIGN",
  },
  {
    category: "ART WORK / Illustration",
  },
  {
    category: "CONTENT DESIGN",
  },
];

export default function WorkDetail() {
  const params = useParams();
  const searchParams = useSearchParams();
  const workId = params.id as string;
  const workCategory = searchParams?.get("workId") as string;
  // console.log("ddd", workId);

  return (
    <div className="">
      <div className="px-[20px] md:px-8 lg:px-[80px] xl:px-[80px]">
        <p className="h-[40px] lg:h-[80px]" />
        <p className="">{worksCategory[Number(workCategory) - 1].category}</p>
        <p className="h-[20px]" />
        <p className="text-[24px] font-bold">
          {works[Number(workId) - 1].title}
        </p>
        <p className="h-[80px]" />
      </div>
      <div className="w-full h-full">
        <Image
          src={`/new_detail_work_${workId}.jpg`}
          alt={works[Number(workId) - 1].title}
          width={1000}
          height={1000}
          unoptimized
          className="w-full h-full object-cover"
        />
        <p className="h-[150px]" />
      </div>
    </div>
  );
}
