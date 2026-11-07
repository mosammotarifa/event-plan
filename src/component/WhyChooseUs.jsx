import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Icon } from "lucide-react";
import { reasonsDatas } from "@/lib/data";

const WhyChooseUs = async () => {
  const reasons = await reasonsDatas();
  return (
    <div>
      <section className="bg-[#FAF8F6] py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left Side - Image */}
            <div className="relative mx-auto w-full max-w-lg">
              <div className="relative h-[350px] sm:h-[450px] md:h-[550px] overflow-hidden rounded-3xl">
                <Image
                  src={"/event-plan-whychooseus.png"}
                  alt="Beautifully organized event venue"
                  fill
                  className="object-cover transition duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Image Badge */}
              <div className="absolute -bottom-5 right-0 sm:-bottom-6 sm:-right-2 rounded-2xl bg-[#722F52] p-4 sm:p-5 md:-right-6 md:p-7 text-white shadow-xl">
                <div className="flex items-center gap-2 sm:gap-3">
                  <CheckCircle2 size={26} className="shrink-0 sm:hidden" />
                  <CheckCircle2
                    size={30}
                    className="hidden shrink-0 sm:block"
                  />
                  <div>
                    <p className="text-sm sm:text-base font-bold">
                      Every Detail Matters
                    </p>
                    <p className="text-[11px] sm:text-xs text-white/80">
                      Your vision, our commitment
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="pt-5 lg:pt-0">
              <p className="mb-3 text-xs sm:text-sm font-bold uppercase tracking-[2px] sm:tracking-[3px] text-[#722F52]">
                Why Choose Event Plan?
              </p>

              <h2 className="text-2xl sm:text-3xl leading-tight font-bold text-[#29252B] md:text-4xl lg:text-5xl">
                More Than Planning,
                <span className="text-[#722F52]"> We Create Memories.</span>
              </h2>

              <p className="mt-4 sm:mt-5 max-w-xl text-sm sm:text-base leading-7 text-gray-500">
                Every celebration deserves thoughtful planning and special
                attention. We bring your ideas together with creativity, care,
                and organized execution to make every occasion meaningful.
              </p>

              {/* Reasons */}
              <div className="mt-7 sm:mt-9 grid gap-5 sm:gap-6 sm:grid-cols-2">
                {reasons.map((reason) => {
                  // const Icon = reason.icon;

                  return (
                    <div
                      key={reason.reasonId}
                      className="group flex gap-3 sm:gap-4"
                    >
                      <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-white text-[#722F52] shadow-sm transition duration-300 group-hover:bg-[#722F52] group-hover:text-white">
                        <Icon size={23} />
                      </div>

                      <div>
                        <h3 className="mb-2 text-sm sm:text-base font-bold text-[#29252B] transition group-hover:text-[#722F52]">
                          {reason.title}
                        </h3>

                        <p className="text-xs sm:text-sm leading-6 text-gray-500">
                          {reason.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* CTA */}
              <Link
                href="/plan-your-event"
                className="mt-8 sm:mt-10 inline-flex items-center justify-center gap-2 sm:gap-3 rounded-full bg-[#722F52] px-5 sm:px-7 py-3 sm:py-3.5 text-sm sm:text-base font-semibold text-white transition duration-300 hover:bg-[#542039] hover:shadow-lg"
              >
                Let's Plan Your Event
                <ArrowUpRight size={19} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;
