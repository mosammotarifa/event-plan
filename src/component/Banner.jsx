import Image from "next/image";
import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <div className="relative h-[400px] w-full overflow-hidden rounded-2xl sm:h-[450px] md:h-[500px]">
      {/* Background Image */}
      <Image
        src="/event-plan-banner.png"
        fill
        priority
        alt="Event planning banner"
        className="object-cover"
        sizes="100vw"
      />

      {/* Dark Overlay (for readable text) */}
      <div className="absolute inset-0 bg-black/35"></div>

      {/* Banner Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-center sm:px-6">
        <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-[#F5E6CC] sm:text-sm sm:tracking-[0.3em]">
          MAKE EVERY MOMENT SPECIAL
        </p>

        <h1 className="text-3xl font-bold text-white sm:text-4xl md:text-6xl">
          Your Moments, Our Passion,
          <span className="block text-[#D9A441]">Perfectly Planned.</span>
        </h1>

        <p className="mt-5 max-w-xl text-sm text-white/90 sm:text-base">
          From beautiful weddings to unforgettable birthdays, we bring your
          dream celebrations to life.
        </p>

        <Link href={"/plan-your-event"}>
          <button className="mt-8 rounded-xl bg-[#722F52] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#5B2441] sm:text-base">
            Plan Your Event
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
