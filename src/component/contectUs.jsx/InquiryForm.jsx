"use client";

import { useState } from "react";
import {
  User,
  Mail,
  Phone,
  CalendarDays,
  Users,
  MapPin,
  Wallet,
  MessageSquare,
  Send,
} from "lucide-react";

const eventTypes = [
  "Wedding",
  "Engagement",
  "Birthday",
  "Anniversary",
  "Corporate Event",
  "Private Party",
  "Other",
];

const serviceOptions = [
  "Wedding Planning",
  "Venue Selection",
  "Wedding Decoration",
  "Catering Management",
  "Guest Management",
];

const budgetOptions = [
  "Below ৳50,000",
  "৳50,000 - ৳1,00,000",
  "৳1,00,000 - ৳3,00,000",
  "৳3,00,000 - ৳5,00,000",
  "Above ৳5,00,000",
  "Not Decided Yet",
];

export default function InquiryForm() {
  const [selectedServices, setSelectedServices] = useState([]);

  const toggleService = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((item) => item !== service)
        : [...prev, service],
    );
  };

  return (
    <section className="bg-white py-20 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          {/* Left Content */}
          <div className="lg:sticky lg:top-28">
            <p className="text-sm font-semibold tracking-[0.25em] text-[#722F52]">
              START YOUR JOURNEY
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-[#29252B] md:text-5xl">
              Tell Us About Your
              <span className="text-[#722F52]"> Dream Event.</span>
            </h2>

            <p className="mt-6 leading-8 text-[#6B646A]">
              Every beautiful celebration starts with an idea. Tell us what you
              have in mind, and our team will help turn your vision into an
              unforgettable experience.
            </p>

            <div className="mt-10 rounded-2xl bg-[#722F52] p-8 text-white">
              <p className="text-sm tracking-widest text-white/70">
                LET'S CREATE SOMETHING SPECIAL
              </p>

              <h3 className="mt-4 text-2xl font-semibold">
                Your Story. Our Creativity.
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/80">
                From the first idea to the final detail, we're here to make your
                celebration meaningful.
              </p>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="rounded-3xl border border-[#722F52]/10 bg-[#FAF8F6] p-6 shadow-sm md:p-10">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-[#29252B]">
                Event Inquiry Form
              </h3>
              <p className="mt-2 text-sm text-[#777078]">
                Please fill in the details below.
              </p>
            </div>

            <form className="space-y-6">
              {/* Name and Email */}
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#29252B]">
                    Full Name *
                  </label>
                  <div className="flex items-center rounded-xl border border-[#722F52]/15 bg-white px-4">
                    <User size={18} className="text-[#722F52]" />
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Your full name"
                      required
                      className="w-full bg-transparent px-3 py-4 text-sm outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#29252B]">
                    Email Address *
                  </label>
                  <div className="flex items-center rounded-xl border border-[#722F52]/15 bg-white px-4">
                    <Mail size={18} className="text-[#722F52]" />
                    <input
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      required
                      className="w-full bg-transparent px-3 py-4 text-sm outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Phone and Event Type */}
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#29252B]">
                    Phone Number *
                  </label>
                  <div className="flex items-center rounded-xl border border-[#722F52]/15 bg-white px-4">
                    <Phone size={18} className="text-[#722F52]" />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+880 1XXXXXXXXX"
                      required
                      className="w-full bg-transparent px-3 py-4 text-sm outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#29252B]">
                    Event Type *
                  </label>
                  <select
                    name="eventType"
                    required
                    defaultValue=""
                    className="w-full rounded-xl border border-[#722F52]/15 bg-white px-4 py-4 text-sm text-[#6B646A] outline-none focus:border-[#722F52]"
                  >
                    <option value="" disabled>
                      Select event type
                    </option>
                    {eventTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Preferred Services */}
              <div>
                <label className="mb-3 block text-sm font-semibold text-[#29252B]">
                  Preferred Services *
                </label>

                <div className="grid gap-3 sm:grid-cols-2">
                  {serviceOptions.map((service) => (
                    <label
                      key={service}
                      className={`flex cursor-pointer items-center gap-3 rounded-xl border p-4 text-sm transition ${
                        selectedServices.includes(service)
                          ? "border-[#722F52] bg-[#722F52]/5 text-[#722F52]"
                          : "border-[#722F52]/15 bg-white text-[#6B646A]"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={selectedServices.includes(service)}
                        onChange={() => toggleService(service)}
                        className="accent-[#722F52]"
                      />
                      {service}
                    </label>
                  ))}
                </div>
              </div>

              {/* Event Date and Guests */}
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#29252B]">
                    Expected Event Date
                  </label>
                  <div className="flex items-center rounded-xl border border-[#722F52]/15 bg-white px-4">
                    <CalendarDays size={18} className="text-[#722F52]" />
                    <input
                      type="date"
                      name="eventDate"
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full bg-transparent px-3 py-4 text-sm outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#29252B]">
                    Expected Guests
                  </label>
                  <div className="flex items-center rounded-xl border border-[#722F52]/15 bg-white px-4">
                    <Users size={18} className="text-[#722F52]" />
                    <input
                      type="number"
                      name="expectedGuests"
                      min="1"
                      placeholder="e.g. 200"
                      className="w-full bg-transparent px-3 py-4 text-sm outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Budget */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#29252B]">
                  Estimated Budget
                </label>
                <div className="flex items-center rounded-xl border border-[#722F52]/15 bg-white px-4">
                  <Wallet size={18} className="text-[#722F52]" />
                  <select
                    name="budget"
                    defaultValue=""
                    className="w-full bg-transparent px-3 py-4 text-sm text-[#6B646A] outline-none"
                  >
                    <option value="" disabled>
                      Select your estimated budget
                    </option>
                    {budgetOptions.map((budget) => (
                      <option key={budget} value={budget}>
                        {budget}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Location */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#29252B]">
                  Event Location
                </label>
                <div className="flex items-center rounded-xl border border-[#722F52]/15 bg-white px-4">
                  <MapPin size={18} className="text-[#722F52]" />
                  <input
                    type="text"
                    name="eventLocation"
                    placeholder="Where would you like to host your event?"
                    className="w-full bg-transparent px-3 py-4 text-sm outline-none"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#29252B]">
                  Tell Us About Your Event *
                </label>
                <div className="flex items-start rounded-xl border border-[#722F52]/15 bg-white px-4">
                  <MessageSquare
                    size={18}
                    className="mt-4 shrink-0 text-[#722F52]"
                  />
                  <textarea
                    name="message"
                    rows="5"
                    required
                    placeholder="Share your ideas, preferences and special requirements..."
                    className="w-full resize-none bg-transparent px-3 py-4 text-sm outline-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#722F52] px-6 py-4 font-semibold text-white transition hover:bg-[#59233F]"
              >
                Send Your Inquiry
                <Send size={18} />
              </button>

              <p className="text-center text-xs text-[#8A8289]">
                Your information will only be used to discuss your event
                inquiry.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
