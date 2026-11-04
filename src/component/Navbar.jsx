import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="container mx-auto flex items-center justify-between px-4 py-3">
      {/* Logo */}
      <div className="flex flex-col items-center gap-1">
        <Image
          src="/enent-plan.png"
          alt="event-plan"
          width={32}
          height={32}
          className="rounded-xl object-contain"
        />

        <h3 className="font-serif text-sm font-bold tracking-wider text-[#722F52]">
          BLISS HAUS
        </h3>

        <h2 className="text-[10px] font-semibold tracking-[0.2em] text-[#A17C42]">
          EVENT PLANNING
        </h2>
      </div>

      {/* Navigation */}
      <nav>
        <ul className="flex items-center gap-8 text-sm font-medium text-[#29252B]">
          <li className="cursor-pointer font-semibold text-[#722F52]">Home</li>

          <li className="cursor-pointer transition-colors hover:text-[#722F52]">
            About Us
          </li>

          <li className="cursor-pointer transition-colors hover:text-[#722F52]">
            Services
          </li>

          <li className="cursor-pointer transition-colors hover:text-[#722F52]">
            Your Booking
          </li>

          <li className="cursor-pointer transition-colors hover:text-[#722F52]">
            Contact Us
          </li>
        </ul>
      </nav>

      {/* Authentication */}
      <div className="flex items-center gap-3">
        <button className="rounded-xl border border-[#722F52] px-5 py-2 text-sm font-semibold text-[#722F52] transition-all duration-300 hover:bg-[#722F52] hover:text-white">
          Sign In
        </button>

        <button className="rounded-xl bg-[#722F52] px-5 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-[#5B2441] hover:shadow-md">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
