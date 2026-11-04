import Image from "next/image";
import React from "react";


const Banner = () => {
  return (
    <div className="relative h-[500px] w-full overflow-hidden rounded-2xl">
      {/* Background Image */}
      <Image
        src="/event-plan-banner.png"
        fill
        priority
        alt="Event planning banner"
        className="object-cover"
      />

      {/* Dark Overlay (for readable text) */}
      <div className="absolute inset-0 bg-black/35"></div>

      {/* Banner Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 text-sm font-semibold tracking-[0.3em] text-[#F5E6CC]">
          MAKE EVERY MOMENT SPECIAL
        </p>

        <h1 className="text-4xl font-bold text-white md:text-6xl">
          Your Moments, Our Passion,
          <span className="block text-[#D9A441]">Perfectly Planned.</span>
        </h1>

        <p className="mt-5 max-w-xl text-white/90">
          From beautiful weddings to unforgettable birthdays, we bring your
          dream celebrations to life.
        </p>

        <button className="mt-8 rounded-xl bg-[#722F52] px-7 py-3 font-semibold text-white transition hover:bg-[#5B2441]">
          Plan Your Event
        </button>
      </div>
    </div>
  );
};

export default Banner;
