import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";
import { servicesDatasId } from "@/lib/data";


const ServiceDetailsPage = async ({ params }) => {
  const { servicesId } = await params;

  const service = await servicesDatasId(servicesId);

  // const service = servicesData.find((item) => item.serviceId === servicesId);

  if (!service || service.status !== "active") {
    notFound();
  }

  return (
    <main className="bg-[#FAF8F6]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#29252B]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: `url(${service.image})`,
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/20" />

        <div className="container relative mx-auto px-4 py-24 md:py-32">
          <Link
            href="/services"
            className="mb-10 inline-flex items-center gap-2 text-sm text-white/80 transition hover:text-white"
          >
            <ArrowLeft size={17} />
            Back to Services
          </Link>

          <div className="max-w-2xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[3px] text-white/80">
              {service.category}
            </p>

            <h1 className="text-4xl font-semibold leading-tight text-white md:text-6xl">
              {service.title}
            </h1>

            <p className="mt-6 text-base leading-8 text-white/80 md:text-lg">
              {service.description}
            </p>

            <Link
              href={`/booking?serviceId=${service.serviceId}`}
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#722F52] px-8 py-4 font-semibold text-white transition hover:bg-[#59213F]"
            >
              Book This Service
              <ArrowUpRight size={19} />
            </Link>
          </div>
        </div>
      </section>

      {/* About This Service */}
      <section className="bg-white py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[3px] text-[#722F52]">
              Discover Our Service
            </p>

            <h2 className="text-3xl font-semibold text-[#29252B] md:text-5xl">
              Making Your Vision a Reality.
            </h2>

            <p className="mt-7 text-base leading-8 text-gray-600">
              {service.longDescription || service.description}
            </p>
          </div>
        </div>
      </section>

      {/* What's Included */}
      {service.features?.length > 0 && (
        <section className="py-20 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[3px] text-[#722F52]">
                What's Included
              </p>

              <h2 className="text-3xl font-semibold text-[#29252B] md:text-5xl">
                Everything You Need for a
                <span className="text-[#722F52]"> Beautiful Event.</span>
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {service.features.map((feature, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-[#722F52]/10 bg-white p-7 transition hover:-translate-y-2 hover:shadow-lg"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#722F52]/10">
                    <CheckCircle2 size={24} className="text-[#722F52]" />
                  </div>

                  <h3 className="text-lg font-semibold text-[#29252B]">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Our Process */}
      {service.process?.length > 0 && (
        <section className="bg-white py-20 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-14 text-center">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[3px] text-[#722F52]">
                How We Do It
              </p>

              <h2 className="text-3xl font-semibold text-[#29252B] md:text-5xl">
                Our Planning Process
              </h2>

              <p className="mx-auto mt-5 max-w-xl leading-8 text-gray-600">
                From the first conversation to the final celebration, we make
                every step thoughtful and organized.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {service.process.map((item, index) => (
                <div key={index} className="relative">
                  <span className="text-5xl font-bold text-[#722F52]/15">
                    {String(item.step).padStart(2, "0")}
                  </span>

                  <div className="mt-5">
                    <h3 className="text-lg font-semibold text-[#29252B]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="bg-[#722F52] py-20">
        <div className="container mx-auto px-4 text-center">
          <Sparkles className="mx-auto mb-6 text-white" size={32} />

          <h2 className="mx-auto max-w-2xl text-3xl font-semibold text-white md:text-5xl">
            Let's Make Your Next Celebration Extraordinary.
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-8 text-white/80">
            Tell us your vision. We'll help you turn it into a beautiful
            experience.
          </p>

          <Link
            href={`/booking?serviceId=${service.serviceId}`}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-[#722F52] transition hover:bg-[#FAF8F6]"
          >
            Start Planning
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default ServiceDetailsPage;
