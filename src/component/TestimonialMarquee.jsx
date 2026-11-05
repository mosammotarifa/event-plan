"use client";
import React from "react";
import Marquee from "react-fast-marquee";
import TestimonialCard from "./TestimonialCard";
const TestimonialMarquee = ({ testimonials }) => {
  return (
    <div className="flex flex-col gap-5">
      {/* First Row - Left Direction */}
      <Marquee direction="left" speed={35} pauseOnHover={true} gradient={false}>
        {testimonials.map((review) => (
          <TestimonialCard key={review._id} review={review} />
        ))}
      </Marquee>

      {/* Second Row - Right Direction */}
      <Marquee
        direction="right"
        speed={35}
        pauseOnHover={true}
        gradient={false}
      >
        {testimonials.map((review) => (
          <TestimonialCard key={review._id} review={review} />
        ))}
      </Marquee>
    </div>
  );
};

export default TestimonialMarquee;
