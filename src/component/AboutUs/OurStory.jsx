import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";

const OurStory = () => {
  const highlights = [
    "Creative and thoughtful planning",
    "Personalized event experiences",
    "Attention to every little detail",
  ];

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Left Side - Image */}
          <div className="relative mx-auto w-full max-w-xl">
            <div className="relative h-[400px] overflow-hidden rounded-2xl md:h-[520px]">
              <Image
                src="/about.png"
                alt="Beautiful event decoration by Bliss Haus"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-3 rounded-xl bg-[#722F52] p-6 text-white shadow-xl md:-right-7">
              <p className="text-2xl font-semibold">BLISS HAUS</p>
              <p className="mt-1 text-xs tracking-[0.2em]">EVENT PLANNING</p>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="pt-4">
            <p className="mb-5 text-sm font-semibold tracking-[0.25em] text-[#722F52]">
              OUR STORY
            </p>

            <h2 className="max-w-xl text-3xl font-semibold leading-tight text-[#29252B] md:text-4xl lg:text-5xl">
              Every Great Celebration Begins With a{" "}
              <span className="text-[#722F52]">Beautiful Story.</span>
            </h2>

            <p className="mt-6 text-base leading-8 text-gray-600">
              At Bliss Haus, we believe that every celebration tells a unique
              story. Whether it is a wedding, birthday, corporate gathering, or
              a special family occasion, every moment deserves thoughtful
              planning and a beautiful touch.
            </p>

            <p className="mt-4 text-base leading-8 text-gray-600">
              Our approach is built around understanding your ideas, bringing
              your vision to life, and creating experiences that feel personal,
              meaningful, and unforgettable.
            </p>

            {/* Highlights */}
            <div className="mt-7 space-y-4">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#722F52]/10">
                    <Check size={15} className="text-[#722F52]" />
                  </span>

                  <p className="text-sm font-medium text-[#29252B]">{item}</p>
                </div>
              ))}
            </div>

            {/* Button */}
            <Link
              href="/services"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#722F52] px-7 py-3.5 text-sm font-medium text-white transition hover:bg-[#59213F]"
            >
              Discover Our Services
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
