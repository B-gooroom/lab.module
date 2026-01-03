export default function Footer() {
  return (
    <footer className="border-t border-[#111111] py-[40px] md:py-[80px] px-4 md:px-10 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
        {/* BUSINESS */}
        <div className="flex flex-col gap-1 md:gap-2">
          <span className="text-xs md:text-md font-semibold text-gray-900">
            BUSINESS
          </span>
          <span className="text-xs md:text-md text-gray-600">
            offl.labmodule@gmail.com
          </span>
        </div>

        {/* CONTACT */}
        <div className="flex flex-col gap-1 md:gap-2">
          <span className="text-xs md:text-md font-semibold text-gray-900">
            CONTACT
          </span>
          <span className="text-xs md:text-md text-gray-600">
            +82.10-9631-1524
          </span>
        </div>

        {/* OFFICE */}
        <div className="flex flex-col gap-1 md:gap-2">
          <span className="text-xs md:text-md font-semibold text-gray-900">
            OFFICE
          </span>
          <span className="text-xs md:text-md text-gray-600">
            Wiryeseong-daero 6-gil, Songpa-gu,
            <br />
            Seoul, Republic of Korea
          </span>
        </div>

        {/* COPYRIGHT */}
        <div className="flex flex-col gap-1 md:gap-2">
          <span className="text-xs md:text-md font-semibold text-gray-900">
            COPYRIGHT
          </span>
          <span className="text-xs md:text-md text-gray-600">
            COPYRIGHT lab.MODULE. Inc © 2026
          </span>
        </div>
      </div>
    </footer>
  );
}
