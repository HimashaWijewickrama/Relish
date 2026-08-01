"use client";

import Image from "next/image";
import { FormEvent, useEffect, useRef, useState } from "react";
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

export default function ReservationSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [tearing, setTearing] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTearing(true);
    setTimeout(() => setSubmitted(true), 550);
  };

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#171311] py-24 text-[#f6f1ea]">
      <div className="absolute -left-10 top-10 h-52 w-52 rounded-full bg-[#ff8c42]/10 blur-3xl" />
      <div className="absolute -right-12 bottom-6 h-64 w-64 rounded-full bg-[#ffb27a]/8 blur-3xl" />

      <style>{`
        @keyframes ticketIn { from { opacity: 0; transform: translateY(40px) rotate(-1.2deg); } to { opacity: 1; transform: translateY(0) rotate(0deg); } }
        @keyframes dotPop { from { opacity: 0; transform: scale(0); } to { opacity: 1; transform: scale(1); } }
        @keyframes tearAway { to { transform: translateX(-70px) rotate(-9deg); opacity: 0; } }
        @keyframes stampSlam { 0% { transform: scale(2.4) rotate(-16deg); opacity: 0; } 55% { transform: scale(0.94) rotate(-6deg); opacity: 1; } 75% { transform: scale(1.05) rotate(-9deg); } 100% { transform: scale(1) rotate(-7deg); } }
        @keyframes formFade { to { opacity: 0; transform: scale(0.98); } }
        @keyframes floatGlow { 0%, 100% { transform: translateY(0px) scale(1); opacity: 0.75; } 50% { transform: translateY(-12px) scale(1.05); opacity: 1; } }
        @keyframes floatOrb {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); opacity: 0.28; }
          50% { transform: translate3d(12px, -16px, 0) scale(1.06); opacity: 0.58; }
        }
        @keyframes ambientGlow {
          0%, 100% { opacity: 0.12; transform: scale(0.96); filter: blur(18px); }
          18% { opacity: 0.68; transform: scale(1.08); filter: blur(24px); }
          28% { opacity: 0.18; transform: scale(1.02); filter: blur(18px); }
          52% { opacity: 0.72; transform: scale(1.1); filter: blur(26px); }
          66% { opacity: 0.16; transform: scale(0.99); filter: blur(18px); }
        }

        .ticket { opacity: 0; }
        .ticket.in-view { animation: ticketIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .dot { opacity: 0; }
        .ticket.in-view .dot { animation: dotPop 0.4s ease-out forwards; animation-delay: var(--dd, 0ms); }
        .stub.tearing { animation: tearAway 0.55s ease-in forwards; }
        .ticket-form.tearing { animation: formFade 0.4s ease-in forwards; }
        .stamp { animation: stampSlam 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
        .floating-glow {
          animation: floatGlow 8s ease-in-out infinite;
        }
        .ambient-glow {
          animation: ambientGlow 2.8s ease-in-out infinite;
        }
        .tfield { border-bottom: 1px solid rgba(255,255,255,0.35); padding-bottom: 8px; transition: border-color 0.25s ease, transform 0.25s ease; background: rgba(17, 15, 14, 0.38); border-radius: 10px 10px 0 0; padding-left: 10px; padding-right: 10px; }
        .tfield input, .tfield select {
          width: 100%; background: transparent; border: none; outline: none;
          color: #fffaf5; font-size: 14px; padding: 2px 0; font-weight: 600;
        }
        .tfield input::placeholder { color: rgba(255,255,255,0.82); }
        .tfield:focus-within { border-bottom-color: #ffb27a; transform: translateY(-1px); }
        .tfield:focus-within .tlabel { color: #ffe0b9; }
        .tlabel { display: block; font-size: 10px; letter-spacing: 0.18em; text-transform: uppercase; color: #fff1e1; margin-bottom: 4px; transition: color 0.25s ease; font-weight: 700; }
      `}</style>

      <div className="relative mx-auto w-full max-w-[1440px] px-4">
        <div className={`ticket ${inView ? "in-view" : ""} mb-12 text-center`}>
          <p className="section-subtitle">Reserve Your Table</p>
          <h2 className="section-title text-white">Plan your evening at our table</h2>
          <div className="mx-auto mt-4 h-1 w-20 bg-[#ff8c42]" />
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#d7d0c8]">
            One ticket, one table, one evening designed around your mood.
          </p>
        </div>

        <div className={`ticket ${inView ? "in-view" : ""} relative mx-auto grid w-full max-w-[1320px] overflow-visible rounded-[12px] border border-[#ff8c42]/20 bg-[#1b1715] shadow-[0_30px_80px_rgba(0,0,0,0.42)] transition-transform duration-500 hover:-translate-y-1 lg:grid-cols-[360px_1fr]`}>
          {!submitted ? (
            <>
              <aside className="border-b border-[#ff8c42]/15 bg-[#120f0d] p-5 sm:p-6 lg:border-b-0 lg:border-r">
                <div className="mb-5 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-[#ffb27a]">Visit us</p>
                    <h3 className="mt-2 font-serif text-2xl text-[#fefaf4]">Find the table</h3>
                  </div>
                  <div className="rounded-full border border-[#ff8c42]/25 bg-[#ff8c42]/5 px-2.5 py-1 text-[9px] font-medium uppercase tracking-[0.24em] text-[#ffb27a]">
                    Open daily
                  </div>
                </div>

                <div className="mb-5 overflow-hidden rounded-[18px] border border-[#ff8c42]/20 bg-[#111111] p-2.5">
                  <div className="overflow-hidden rounded-[12px] border border-white/5 bg-[#121212]">
                    <iframe
                      title="Restaurant location"
                      src="https://www.google.com/maps?q=24%20Oak%20Avenue%2C%20Colombo%2007%2C%20Sri%20Lanka&z=13&output=embed"
                      className="h-52 w-full border-0 grayscale contrast-125 brightness-75"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-3">
                    <span className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-[#ff8c42]/10 text-[#ffb27a]">
                      <FaMapMarkerAlt className="text-sm" />
                    </span>
                    <div>
                      <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#cdbeb1]">Location</p>
                      <p className="mt-1 text-sm text-[#f6f1ea]">24 Oak Avenue, Colombo 07, Sri Lanka</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-3">
                    <span className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-[#ff8c42]/10 text-[#ffb27a]">
                      <FaClock className="text-sm" />
                    </span>
                    <div>
                      <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#cdbeb1]">Opening Hours</p>
                      <p className="mt-1 text-sm text-[#f6f1ea]">Mon – Sun: 6:30 PM – 11:30 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-3">
                    <span className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-[#ff8c42]/10 text-[#ffb27a]">
                      <FaPhoneAlt className="text-sm" />
                    </span>
                    <div>
                      <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#cdbeb1]">Contact</p>
                      <div className="mt-1 text-sm text-[#f6f1ea]">
                        <a href="tel:+94771234567" className="block transition-colors hover:text-[#ffb27a]">+94 77 123 4567</a>
                        <a href="mailto:hello@ember&co.com" className="mt-0.5 block transition-colors hover:text-[#ffb27a]">hello@emberandco.com</a>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>

              <div
                className={`ticket-form ${tearing ? "tearing" : ""} relative overflow-hidden rounded-[12px] bg-[#1d140f] p-6 sm:p-8 transition-transform duration-500 hover:translate-x-0.5`}
              >
                <div className="pointer-events-none absolute -left-12 top-8 z-0 h-32 w-32 rounded-full bg-[#ffb27a]/30 blur-3xl" style={{ animation: "floatOrb 8s ease-in-out infinite" }} />
                <div className="pointer-events-none absolute right-10 top-14 z-0 h-24 w-24 rounded-full bg-[#ff8c42]/30 blur-3xl" style={{ animation: "floatOrb 10s ease-in-out infinite reverse" }} />
                <div className="pointer-events-none absolute bottom-10 left-1/3 z-0 h-28 w-28 rounded-full bg-[#ffd1a0]/20 blur-3xl" style={{ animation: "floatOrb 9s ease-in-out infinite" }} />
                <div className="ambient-glow pointer-events-none absolute left-10 top-12 z-0 h-28 w-28 rounded-full bg-[#ffb27a]/25" />
                <div className="ambient-glow pointer-events-none absolute right-12 top-16 z-0 h-20 w-20 rounded-full bg-[#ff8c42]/20" style={{ animationDelay: "0.7s" }} />
                <div className="ambient-glow pointer-events-none absolute bottom-10 left-1/2 z-0 h-24 w-24 rounded-full bg-[#ffd1a0]/15" style={{ animationDelay: "1.4s" }} />
                <div className="ambient-glow pointer-events-none absolute left-1/3 top-1/3 z-0 h-14 w-14 rounded-full bg-[#fff1d9]/20" style={{ animationDelay: "2.1s" }} />
                <div className="ambient-glow pointer-events-none absolute bottom-14 right-14 z-0 h-16 w-16 rounded-full bg-[#ff9d5b]/18" style={{ animationDelay: "2.7s" }} />
                <div className="ambient-glow pointer-events-none absolute right-1/4 top-2/3 z-0 h-12 w-12 rounded-full bg-[#ffe6c7]/20" style={{ animationDelay: "3.3s" }} />
                <div className="absolute inset-0 z-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.08),transparent_45%,rgba(255,255,255,0.04))]" />
                <div className="absolute inset-3 z-0 rounded-[10px] border border-white/20 bg-black/10 backdrop-blur-[2px]" />

                <div className="relative z-10 flex min-h-[520px] items-center justify-center">
                  <div className="w-full max-w-[760px] rounded-[10px] border border-white/25 bg-[#120f0d]/75 p-4 shadow-[0_20px_40px_rgba(0,0,0,0.22)] backdrop-blur-md sm:p-6">
                    <div className="mb-6 flex items-start justify-between gap-4">
                      <div>
                        <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#ffe2bf]">E-Ticket · No. 0417</p>
                        <h3 className="mt-2 font-serif text-2xl text-[#fffaf5]">Reserve your seat</h3>
                      </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4">
                      <div className="tfield">
                        <span className="tlabel">Name</span>
                        <input type="text" placeholder="Your name" />
                      </div>
                      <div className="tfield">
                        <span className="tlabel">Guests</span>
                        <select defaultValue="2">
                          <option value="2">2</option>
                          <option value="4">4</option>
                          <option value="6">6</option>
                          <option value="8">8</option>
                          <option value="10">10+</option>
                        </select>
                      </div>
                      <div className="tfield">
                        <span className="tlabel">Date</span>
                        <input type="date" />
                      </div>
                      <div className="tfield">
                        <span className="tlabel">Time</span>
                        <input type="time" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
                      <div className="tfield">
                        <span className="tlabel">Phone</span>
                        <input type="tel" placeholder="Your phone" />
                      </div>
                      <div className="tfield">
                        <span className="tlabel">Occasion</span>
                        <select defaultValue="Casual dinner">
                          <option>Casual dinner</option>
                          <option>Birthday</option>
                          <option>Anniversary</option>
                          <option>Business meal</option>
                          <option>Private event</option>
                        </select>
                      </div>
                    </div>

                    <div className="tfield">
                      <span className="tlabel">Special request</span>
                      <input type="text" placeholder="Tell us about your preferences" />
                    </div>

                    <button
                      type="submit"
                      className="shimmer-button group relative mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-dashed border-[#ff8c42] bg-[#ff8c42] px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ff9d5b] hover:shadow-[0_18px_30px_rgba(255,140,66,0.25)]"
                    >
                      <FaCalendarAlt />
                      Tear off and reserve
                    </button>
                    </form>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="flex min-h-[340px] w-full flex-col items-center justify-center gap-4 p-8 text-center lg:col-span-2">
              <div className="stamp flex h-24 w-28 items-center justify-center rounded-md border-4 border-[#ff8c42] text-[#ffb27a]">
                <span className="rotate-[-7deg] text-sm font-bold uppercase tracking-[0.2em] text-[#ffb27a]">
                  Confirmed
                </span>
              </div>
              <h3 className="font-serif text-2xl text-[#fefaf4]">Your table is booked</h3>
              <p className="max-w-xs text-sm leading-6 text-[#d3cac3]">
                We&apos;ll call to confirm shortly. Keep an eye on your phone before tonight&apos;s seating.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setTearing(false);
                }}
                className="mt-2 text-xs font-medium uppercase tracking-[0.2em] text-[#ffb27a] underline underline-offset-4 transition-colors hover:text-white"
              >
                Book another table
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}