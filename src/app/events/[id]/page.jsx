import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, CalendarDays, ArrowLeft } from "lucide-react";
import { eventsDatas } from "@/lib/data";
import EventHighlights from "@/component/Events/EventHighlights";
import EventGallery from "@/component/Events/EventGallery";
import PlanningProcess from "@/component/Events/PlanningProcess";

const EventDetailsPage = async ({ params }) => {
  const { id } = await params;

  const events = await eventsDatas();

  const event = events.find((item) => item.eventId === id);

  if (!event) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#FAF8F6]">
      {/* Event Hero */}
      <section className="relative h-[350px] sm:h-[450px] md:h-[550px]">
        <Image
          src={event.image}
          alt={event.title}
          fill
          priority
          unoptimized
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="container relative mx-auto flex h-full flex-col justify-end px-4 pb-12">
          <span className="mb-4 w-fit rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#722F52]">
            {event.category}
          </span>

          <h1 className="max-w-3xl text-3xl font-bold text-white sm:text-4xl md:text-6xl">
            {event.title}
          </h1>

          <div className="mt-5 flex flex-wrap gap-5 text-sm text-white sm:text-base">
            <span className="flex items-center gap-2">
              <MapPin size={18} />
              {event.location}
            </span>

            <span className="flex items-center gap-2">
              <CalendarDays size={18} />
              {event.eventDate}
            </span>
          </div>
        </div>
      </section>

      {/* Event Information */}
      <section className="container mx-auto px-4 py-16">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 font-semibold text-[#722F52] hover:gap-3"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>

        <div className="mx-auto max-w-4xl rounded-2xl bg-white p-6 shadow-sm sm:p-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[3px] text-[#722F52]">
            Event Overview
          </p>

          <h2 className="mb-5 text-2xl font-bold text-[#29252B] sm:text-3xl">
            About This Event
          </h2>

          <p className="text-base leading-8 text-gray-600">
            {event.description}
          </p>
        </div>
      </section>

      {/* Event Highlights */}
      <EventHighlights highlights={event.highlights} />

      {/* Event Gallery */}
      <EventGallery gallery={event.gallery} />

      {/* Planning Process */}
      <PlanningProcess planningProcess={event.planningProcess} />
    </main>
  );
};

export default EventDetailsPage;
