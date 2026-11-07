"use client";

import React, { useState } from "react";
import { Plus, Minus, MessageCircle } from "lucide-react";
import Link from "next/link";

const FAQAccordion = ({ faqData }) => {
  const [activeId, setActiveId] = useState(1);

  const handleToggle = (id) => {
    setActiveId(activeId === id ? null : id);
  };
  return (
    <div>
      <section className="bg-[#FAF8F6] py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4">
          {/* Heading */}
          <div className="mb-10 text-center sm:mb-14">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[2px] text-[#722F52] sm:text-sm sm:tracking-[3px]">
              Got Questions?
            </p>

            <h2 className="text-2xl font-bold text-[#29252B] sm:text-3xl md:text-4xl">
              Frequently Asked Questions
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
              Everything you need to know about planning your perfect
              celebration with Bliss Haus.
            </p>
          </div>

          {/* FAQ Content */}
          <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-12">
            {/* Left Side */}
            <div>
              {/* Add your event image here */}

              <div className="mt-6 rounded-2xl bg-[#722F52] p-6 text-white sm:p-8">
                <MessageCircle size={30} />

                <h3 className="mt-4 text-xl font-semibold sm:text-2xl">
                  Still have questions?
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/80">
                  Our team is always ready to help you plan your next special
                  event.
                </p>
                <Link href={'/contact-us'}>
                  <button className="mt-6 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-[#722F52] transition hover:bg-gray-100 sm:text-base">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Side */}
            <div className="space-y-3 sm:space-y-4">
              {faqData.map((faq) => (
                <div
                  key={faq.id}
                  className={`rounded-xl border p-4 transition-all duration-300 sm:p-5 ${
                    activeId === faq.id
                      ? "border-[#722F52] bg-white shadow-md"
                      : "border-gray-200 bg-white"
                  }`}
                >
                  <button
                    onClick={() => handleToggle(faq.id)}
                    className="flex w-full items-center justify-between gap-3 text-left sm:gap-4"
                  >
                    <span className="text-sm font-semibold text-[#29252B] sm:text-base">
                      {faq.question}
                    </span>

                    {activeId === faq.id ? (
                      <Minus className="shrink-0 text-[#722F52]" />
                    ) : (
                      <Plus className="shrink-0 text-[#722F52]" />
                    )}
                  </button>

                  {activeId === faq.id && (
                    <p className="mt-4 border-t border-gray-100 pt-4 text-sm leading-7 text-gray-500">
                      {faq.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQAccordion;
