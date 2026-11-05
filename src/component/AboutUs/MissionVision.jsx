import React from "react";
import { HeartHandshake, Eye, Sparkles } from "lucide-react";

const MissionVision = () => {
  return (
    <section className="bg-[#FAF8F6] py-20 md:py-28">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-4 text-sm font-semibold tracking-[0.25em] text-[#722F52]">
            WHAT DRIVES US
          </p>

          <h2 className="text-3xl font-semibold text-[#29252B] md:text-5xl">
            Our Purpose, <span className="text-[#722F52]">Our Promise.</span>
          </h2>

          <p className="mt-5 leading-8 text-gray-600">
            Every beautiful celebration begins with a purpose. Our mission and
            vision guide everything we create at Bliss Haus.
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Mission Card */}
          <div className="group rounded-2xl border border-[#722F52]/10 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl md:p-12">
            <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#722F52]/10">
              <HeartHandshake size={32} className="text-[#722F52]" />
            </div>

            <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-[#722F52]">
              OUR MISSION
            </p>

            <h3 className="text-2xl font-semibold text-[#29252B] md:text-3xl">
              Making Every Moment Meaningful.
            </h3>

            <p className="mt-5 text-base leading-8 text-gray-600">
              Our mission is to transform our clients' ideas into beautiful
              celebrations through creative planning, personalized experiences,
              and careful attention to every detail.
            </p>

            <div className="mt-8 flex items-center gap-2 text-sm font-medium text-[#722F52]">
              <Sparkles size={17} />
              <span>Creating with Passion</span>
            </div>
          </div>

          {/* Vision Card */}
          <div className="group rounded-2xl bg-[#722F52] p-8 text-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl md:p-12">
            <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15">
              <Eye size={32} className="text-white" />
            </div>

            <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-white/70">
              OUR VISION
            </p>

            <h3 className="text-2xl font-semibold md:text-3xl">
              Becoming Part of Every Beautiful Story.
            </h3>

            <p className="mt-5 text-base leading-8 text-white/80">
              Our vision is to become a trusted event-planning brand known for
              creativity, quality, and unforgettable experiences, making every
              celebration truly special.
            </p>

            <div className="mt-8 flex items-center gap-2 text-sm font-medium text-white">
              <Sparkles size={17} />
              <span>Growing with Purpose</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
