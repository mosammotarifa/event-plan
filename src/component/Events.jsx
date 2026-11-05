import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, CalendarDays, ArrowUpRight } from "lucide-react";
import { eventsDatas } from "@/lib/data";
import EventsCarousel from "./EventsCarousel";

const Events = async() => {
    const events= await eventsDatas()
    const completedEvents = events.filter(
(event) => event.status === "completed"
);
    return (
//     <section className="bg-[#FAF8F6] py-20">
// <div className="container mx-auto px-4">

//     {/* Section Heading */}
//     <div className="mb-12 text-center">
//       <p className="mb-3 text-sm font-semibold uppercase tracking-[3px] text-[#722F52]">
//         Our Portfolio
//       </p>

//       <h2 className="text-3xl font-bold text-[#29252B] md:text-4xl">
//         Events We've <span className="text-[#722F52]">Created</span>
//       </h2>

//       <p className="mx-auto mt-4 max-w-xl text-gray-500">
//         Take a look at some of our successfully completed events and
//         unforgettable celebrations.
//       </p>
//     </div>

//     {/* Events Grid */}
//     <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
//       {completedEvents.map((event) => (
//         <div
//           key={event.eventId}
//           className="group overflow-hidden rounded-2xl bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
//         >
//           {/* Event Image */}
//           <div className="relative h-60 overflow-hidden">
//             <Image
//               src={event.image}
//               alt={event.title}
//               fill
//                 unoptimized
//               className="object-cover transition duration-500 group-hover:scale-110"
//             />

//             <span className="absolute left-4 top-4 rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-[#722F52]">
//               {event.category}
//             </span>
//           </div>

//           {/* Event Information */}
//           <div className="p-6">
//             <h3 className="mb-3 text-xl font-bold text-[#29252B] transition group-hover:text-[#722F52]">
//               {event.title}
//             </h3>

//             <div className="mb-3 flex flex-wrap gap-4 text-sm text-gray-500">
//               <span className="flex items-center gap-2">
//                 <MapPin size={16} className="text-[#722F52]" />
//                 {event.location}
//               </span>

//               <span className="flex items-center gap-2">
//                 <CalendarDays size={16} className="text-[#722F52]" />
//                 {event.eventDate}
//               </span>
//             </div>

//             <p className="mb-5 line-clamp-2 text-sm leading-6 text-gray-500">
//               {event.description}
//             </p>

//             <Link
//               href={`/events/${event.eventId}`}
//               className="flex items-center gap-2 font-semibold text-[#722F52] transition hover:gap-3"
//             >
//               View Details
//               <ArrowUpRight size={18} />
//             </Link>
//           </div>
//         </div>
//       ))}
//     </div>

//   </div>
// </section>
<div>
  <EventsCarousel events={completedEvents}/>
</div>
    );
};

export default Events;