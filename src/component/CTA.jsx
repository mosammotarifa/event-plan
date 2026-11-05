import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const CTA = async () => {
  return (
    <section className="bg-[#FAF5F7] px-3 py-10 sm:px-4 sm:py-16 md:py-24">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl shadow-2xl sm:rounded-[30px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={"/event-plan-cta.png"}
            alt="Beautiful wedding celebration"
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover"
          />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#291521]/95 via-[#351D2B]/85 to-[#351D2B]/25" />

        {/* Decorative Circles */}
        <div className="absolute -right-20 -top-24 h-80 w-80 rounded-full border border-white/20" />
        <div className="absolute -right-10 -top-14 h-60 w-60 rounded-full border border-white/20" />

        {/* Main Content */}
        <div className="relative z-10 flex min-h-[420px] items-center px-5 py-12 sm:min-h-[460px] sm:px-7 sm:py-16 md:min-h-[520px] md:px-14 lg:px-20 lg:py-24">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#E8A7C1]/60 bg-white/10 px-3 py-2 backdrop-blur-md sm:mb-8 sm:gap-3 sm:px-5 sm:py-3">
              <span className="h-2 w-2 rounded-full bg-[#E8A7C1] sm:h-2.5 sm:w-2.5" />

              <span className="text-[9px] font-semibold tracking-[1px] text-[#F5C8D9] sm:text-[10px] sm:tracking-[2px] md:text-xs">
                BLISS HAUS — YOUR DREAM, OUR PASSION
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-serif text-3xl font-medium leading-[1.15] tracking-tight text-white sm:text-4xl md:text-6xl lg:text-7xl">
              Every Love Story Deserves a Beautiful
              <span className="italic text-[#EBAFC5]">Celebration.</span>
            </h2>

            {/* Accent Line */}
            <div className="mt-5 h-1 w-20 rounded-full bg-[#E8A7C1] sm:mt-7" />

            {/* Description */}
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/80 sm:mt-7 sm:text-base sm:leading-8 md:text-lg">
              From intimate weddings to grand celebrations, we create magical
              moments filled with love, elegance, and unforgettable memories.
            </p>

            {/* CTA Buttons */}
            <div className="mt-7 flex flex-col items-start gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-[#E8A7C1] px-5 py-3 text-xs font-semibold text-[#351D2B] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-white sm:px-7 sm:py-4 sm:text-sm"
              >
                Plan Your Event
                <ArrowUpRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

              <Link
                href="/services"
                className="group inline-flex items-center gap-3 rounded-full border border-white/60 bg-white/5 px-5 py-3 text-xs font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#351D2B] sm:px-7 sm:py-4 sm:text-sm"
              >
                Explore Our Services
                <ArrowUpRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>

            {/* Bottom Text */}
            <p className="mt-8 text-[9px] font-semibold uppercase tracking-[2px] text-[#F5C8D9] sm:mt-12 sm:text-[10px] sm:tracking-[3px] md:text-xs md:tracking-[4px]">
              Every Detail. Every Moment. Beautifully Planned.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
