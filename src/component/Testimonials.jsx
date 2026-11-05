import React from "react";
import { testimonialsDatas } from "@/lib/data";
import TestimonialMarquee from "./TestimonialMarquee";
import Link from "next/link";
import { ArrowUpRight, MessageCircleHeart } from "lucide-react";

const Testimonials = async () => {
  const testimonials = await testimonialsDatas();

  return (
    <section className="overflow-hidden bg-[#FAF8F6] py-20">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="text-sm font-semibold tracking-[0.25em] text-[#722F52]">
            KIND WORDS
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[#29252B] md:text-4xl">
            Stories From Our Happy Clients
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            Every celebration leaves behind a beautiful memory. Here are some
            words from the people who trusted us to make their special moments
            unforgettable.
          </p>
        </div>

        {/* Testimonial Marquee */}
        {testimonials?.length > 0 ? (
          <TestimonialMarquee testimonials={testimonials} />
        ) : (
          <p className="py-10 text-center text-gray-500">
            No reviews available yet.
          </p>
        )}

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <p className="mb-5 text-lg font-semibold text-[#29252B]">
            Have we made your special day memorable?
          </p>

          <Link
            href="/feedback"
            className="inline-flex items-center gap-2 rounded-full bg-[#722F52] px-7 py-3 font-semibold text-white transition hover:bg-[#59233F]"
          >
            <MessageCircleHeart size={19} />
            Share Your Experience
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
