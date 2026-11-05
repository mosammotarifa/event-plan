import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CalendarCheck,
  Wallet,
  Users,
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";
import { reasonsDatas } from "@/lib/data";

const WhyChooseUs = async () => {
  const reasons = await reasonsDatas();
  return (
    <div>
      <section className="bg-[#FAF8F6] py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left Side - Image */}
            <div className="relative mx-auto w-full max-w-lg">
              <div className="relative h-[450px] overflow-hidden rounded-3xl md:h-[550px]">
                <Image
                  src={"/event-plan-whychooseus.png"}
                  alt="Beautifully organized event venue"
                  fill
                  className="object-cover transition duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Image Badge */}
              <div className="absolute -bottom-6 -right-2 rounded-2xl bg-[#722F52] p-5 text-white shadow-xl md:-right-6 md:p-7">
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={30} />
                  <div>
                    <p className="font-bold">Every Detail Matters</p>
                    <p className="text-xs text-white/80">
                      Your vision, our commitment
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="pt-5 lg:pt-0">
              <p className="mb-3 text-sm font-bold uppercase tracking-[3px] text-[#722F52]">
                Why Choose Event Plan?
              </p>

              <h2 className="text-3xl leading-tight font-bold text-[#29252B] md:text-4xl lg:text-5xl">
                More Than Planning,
                <span className="text-[#722F52]"> We Create Memories.</span>
              </h2>

              <p className="mt-5 max-w-xl leading-7 text-gray-500">
                Every celebration deserves thoughtful planning and special
                attention. We bring your ideas together with creativity, care,
                and organized execution to make every occasion meaningful.
              </p>

              {/* Reasons */}
              <div className="mt-9 grid gap-6 sm:grid-cols-2">
                {reasons.map((reason) => {
                  const Icon = reason.icon;

                  return (
                    <div key={reason.reasonId} className="group flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-[#722F52] shadow-sm transition duration-300 group-hover:bg-[#722F52] group-hover:text-white">
                        <Icon size={23} />
                      </div>

                      <div>
                        <h3 className="mb-2 font-bold text-[#29252B] transition group-hover:text-[#722F52]">
                          {reason.title}
                        </h3>

                        <p className="text-sm leading-6 text-gray-500">
                          {reason.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* CTA */}
              <Link
                href="/contact"
                className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#722F52] px-7 py-3.5 font-semibold text-white transition duration-300 hover:bg-[#542039] hover:shadow-lg"
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
