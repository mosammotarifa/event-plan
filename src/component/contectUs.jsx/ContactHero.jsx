
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Sparkles } from "lucide-react";

const ContactHero = () => {
  return (
    <section className="overflow-hidden bg-[#FAF8F6]">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* Left Content */}
          <div className="max-w-xl">

            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#722F52]/10 px-4 py-2">
              <Sparkles size={15} className="text-[#722F52]" />
              <span className="text-xs font-semibold tracking-[3px] text-[#722F52]">
                GET IN TOUCH
              </span>
            </div>

            <h1 className="text-4xl font-semibold leading-tight text-[#29252B] md:text-5xl lg:text-6xl">
              Let's Start Planning
              <span className="block font-serif italic text-[#722F52]">
                Something Beautiful.
              </span>
            </h1>

            <p className="mt-7 max-w-lg text-base leading-8 text-gray-600 md:text-lg">
              Every unforgettable celebration begins with a conversation.
              Tell us your vision, and let us bring it to life with elegance,
              creativity, and care.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-wrap items-center gap-4">

              <Link
                href="#book-consultation"
                className="group inline-flex items-center gap-3 rounded-full bg-[#722F52] px-7 py-4 text-sm font-semibold text-white transition duration-300 hover:bg-[#59213F]"
              >
                Book a Consultation
                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border border-[#722F52]/30 px-7 py-4 text-sm font-semibold text-[#722F52] transition duration-300 hover:bg-[#722F52] hover:text-white"
              >
                Explore Services
              </Link>

            </div>

            {/* Bottom Note */}
            <div className="mt-12 flex items-center gap-4 border-t border-[#722F52]/15 pt-7">
              <div className="flex -space-x-3">
                <div className="h-10 w-10 rounded-full border-2 border-[#FAF8F6] bg-[#722F52]/20" />
                <div className="h-10 w-10 rounded-full border-2 border-[#FAF8F6] bg-[#722F52]/40" />
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#FAF8F6] bg-[#722F52] text-xs font-semibold text-white">
                  BH
                </div>
              </div>

              <p className="text-sm leading-6 text-gray-600">
                Your dream event starts with
                <span className="font-semibold text-[#29252B]">
                  {" "}one conversation.
                </span>
              </p>
            </div>

          </div>

          {/* Right Image */}
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">

            {/* Decorative Background */}
            <div className="absolute -right-5 -top-5 h-full w-full rounded-[2rem] border border-[#722F52]/20" />

            <div className="relative h-[420px] overflow-hidden rounded-[2rem] md:h-[540px]">
              <Image
                src="/contact-us-hero.png"
                alt="Elegant wedding celebration planned by Bliss Haus"
                fill
                priority
                className="object-cover transition duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-4 rounded-2xl bg-white p-5 shadow-xl md:-left-8 md:p-6">
              <p className="font-serif text-2xl italic text-[#722F52]">
                Let's create magic
              </p>
              <p className="mt-1 text-xs tracking-wider text-gray-500">
                BLISS HAUS — EVENT PLANNING
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactHero;
