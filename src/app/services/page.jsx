import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { servicesDatas } from "@/lib/data";

const ServicesPage = async () => {
  const servicesData = await servicesDatas();

  const activeServices = servicesData.filter(
    (service) => service.status === "active",
  );

  return (
    <main className="bg-[#FAF8F6]">
      {/* Services Hero */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[3px] text-[#722F52]">
            What We Offer
          </p>

          <h1 className="mx-auto max-w-3xl text-4xl font-semibold leading-tight text-[#29252B] md:text-6xl">
            Thoughtfully Planned,
            <span className="text-[#722F52]"> Beautifully Celebrated.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-600">
            From intimate gatherings to grand celebrations, discover our event
            planning services designed to turn your vision into unforgettable
            experiences.
          </p>
        </div>
      </section>

      {/* All Services */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[2px] text-[#722F52]">
              Explore Our Services
            </p>

            <h2 className="text-3xl font-semibold text-[#29252B] md:text-4xl">
              Services We Provide
            </h2>

            <p className="mt-4 max-w-xl leading-7 text-gray-500">
              Find the perfect planning service for your next special occasion.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {activeServices.map((service) => (
              <div
                key={service.serviceId}
                className="group overflow-hidden rounded-2xl border border-gray-100 bg-[#FAF8F6] transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Service Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    unoptimized
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Service Content */}
                <div className="p-6">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#722F52]">
                    {service.category}
                  </p>

                  <h3 className="text-xl font-semibold text-[#29252B]">
                    {service.title}
                  </h3>

                  <p className="mt-3 min-h-20 text-sm leading-7 text-gray-600">
                    {service.description}
                  </p>

                  <Link
                    href={`/services/${service._id}`}
                    className="mt-5 inline-flex items-center gap-2 font-semibold text-[#722F52] transition-all hover:gap-3"
                  >
                    Explore Service
                    <ArrowUpRight size={18} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
