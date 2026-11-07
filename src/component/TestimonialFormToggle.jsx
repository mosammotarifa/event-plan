"use client";

import { useState } from "react";
import { ArrowUpRight, MessageCircleHeart, X } from "lucide-react";

import { useRouter } from "next/navigation";
import TestimonialForm from "./TestimonialsForm";

const TestimonialFormToggle = () => {
  const router = useRouter();
  const [showForm, setShowForm] = useState(false);
  const handleClose = () => {
    setShowForm(false);
    router.refresh();
  };
  return (
    <div className="mt-10 text-center">
      <p className="mb-5 text-base font-semibold text-[#29252B] sm:text-lg">
        Have we made your special day memorable?
      </p>

      <button
        onClick={() => setShowForm(!showForm)}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-[#722F52] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#59233F] sm:px-7 sm:text-base"
      >
        {showForm ? (
          <>
            <X size={19} />
            Close Form
          </>
        ) : (
          <>
            <MessageCircleHeart size={19} />
            Share Your Experience
            <ArrowUpRight size={18} />
          </>
        )}
      </button>

      {showForm && (
        <div className="mx-auto mt-8 max-w-2xl text-left">
          <TestimonialForm onClose={handleClose} />
        </div>
      )}
    </div>
  );
};

export default TestimonialFormToggle;
