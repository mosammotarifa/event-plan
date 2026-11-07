"use client";

import { useState } from "react";
import { addTestimonial } from "@/lib/data";

const TestimonialForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    clientName: "",
    eventType: "",
    rating: 5,
    review: "",
    clientImage: "",
    eventDate: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await addTestimonial(formData);

      alert("Thank you for sharing your experience!");

      onClose();
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-2xl border border-[#E9DDE3] bg-white p-5 shadow-sm sm:p-8">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-[#29252B]">
          Share Your Experience
        </h3>
        <p className="mt-2 text-sm text-gray-500">
          Tell us about your special moments with BLISS HAUS.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Client Name */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-[#29252B]">
            Your Name
          </label>
          <input
            type="text"
            name="clientName"
            value={formData.clientName}
            onChange={handleChange}
            placeholder="Enter your name"
            required
            className="w-full rounded-xl border border-[#E9DDE3] px-4 py-3 outline-none focus:border-[#722F52]"
          />
        </div>

        {/* Event Type */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-[#29252B]">
            Event Type
          </label>
          <select
            name="eventType"
            value={formData.eventType}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-[#E9DDE3] bg-white px-4 py-3 outline-none focus:border-[#722F52]"
          >
            <option value="">Select your event</option>
            <option value="Wedding">Wedding</option>
            <option value="Engagement">Engagement</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
            <option value="Corporate Event">Corporate Event</option>
            <option value="Private Party">Private Party</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Rating */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-[#29252B]">
            Your Rating
          </label>
          <select
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            className="w-full rounded-xl border border-[#E9DDE3] bg-white px-4 py-3 outline-none focus:border-[#722F52]"
          >
            <option value={5}>★★★★★ - Excellent</option>
            <option value={4}>★★★★ - Very Good</option>
            <option value={3}>★★★ - Good</option>
            <option value={2}>★★ - Fair</option>
            <option value={1}>★ - Poor</option>
          </select>
        </div>

        {/* Event Date */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-[#29252B]">
            Event Date
          </label>
          <input
            type="date"
            name="eventDate"
            value={formData.eventDate}
            onChange={handleChange}
            className="w-full rounded-xl border border-[#E9DDE3] px-4 py-3 outline-none focus:border-[#722F52]"
          />
        </div>

        {/* Review */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-[#29252B]">
            Your Experience
          </label>
          <textarea
            name="review"
            value={formData.review}
            onChange={handleChange}
            placeholder="Share your experience with us..."
            rows={5}
            required
            className="w-full resize-none rounded-xl border border-[#E9DDE3] px-4 py-3 outline-none focus:border-[#722F52]"
          />
        </div>

        {error && <p className="text-sm text-red-500">{error}</p>}

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-[#722F52] px-6 py-3 font-semibold text-white transition hover:bg-[#59233F] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Submitting..." : "Submit Your Feedback"}
        </button>
      </form>
    </div>
  );
};

export default TestimonialForm;
