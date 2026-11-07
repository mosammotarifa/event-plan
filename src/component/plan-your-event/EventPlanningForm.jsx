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
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { createEventRequest } from "@/lib/data";

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

const initialFormData = {
  fullName: "",
  email: "",
  phone: "",
  eventType: "",
  services: [],
  eventDate: "",
  guestCount: "",
  budget: "",
  location: "",
  message: "",
};

const EventPlanningForm = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const toggleService = (service) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((item) => item !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.services.length === 0) {
      alert("Please select at least one service.");
      return;
    }

    const result = await createEventRequest(formData);

    console.log(result);

    setIsSubmitted(true);
  };
  const inputStyle =
    "w-full rounded-xl border border-[#E9DDE3] bg-white py-3.5 pl-11 pr-4 text-sm text-[#29252B] outline-none transition placeholder:text-gray-400 focus:border-[#722F52] focus:ring-2 focus:ring-[#722F52]/10";

  const iconStyle = "absolute left-4 top-1/2 -translate-y-1/2 text-[#722F52]";

  return (
    <section
      id="event-planning"
      className="bg-white px-4 py-16 md:px-8 md:py-24"
    >
      <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        {/* LEFT SIDE */}
        <div className="lg:sticky lg:top-28">
          <div className="mb-5 flex items-center gap-2 text-sm font-semibold tracking-[0.2em] text-[#722F52]">
            <Sparkles size={17} />
            START YOUR JOURNEY
          </div>

          <h2 className="max-w-lg text-4xl font-semibold leading-tight text-[#29252B] md:text-5xl">
            Tell Us About Your
            <span className="text-[#722F52]"> Dream Event.</span>
          </h2>

          <p className="mt-6 max-w-md text-base leading-8 text-gray-500">
            Every unforgettable celebration begins with an idea. Share your
            vision with us, and let BLISS HAUS turn your special moments into
            beautiful memories.
          </p>

          <div className="relative mt-10 overflow-hidden rounded-3xl bg-[#722F52] p-8 text-white">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full border-[25px] border-white/10" />

            <Sparkles size={28} className="mb-5 text-[#F4DCE7]" />

            <h3 className="text-2xl font-semibold">
              Your Story. Our Creativity.
            </h3>

            <p className="mt-3 text-sm leading-7 text-white/80">
              From the smallest details to the grandest celebrations, we're here
              to make your dream event happen.
            </p>

            <div className="mt-7 flex items-center gap-2 text-sm font-medium text-[#F4DCE7]">
              <CheckCircle2 size={17} />
              Let's make it unforgettable
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - FORM */}
        <div className="rounded-3xl border border-[#E9DDE3] bg-[#FAF8F6] p-5 shadow-[0_15px_50px_rgba(114,47,82,0.07)] sm:p-8 md:p-10">
          <div className="mb-9">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#722F52]">
              BLISS HAUS
            </p>

            <h3 className="mt-2 text-2xl font-semibold text-[#29252B] md:text-3xl">
              Event Planning Form
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Tell us a little about your celebration. We'll take care of the
              rest.
            </p>
          </div>

          {isSubmitted ? (
            <div className="rounded-2xl border border-[#E9DDE3] bg-white px-6 py-12 text-center">
              <CheckCircle2 size={48} className="mx-auto text-[#722F52]" />

              <h3 className="mt-5 text-2xl font-semibold text-[#29252B]">
                Thank You!
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-500">
                Your event details have been collected. We'll be ready to help
                you plan something beautiful.
              </p>

              <button
                type="button"
                onClick={() => {
                  setFormData(initialFormData);
                  setIsSubmitted(false);
                }}
                className="mt-7 rounded-xl bg-[#722F52] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#5D2442]"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-7">
              {/* PERSONAL INFORMATION */}
              <div>
                <h4 className="mb-5 text-base font-semibold text-[#29252B]">
                  Your Information
                </h4>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label className="mb-2 block text-sm font-medium text-[#29252B]">
                      Full Name *
                    </label>

                    <div className="relative">
                      <User size={18} className={iconStyle} />
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className={inputStyle}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#29252B]">
                      Email Address *
                    </label>

                    <div className="relative">
                      <Mail size={18} className={iconStyle} />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="example@email.com"
                        className={inputStyle}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#29252B]">
                      Phone Number *
                    </label>

                    <div className="relative">
                      <Phone size={18} className={iconStyle} />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+880 1XXXXXXXXX"
                        className={inputStyle}
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-px bg-[#E9DDE3]" />

              {/* EVENT INFORMATION */}
              <div>
                <h4 className="mb-5 text-base font-semibold text-[#29252B]">
                  Event Details
                </h4>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label className="mb-2 block text-sm font-medium text-[#29252B]">
                      Event Type *
                    </label>

                    <select
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      className={inputStyle.replace("pl-11", "pl-4")}
                      required
                    >
                      <option value="">Select your event type</option>
                      {eventTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#29252B]">
                      Expected Event Date
                    </label>

                    <div className="relative">
                      <CalendarDays size={18} className={iconStyle} />
                      <input
                        type="date"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleChange}
                        className={inputStyle}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#29252B]">
                      Expected Guests
                    </label>

                    <div className="relative">
                      <Users size={18} className={iconStyle} />
                      <input
                        type="number"
                        name="guestCount"
                        min="1"
                        value={formData.guestCount}
                        onChange={handleChange}
                        placeholder="e.g. 150"
                        className={inputStyle}
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="mb-2 block text-sm font-medium text-[#29252B]">
                      Event Location
                    </label>

                    <div className="relative">
                      <MapPin size={18} className={iconStyle} />
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="Enter your preferred event location"
                        className={inputStyle}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-px bg-[#E9DDE3]" />

              {/* SERVICES */}
              <div>
                <h4 className="text-base font-semibold text-[#29252B]">
                  What Services Do You Need?
                </h4>

                <p className="mt-1 text-sm text-gray-500">
                  Select one or more services for your event.
                </p>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {serviceOptions.map((service) => {
                    const selected = formData.services.includes(service);

                    return (
                      <label
                        key={service}
                        className={`flex cursor-pointer items-center gap-3 rounded-xl border p-4 text-sm transition ${
                          selected
                            ? "border-[#722F52] bg-[#722F52]/5 text-[#722F52]"
                            : "border-[#E9DDE3] bg-white text-[#29252B] hover:border-[#722F52]/50"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={selected}
                          onChange={() => toggleService(service)}
                          className="h-4 w-4 accent-[#722F52]"
                        />

                        <span className="font-medium">{service}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              <div className="h-px bg-[#E9DDE3]" />

              {/* BUDGET */}
              <div>
                <h4 className="mb-5 text-base font-semibold text-[#29252B]">
                  Budget & Additional Information
                </h4>

                <label className="mb-2 block text-sm font-medium text-[#29252B]">
                  Estimated Budget
                </label>

                <div className="relative">
                  <Wallet size={18} className={iconStyle} />

                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className={inputStyle}
                  >
                    <option value="">Select your estimated budget</option>

                    {budgetOptions.map((budget) => (
                      <option key={budget} value={budget}>
                        {budget}
                      </option>
                    ))}
                  </select>
                </div>

                <label className="mb-2 mt-5 block text-sm font-medium text-[#29252B]">
                  Tell Us About Your Event *
                </label>

                <div className="relative">
                  <MessageSquare
                    size={18}
                    className="absolute left-4 top-4 text-[#722F52]"
                  />

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Share your ideas, preferences, or anything you'd like us to know..."
                    className={`${inputStyle} resize-none pl-11`}
                    required
                  />
                </div>
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#722F52] px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-[#722F52]/15 transition hover:-translate-y-0.5 hover:bg-[#5D2442]"
              >
                Send Your Request
                <Send
                  size={17}
                  className="transition group-hover:translate-x-1"
                />
              </button>

              <p className="text-center text-xs leading-6 text-gray-400">
                By submitting this form, you agree to let BLISS HAUS contact you
                about your event.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default EventPlanningForm;
