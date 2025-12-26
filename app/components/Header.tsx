import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full sticky top-0 z-50 bg-white/55 border-b border-white/25 bg-liquid">
      {/* // <div className="absolute inset-0 rounded-[16px] backdrop-blur-[1px]"> */}
      <div className="flex items-center justify-between px-20 py-8">
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
                href="/about"
                className="hover:text-blue-600 transition-colors"
              >
                ABOUT
              </a>
            </li>
            <li>
              <a href="/work" className="hover:text-blue-600 transition-colors">
                WORK
              </a>
            </li>
            <li>
              <a
                href="/contact"
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
