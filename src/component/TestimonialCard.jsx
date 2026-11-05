import { Quote, Star } from "lucide-react";
import React from "react";

const TestimonialCard = ({ review }) => {
  const initials = review.clientName
    ?.split(" ")
    .map((name) => name[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
  return (
    <div className="mx-3 flex h-[260px] w-[320px] shrink-0 flex-col justify-between rounded-2xl border border-[#eee5e9] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:w-[370px]">
      {/* Rating and Quote */}
      <div>
        <div className="mb-4 flex items-center justify-between">
          <div className="flex gap-1">
            {Array.from({ length: 5 }, (_, index) => (
              <Star
                key={index}
                size={16}
                fill={index < review.rating ? "#D6A443" : "none"}
                color="#D6A443"
              />
            ))}
          </div>

          <Quote size={28} className="text-[#722F52]/30" />
        </div>

        {/* Review */}
        <p className="line-clamp-4 text-sm leading-7 text-gray-600">
          {review.review}
        </p>
      </div>

      {/* Client Information */}
      <div className="mt-5 flex items-center gap-3 border-t border-[#f0e9ed] pt-4">
        {review.clientImage ? (
          <img
            src={review.clientImage}
            alt={review.clientName}
            className="h-12 w-12 rounded-full border-2 border-[#722F52]/20 object-cover"
          />
        ) : (
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#722F52]/10 font-bold text-[#722F52]">
            {initials}
          </div>
        )}

        <div className="min-w-0">
          <h3 className="truncate font-semibold text-[#29252B]">
            {review.clientName}
          </h3>

          <p className="text-xs text-[#722F52]">{review.eventType}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
