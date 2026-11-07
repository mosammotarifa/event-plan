import React from "react";
import Image from "next/image";

const EventGallery = ({ gallery }) => {
  if (!gallery?.length) return null;

  return (
    <section className="bg-[#FAF8F6] py-16">
      <div className="container mx-auto px-4">

        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[3px] text-[#722F52]">
            Our Memories
          </p>

          <h2 className="text-3xl font-bold text-[#29252B] md:text-4xl">
            Event <span className="text-[#722F52]">Gallery</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {gallery.map((image, index) => (
            <div
              key={index}
              className="group relative h-48 overflow-hidden rounded-2xl sm:h-64 md:h-72"
            >
              <Image
                src={image}
                alt={`Event gallery ${index + 1}`}
                fill
                unoptimized
                className="object-cover transition duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default EventGallery;