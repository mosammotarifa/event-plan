"use client";

import { useState } from "react";
import {
  Video,
  Building2,
  Phone,
  CalendarDays,
  Clock,
  User,
  Mail,
  Users,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const meetingTypes = [
  {
    id: "online",
    title: "Online Meeting",
    description: "Meet us from anywhere",
    icon: Video,
  },
  {
    id: "in-person",
    title: "In-Person Meeting",
    description: "Visit our office",
    icon: Building2,
  },
  {
    id: "phone",
    title: "Phone Call",
    description: "Talk directly with us",
    icon: Phone,
  },
];

const timeSlots = [
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
];

const eventTypes = [
  "Wedding",
  "Engagement",
  "Birthday",
  "Anniversary",
  "Corporate Event",
  "Private Party",
  "Other",
];

const services = [
  "Wedding Planning",
  "Venue Selection",
  "Wedding Decoration",
  "Catering Management",
  "Guest Management",
];

export default function ConsultationBooking() {
  const [meetingType, setMeetingType] = useState("online");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [selectedServices, setSelectedServices] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    eventType: "",
    guests: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const toggleService = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((item) => item !== service)
        : [...prev, service],
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!meetingType || !date || !time) {
      alert("Please select a meeting type, date and time.");
      return;
    }

    if (selectedServices.length === 0) {
      alert("Please select at least one preferred service.");
      return;
    }

    const bookingData = {
      ...formData,
      meetingType,
      date,
      time,
      preferredServices: selectedServices,
    };

    try {
      setIsSubmitting(true);

      const response = await fetch("http://localhost:5000/meetings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Booking failed");
      }

      alert("Your consultation request has been submitted successfully!");

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        eventType: "",
        guests: "",
        message: "",
      });

      setMeetingType("online");
      setDate("");
      setTime("");
      setSelectedServices([]);
    } catch (error) {
      console.error("Consultation Error:", error);
      alert(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="book-consultation" className="bg-[#FAF8F6] py-20 md:py-28">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#722F52]/10 px-5 py-2 text-sm font-semibold tracking-wider text-[#722F52]">
            <Sparkles size={16} />
            LET'S PLAN TOGETHER
          </div>

          <h2 className="text-3xl font-bold leading-tight text-[#29252B] md:text-5xl">
            Book Your Personal
            <span className="text-[#722F52]"> Consultation</span>
          </h2>

          <p className="mt-5 leading-8 text-[#777078]">
            Every unforgettable event starts with a conversation. Choose your
            preferred meeting time and let's discuss how we can bring your
            vision to life.
          </p>
        </div>

        {/* Booking Layout */}
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_0.75fr]">
          {/* Booking Form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-[#722F52]/10 bg-white p-6 shadow-sm md:p-10"
          >
            {/* Meeting Type */}
            <div className="mb-10">
              <h3 className="text-xl font-bold text-[#29252B]">
                01. Choose Meeting Type
              </h3>

              <p className="mt-2 text-sm text-[#777078]">
                How would you like to meet our team?
              </p>

              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                {meetingTypes.map((item) => {
                  const Icon = item.icon;
                  const active = meetingType === item.id;

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setMeetingType(item.id)}
                      className={`rounded-2xl border p-5 text-left transition-all ${
                        active
                          ? "border-[#722F52] bg-[#722F52]/5 shadow-sm"
                          : "border-[#722F52]/15 hover:border-[#722F52]/50"
                      }`}
                    >
                      <Icon
                        size={25}
                        className={active ? "text-[#722F52]" : "text-[#9A9097]"}
                      />

                      <h4 className="mt-4 text-sm font-bold text-[#29252B]">
                        {item.title}
                      </h4>

                      <p className="mt-1 text-xs text-[#777078]">
                        {item.description}
                      </p>

                      {active && (
                        <CheckCircle2
                          size={18}
                          className="mt-3 text-[#722F52]"
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Date Selection */}
            <div className="mb-10">
              <h3 className="text-xl font-bold text-[#29252B]">
                02. Select Your Date
              </h3>

              <p className="mt-2 text-sm text-[#777078]">
                Choose your preferred consultation date.
              </p>

              <div className="mt-5 flex items-center gap-3 rounded-xl border border-[#722F52]/15 px-4">
                <CalendarDays size={20} className="text-[#722F52]" />

                <input
                  type="date"
                  value={date}
                  min={new Date().toLocaleDateString("en-CA", {
                    timeZone: "Asia/Dhaka",
                  })}
                  onChange={(e) => {
                    setDate(e.target.value);
                    setTime("");
                  }}
                  required
                  className="w-full bg-transparent py-4 text-sm text-[#29252B] outline-none"
                />
              </div>
            </div>

            {/* Time Slots */}
            <div className="mb-10">
              <h3 className="text-xl font-bold text-[#29252B]">
                03. Choose Your Time
              </h3>

              <p className="mt-2 text-sm text-[#777078]">
                Select a convenient consultation time.
              </p>

              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {timeSlots.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    disabled={!date}
                    onClick={() => setTime(slot)}
                    className={`rounded-xl border px-3 py-4 text-sm font-semibold transition ${
                      time === slot
                        ? "border-[#722F52] bg-[#722F52] text-white"
                        : "border-[#722F52]/15 text-[#6B646A] hover:border-[#722F52]"
                    } disabled:cursor-not-allowed disabled:opacity-40`}
                  >
                    <Clock size={15} className="mr-2 inline" />
                    {slot}
                  </button>
                ))}
              </div>

              {!date && (
                <p className="mt-3 text-xs text-[#9A9097]">
                  Please select a date before choosing a time.
                </p>
              )}
            </div>

            {/* Personal Information */}
            <div className="mb-10">
              <h3 className="text-xl font-bold text-[#29252B]">
                04. Your Information
              </h3>

              <p className="mt-2 text-sm text-[#777078]">
                Tell us how we can contact you.
              </p>

              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#29252B]">
                    Full Name *
                  </label>

                  <div className="flex items-center rounded-xl border border-[#722F52]/15 px-4">
                    <User size={18} className="text-[#722F52]" />

                    <input
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="w-full bg-transparent px-3 py-4 text-sm outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#29252B]">
                    Email Address *
                  </label>

                  <div className="flex items-center rounded-xl border border-[#722F52]/15 px-4">
                    <Mail size={18} className="text-[#722F52]" />

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                      className="w-full bg-transparent px-3 py-4 text-sm outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#29252B]">
                    Phone Number *
                  </label>

                  <div className="flex items-center rounded-xl border border-[#722F52]/15 px-4">
                    <Phone size={18} className="text-[#722F52]" />

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
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
                    value={formData.eventType}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-[#722F52]/15 bg-white px-4 py-4 text-sm outline-none"
                  >
                    <option value="">Select event type</option>
                    {eventTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Preferred Services */}
            <div className="mb-10">
              <h3 className="mb-2 text-xl font-bold text-[#29252B]">
                05. Preferred Services
              </h3>

              <p className="mb-5 text-sm text-[#777078]">
                Select the services you want to discuss.
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {services.map((service) => (
                  <label
                    key={service}
                    className={`flex cursor-pointer items-center gap-3 rounded-xl border p-4 text-sm transition ${
                      selectedServices.includes(service)
                        ? "border-[#722F52] bg-[#722F52]/5 text-[#722F52]"
                        : "border-[#722F52]/15 text-[#6B646A]"
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

            {/* Guest Count and Message */}
            <div className="mb-10 grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#29252B]">
                  Expected Guests
                </label>

                <div className="flex items-center rounded-xl border border-[#722F52]/15 px-4">
                  <Users size={18} className="text-[#722F52]" />

                  <input
                    type="number"
                    name="guests"
                    min="1"
                    value={formData.guests}
                    onChange={handleChange}
                    placeholder="e.g. 200"
                    className="w-full bg-transparent px-3 py-4 text-sm outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#29252B]">
                  Additional Message
                </label>

                <input
                  type="text"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Anything else?"
                  className="w-full rounded-xl border border-[#722F52]/15 px-4 py-4 text-sm outline-none"
                />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#722F52] px-6 py-5 font-semibold text-white transition hover:bg-[#59233F] disabled:opacity-60"
            >
              {isSubmitting ? "Submitting..." : "Request Consultation"}
              <ArrowRight size={19} />
            </button>

            <p className="mt-4 text-center text-xs text-[#8A8289]">
              Your request will be reviewed and confirmed by our team.
            </p>
          </form>

          {/* Right Side Information */}
          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            {/* Booking Summary */}
            <div className="rounded-3xl bg-[#722F52] p-8 text-white">
              <p className="text-sm font-semibold tracking-[0.2em] text-white/70">
                YOUR CONSULTATION
              </p>

              <h3 className="mt-4 text-2xl font-bold">
                Let's Make It Special.
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/75">
                A little conversation can be the beginning of something
                beautiful.
              </p>

              <div className="mt-8 space-y-5 border-t border-white/20 pt-6">
                <div className="flex items-center gap-3">
                  <Video size={19} />
                  <div>
                    <p className="text-xs text-white/60">Meeting Type</p>
                    <p className="mt-1 font-medium">
                      {
                        meetingTypes.find((item) => item.id === meetingType)
                          ?.title
                      }
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <CalendarDays size={19} />
                  <div>
                    <p className="text-xs text-white/60">Preferred Date</p>
                    <p className="mt-1 font-medium">
                      {date || "Not selected yet"}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock size={19} />
                  <div>
                    <p className="text-xs text-white/60">Preferred Time</p>
                    <p className="mt-1 font-medium">
                      {time || "Not selected yet"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-xl bg-white/10 p-4">
                <p className="text-sm font-semibold">Booking Status</p>
                <p className="mt-1 text-sm text-white/70">
                  Pending confirmation from our team.
                </p>
              </div>
            </div>

            {/* Extra Information */}
            <div className="rounded-3xl border border-[#722F52]/10 bg-white p-8">
              <h3 className="text-xl font-bold text-[#29252B]">
                Why Book a Consultation?
              </h3>

              <div className="mt-6 space-y-5">
                {[
                  "Personalized event planning advice",
                  "Discuss your budget and preferences",
                  "Explore creative event ideas",
                  "Get answers from our planning team",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      size={19}
                      className="mt-0.5 shrink-0 text-[#722F52]"
                    />
                    <p className="text-sm leading-6 text-[#6B646A]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
