import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full">
      {/* 헤더 컨텐츠 */}
      <div className="flex items-center justify-between px-20 py-8 border-b border-gray-200">
        {/* 로고 */}
        <Link href="/">
          <Image
            className="w-[134px] h-[20px]"
            src="/LOGO.png"
            alt="lab.MODULE"
            width={134}
            height={20}
            priority
            unoptimized
          />
        </Link>
        {/* 네비게이션 */}
        <nav>
          <ul className="flex gap-8 text-[16px] font-semibold">
            <li>
              <a
                href="#about"
                className="hover:text-blue-600 transition-colors"
              >
                ABOUT
              </a>
            </li>
            <li>
              <a href="#work" className="hover:text-blue-600 transition-colors">
                WORK
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-blue-600 transition-colors"
              >
                CONTACT
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
