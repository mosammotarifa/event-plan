import { howweworkDatas } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";
import React from "react";

const Howwework = async () => {
  const steps = await howweworkDatas();
  return (
    <div>
      <section className="bg-[#FAF8F6] py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4">
          {/* Section Heading */}
          <div className="mx-auto mb-10 sm:mb-12 md:mb-16 max-w-2xl text-center">
            <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] sm:tracking-[0.25em] text-[#722F52]">
              OUR PROCESS
            </p>

            <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-[#29252B] md:text-4xl">
              How We Bring Your Vision to Life
            </h2>

            <p className="mt-4 text-sm sm:text-base leading-7 text-gray-600">
              From the first conversation to the final celebration, we're with
              you every step of the way.
            </p>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-7">
            {steps.map((step, index) => (
              <div
                key={step.step}
                className="group relative rounded-2xl border border-[#eee4e9] bg-white p-5 sm:p-6 md:p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Step Number */}
                <div className="mb-5 sm:mb-7 flex items-center justify-between">
                  <span className="text-3xl sm:text-4xl font-bold text-[#722F52]/20 transition group-hover:text-[#722F52]">
                    {step.step}
                  </span>
                </div>

                {/* Content */}
                <h3 className="mb-3 text-lg sm:text-xl font-bold text-[#29252B]">
                  {step.title}
                </h3>

                <p className="text-sm leading-7 text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 sm:mt-12 md:mt-14 text-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#722F52] px-6 sm:px-7 py-3 text-sm sm:text-base font-semibold text-white transition hover:bg-[#59233F]"
            >
              Let's Plan Your Event
              <ArrowUpRight size={19} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Howwework;
