import Image from "next/image";
import Link from "next/link";

const DISPLACEMENT_MAP_URI =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" width="1600" height="200" viewBox="0 0 1600 200">
    <filter id="n">
      <feTurbulence type="fractalNoise" baseFrequency="0.012 0.08" numOctaves="2" seed="2"/>
      <feColorMatrix type="saturate" values="0"/>
    </filter>
    <rect width="1600" height="200" filter="url(#n)"/>
  </svg>
`);

const SPECULAR_LIGHTING_URI =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" width="1600" height="200" viewBox="0 0 1600 200">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="white" stop-opacity="0.95"/>
        <stop offset="0.35" stop-color="white" stop-opacity="0.25"/>
        <stop offset="1" stop-color="white" stop-opacity="0"/>
      </linearGradient>
      <radialGradient id="r" cx="50%" cy="0%" r="70%">
        <stop offset="0" stop-color="white" stop-opacity="0.65"/>
        <stop offset="1" stop-color="white" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="1600" height="200" fill="url(#g)"/>
    <rect width="1600" height="200" fill="url(#r)"/>
  </svg>
`);

export default function Header() {
  const WIDTH = 1600;
  const HEIGHT = 140;

  return (
    <>
      <header className="liquidHeader">
        {/* ✅ 지원 브라우저에서만 굴절 레이어가 먹도록 분리 */}
        <div className="liquidHeader__filterLayer absolute inset-0 pointer-events-none" />

        <div className="relative flex items-center justify-between px-20 py-8">
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

          <nav>
            <ul className="flex gap-8 text-[16px] font-semibold text-black/90">
              <li>
                <a
                  href="/about"
                  className="hover:text-gray-200 transition-colors"
                >
                  ABOUT
                </a>
              </li>
              <li>
                <a
                  href="/work"
                  className="hover:text-gray-200 transition-colors"
                >
                  WORK
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-gray-200 transition-colors"
                >
                  CONTACT
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <svg
        aria-hidden="true"
        style={{ display: "none" }}
        colorInterpolationFilters="sRGB"
      >
        <defs>
          <filter id="liquid-glass-header">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="1"
              result="blurred_source"
            />
            <feImage
              href={DISPLACEMENT_MAP_URI}
              x="0"
              y="0"
              width={WIDTH}
              height={HEIGHT}
              result="map"
            />
            <feDisplacementMap
              in="blurred_source"
              in2="map"
              scale="22"
              xChannelSelector="R"
              yChannelSelector="G"
              result="displaced"
            />
            <feColorMatrix
              in="displaced"
              type="saturate"
              values="1.25"
              result="sat"
            />
            <feImage
              href={SPECULAR_LIGHTING_URI}
              x="0"
              y="0"
              width={WIDTH}
              height={HEIGHT}
              result="spec"
            />
            <feGaussianBlur in="spec" stdDeviation="0.8" result="spec_blur" />
            <feComposite
              in="sat"
              in2="spec_blur"
              operator="in"
              result="spec_in"
            />
            <feBlend in="spec_in" in2="displaced" mode="normal" />
          </filter>
        </defs>
      </svg>
    </>
  );
}
