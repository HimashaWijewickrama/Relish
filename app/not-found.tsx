import Link from "next/link";
import {
  FaArrowLeft,
  FaExclamationTriangle,
  FaHome,
  FaUtensils,
} from "react-icons/fa";

export default function NotFound() {
  return (
    <main className="restaurant-404 relative overflow-hidden mt-30 mb-30">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,176,94,0.2),_transparent_35%)]" />

      <div className="relative mx-auto flex min-h-[72vh] max-w-6xl items-center justify-center px-6 py-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="order-2 lg:order-1">
            <div className="relative rounded-[2rem] border border-[#d9b28a]/30 bg-[#111111]/80 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-sm sm:p-10">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#f4c38a]/30 bg-[#f4c38a]/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#f4c38a]">
                <FaExclamationTriangle size={12} />
                Error 404
              </div>

              <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl">
                Lost in the sauce?
              </h1>

              <p className="mt-5 max-w-lg text-base leading-8 text-[#d7d7d7] sm:text-lg">
                The page you were looking for may have moved, been removed, or never existed.
                Let&apos;s bring you back to the table with something delicious.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#c6935c] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#b57b43]"
                >
                  <FaHome size={14} />
                  Back Home
                </Link>

                <Link
                  href="/about"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-[#f4c38a]/60 hover:text-[#f4c38a]"
                >
                  <FaUtensils size={14} />
                  About Us
                </Link>
              </div>

              <div className="mt-8 flex items-center gap-3 text-sm text-[#d7d7d7]">
                <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[#c6935c] shadow-[0_0_12px_rgba(198,147,92,0.9)]" />
                Freshly plated hospitality, every time.
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="plate-orbit relative mx-auto flex h-[340px] w-[340px] items-center justify-center sm:h-[420px] sm:w-[420px]">
              <div className="absolute inset-10 rounded-full border border-[#f4c38a]/20" />
              <div className="absolute inset-16 rounded-full border border-[#f4c38a]/25" />

              <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,_rgba(198,147,92,0.14),_transparent_60%)] blur-2xl" />

              <div className="relative flex h-[260px] w-[260px] items-center justify-center rounded-full border border-[#f4c38a]/40 bg-[#1a1a1a]/90 shadow-[0_30px_80px_rgba(0,0,0,0.45)] sm:h-[320px] sm:w-[320px]">
                <svg
                  viewBox="0 0 220 220"
                  className="h-[200px] w-[200px] sm:h-[250px] sm:w-[250px]"
                  aria-label="Restaurant plate illustration"
                  role="img"
                >
                  <circle cx="110" cy="110" r="80" fill="#f8efe8" opacity="0.98" />
                  <circle cx="110" cy="110" r="55" fill="#d9b28a" opacity="0.22" />
                  <path
                    d="M42 118c22-26 48-39 68-39s46 13 68 39c-10 34-35 56-68 56s-58-22-68-56Z"
                    fill="#f1d7b3"
                    opacity="0.9"
                  />
                  <circle cx="110" cy="110" r="20" fill="#c6935c" opacity="0.9" />

                  <g stroke="#202020" strokeWidth="5" strokeLinecap="round">
                    <path d="M80 58v76" />
                    <path d="M86 60v-20" />
                    <path d="M74 60v-18" />
                    <path d="M68 60v-16" />
                    <path d="M92 60v-12" />
                    <path d="M98 58v76" />
                    <path d="M122 58v76" />
                    <path d="M132 58v76" />
                    <path d="M136 60v-18" />
                    <path d="M144 60v-12" />
                  </g>

                  <g fill="none" stroke="#202020" strokeWidth="5" strokeLinecap="round">
                    <path d="M148 72c17 10 26 24 30 40" />
                    <path d="M152 88c15 8 23 19 27 35" />
                  </g>
                </svg>
              </div>

              <div className="floating-card absolute -bottom-3 right-2 rounded-2xl border border-[#f4c38a]/35 bg-[#1b1b1b]/90 px-4 py-3 shadow-[0_18px_40px_rgba(0,0,0,0.3)]">
                <p className="text-[10px] uppercase tracking-[0.24em] text-[#f4c38a]">
                  Chef&apos;s note
                </p>
                <p className="mt-1 text-sm font-medium text-white">You&apos;re one click away.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </main>
  );
}
