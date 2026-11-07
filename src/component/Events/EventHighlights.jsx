import React from "react";
import { CheckCircle2 } from "lucide-react";

const EventHighlights = ({ highlights }) => {
  if (!highlights?.length) return null;

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">

        <h2 className="mb-8 text-3xl font-bold text-[#29252B]">
          Event <span className="text-[#722F52]">Highlights</span>
        </h2>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 rounded-xl bg-[#FAF8F6] p-5"
            >
              <CheckCircle2
                className="shrink-0 text-[#722F52]"
                size={22}
              />

              <p className="text-sm font-medium text-[#29252B]">
                {item}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default EventHighlights;