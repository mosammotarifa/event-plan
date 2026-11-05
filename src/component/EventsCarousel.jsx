"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, CalendarDays, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

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
    <section className="bg-[#FAF8F6] py-20">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[3px] text-[#722F52]">
              Our Portfolio
            </p>

            <h2 className="text-3xl font-bold text-[#29252B] md:text-4xl">
              Events We've <span className="text-[#722F52]">Created</span>
            </h2>

            <p className="mt-3 text-gray-500">
              Explore our successfully completed events.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-3">
            <button
              onClick={() => scroll("left")}
              aria-label="Previous events"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#722F52] text-[#722F52] transition hover:bg-[#722F52] hover:text-white"
            >
              <ChevronLeft size={22} />
            </button>

            <button
              onClick={() => scroll("right")}
              aria-label="Next events"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#722F52] text-white transition hover:bg-[#542039]"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-5 scrollbar-hide"
        >
          {events.map((event) => (
            <div
              key={event.eventId}
              className="w-[85%] flex-none snap-start overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl sm:w-[48%] lg:w-[calc((100%-3rem)/3)]"
            >
              {/* Image */}
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  unoptimized
                  className="object-cover transition duration-500 hover:scale-110"
                />

                <span className="absolute left-4 top-4 rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#722F52]">
                  {event.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="mb-4 text-xl font-bold text-[#29252B]">
                  {event.title}
                </h3>

                <div className="mb-3 flex items-center gap-2 text-sm text-gray-500">
                  <MapPin size={16} className="text-[#722F52]" />
                  {event.location}
                </div>

                <div className="mb-4 flex items-center gap-2 text-sm text-gray-500">
                  <CalendarDays size={16} className="text-[#722F52]" />
                  {event.eventDate}
                </div>

                <p className="mb-5 line-clamp-2 text-sm leading-6 text-gray-500">
                  {event.description}
                </p>

                <Link
                  href={`/events/${event.eventId}`}
                  className="inline-flex items-center gap-2 font-semibold text-[#722F52] hover:gap-3"
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