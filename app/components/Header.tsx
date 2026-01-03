import Image from "next/image";
import Link from "next/link";

/**
 * Liquid Glass Header
 * 노이즈 오버레이 + CSS 애니메이션으로 유리 텍스처 구현
 */

export default function Header() {
  return (
    <header className="liquidHeader">
      <div className="relative z-10 flex items-center justify-between px-[20px] md:px-20 py-4 md:py-8">
        <Link href="/">
          <Image
            className="w-[90px] md:w-[134px] h-auto"
            src="/LOGO.png"
            alt="lab.MODULE"
            width={134}
            height={20}
            priority
            unoptimized
          />
        </Link>

        <nav>
          <ul className="flex gap-4 md:gap-8 text-[12px] md:text-[16px] font-semibold text-black/90">
            <li>
              <a
                href="/about"
                className="hover:text-gray-500 transition-colors"
              >
                ABOUT
              </a>
            </li>
            <li>
              <a href="/work" className="hover:text-gray-500 transition-colors">
                WORK
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-gray-500 transition-colors"
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
