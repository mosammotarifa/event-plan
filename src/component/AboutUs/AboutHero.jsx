import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Heart } from "lucide-react";

const AboutHero = () => {
  return (
    <section className="bg-[#FAF8F6] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#722F52]/20 bg-white px-4 py-2">
              <Heart size={15} className="text-[#722F52]" />
              <span className="text-xs font-semibold tracking-[0.2em] text-[#722F52]">
                ABOUT BLISS HAUS
              </span>
            </div>

            <h1 className="max-w-xl text-4xl font-semibold leading-tight text-[#29252B] md:text-5xl lg:text-6xl">
              We Turn Your Moments Into
              <span className="text-[#722F52]">Lasting Memories.</span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-8 text-gray-600">
              At Bliss Haus, we believe every celebration deserves something
              extraordinary. We bring creativity, passion, and thoughtful
              planning together to make your special moments truly
              unforgettable.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#722F52] px-7 py-3.5 text-sm font-medium text-white transition hover:bg-[#59213F]"
              >
                Let's Talk
                <ArrowUpRight size={17} />
              </Link>

              <Link
                href="/events"
                className="rounded-full border border-[#722F52] px-7 py-3.5 text-sm font-medium text-[#722F52] transition hover:bg-[#722F52] hover:text-white"
              >
                Explore Our Events
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative mx-auto w-full max-w-xl">
            <div className="relative h-[380px] overflow-hidden rounded-2xl md:h-[500px]">
              <Image
                src={"/about-us.png"}
                alt="Beautifully planned wedding celebration by Bliss Haus"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* Decorative Label */}
            <div className="absolute -bottom-5 -left-3 rounded-xl bg-white px-6 py-4 shadow-lg md:-left-8">
              <p className="text-sm font-semibold text-[#722F52]">
                Every Detail Matters
              </p>
              <p className="mt-1 text-xs text-gray-500">
                Every Moment Deserves Magic
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
