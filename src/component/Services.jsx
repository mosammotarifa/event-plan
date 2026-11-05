import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { servicesDatas } from "@/lib/data";

const Services = async () => {
  const servicesData = await servicesDatas();
  return (
    <section className="bg-white py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="mb-8 sm:mb-10 md:mb-12 text-center">
          <p className="mb-3 text-xs sm:text-sm font-semibold uppercase tracking-[2px] sm:tracking-[3px] text-[#722F52]">
            What We Do
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-[#29252B] md:text-4xl">
            Our Professional <span className="text-[#722F52]">Services</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm sm:text-base text-gray-500">
            From intimate celebrations to grand occasions, we bring your ideas
            to life with creativity and professional planning.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {servicesData.slice(0, 3).map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.serviceId}
                className="group relative min-h-[300px] sm:min-h-[330px] md:min-h-[350px] overflow-hidden rounded-2xl"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${service.image})` }}
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                {/* Content */}
                <div className="relative flex min-h-[300px] sm:min-h-[330px] md:min-h-[350px] flex-col justify-end p-5 sm:p-6 md:p-7 text-white">
                  <h3 className="mb-3 text-xl sm:text-2xl font-bold">
                    {service.title}
                  </h3>

                  <p className="mb-5 sm:mb-6 text-sm leading-7 text-white/80">
                    {service.description}
                  </p>

                  <Link
                    href={`/services/${service.id}`}
                    className="inline-flex items-center gap-2 font-semibold text-white transition-all group-hover:gap-3"
                  >
                    Explore Service
                    <ArrowUpRight size={18} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Services */}
        <div className="mt-8 sm:mt-10 md:mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full bg-[#722F52] px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-semibold text-white transition hover:bg-[#542039]"
          >
            View All Services
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
