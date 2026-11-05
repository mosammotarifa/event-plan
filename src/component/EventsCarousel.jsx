"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  CalendarDays,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const EventsCarousel = ({ events }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -350 : 350,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-[#FAF8F6] py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="mb-8 flex flex-col justify-between gap-5 sm:mb-10 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[2px] text-[#722F52] sm:text-sm sm:tracking-[3px]">
              Our Portfolio
            </p>

            <h2 className="text-2xl font-bold text-[#29252B] sm:text-3xl md:text-4xl">
              Events We've <span className="text-[#722F52]">Created</span>
            </h2>

            <p className="mt-3 text-sm text-gray-500 sm:text-base">
              Explore our successfully completed events.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-3">
            <button
              onClick={() => scroll("left")}
              aria-label="Previous events"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#722F52] text-[#722F52] transition hover:bg-[#722F52] hover:text-white sm:h-11 sm:w-11"
            >
              <ChevronLeft size={22} />
            </button>

            <button
              onClick={() => scroll("right")}
              aria-label="Next events"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#722F52] text-white transition hover:bg-[#542039] sm:h-11 sm:w-11"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-5 scrollbar-hide sm:gap-6"
        >
          {events.map((event) => (
            <div
              key={event.eventId}
              className="w-[90%] flex-none snap-start overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl sm:w-[48%] lg:w-[calc((100%-3rem)/3)]"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden sm:h-56 md:h-60">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  unoptimized
                  className="object-cover transition duration-500 hover:scale-110"
                />

                <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-2 text-[10px] font-semibold text-[#722F52] sm:left-4 sm:top-4 sm:px-4 sm:text-xs">
                  {event.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5 md:p-6">
                <h3 className="mb-4 text-lg font-bold text-[#29252B] sm:text-xl">
                  {event.title}
                </h3>

                <div className="mb-3 flex items-center gap-2 text-xs text-gray-500 sm:text-sm">
                  <MapPin size={16} className="shrink-0 text-[#722F52]" />
                  {event.location}
                </div>

                <div className="mb-4 flex items-center gap-2 text-xs text-gray-500 sm:text-sm">
                  <CalendarDays size={16} className="shrink-0 text-[#722F52]" />
                  {event.eventDate}
                </div>

                <p className="mb-5 line-clamp-2 text-sm leading-6 text-gray-500">
                  {event.description}
                </p>

                <Link
                  href={`/events/${event.eventId}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#722F52] hover:gap-3 sm:text-base"
                >
                  View Details
                  <ArrowUpRight size={18} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsCarousel;
