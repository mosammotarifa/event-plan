"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useSession } from "@/lib/auth.client";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();

  return (
    <div className="relative container mx-auto flex items-center justify-between px-4 py-3">
      {/* Logo */}
      <Link href={"/"}>
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
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:block">
        <ul className="flex items-center gap-8 text-sm font-medium text-[#29252B]">
          <Link href={"/"}>
            <li className="cursor-pointer font-semibold text-[#722F52]">
              Home
            </li>
          </Link>
          <Link href={"/about"}>
            <li className="cursor-pointer transition-colors hover:text-[#722F52]">
              About Us
            </li>
          </Link>
          <Link href={"/services"}>
            <li className="cursor-pointer transition-colors hover:text-[#722F52]">
              Services
            </li>
          </Link>
          <Link href={"/your-booking"}>
            <li className="cursor-pointer transition-colors hover:text-[#722F52]">
              Your Booking
            </li>
          </Link>
          <Link href={"/contact-us"}>
            <li className="cursor-pointer transition-colors hover:text-[#722F52]">
              Contact Us
            </li>
          </Link>
          <Link href={"/dashboaard/meetings"}>
            <li className="cursor-pointer transition-colors hover:text-[#722F52]">
              dashboaard
            </li>
          </Link>
        </ul>
      </nav>

      {/* Desktop Authentication */}
      <div className="hidden items-center gap-3 md:flex">
        {session?.user ? (
          <div>Logout </div>
        ) : (
          <div>
            <Link href={"/sign-in"}>
              <button className="rounded-xl border border-[#722F52] px-5 py-2 text-sm font-semibold text-[#722F52] transition-all duration-300 hover:bg-[#722F52] hover:text-white">
                Sign In
              </button>
            </Link>
            <Link href={"/sign-up"}>
              <button className="rounded-xl bg-[#722F52] px-5 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-[#5B2441] hover:shadow-md">
                Sign Up
              </button>
            </Link>
          </div>
        )}
      </div>

      {/* Mobile Hamburger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-lg p-2 text-[#722F52] transition hover:bg-[#F5EAF0] md:hidden"
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={26} /> : <Menu size={26} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute left-0 top-full z-50 w-full border-t border-[#722F52]/10 bg-white px-5 py-6 shadow-xl md:hidden">
          <ul className="flex flex-col gap-5 text-sm font-medium text-[#29252B]">
            <li className="cursor-pointer font-semibold text-[#722F52]">
              Home
            </li>
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

          <div className="mt-6 flex flex-col gap-3">
            {session?.user ? (
              <div>Logout</div>
            ) : (
              <div>
                <Link href={"/sign-in"}>
                  <button className="rounded-xl border border-[#722F52] px-5 py-3 text-sm font-semibold text-[#722F52] transition hover:bg-[#722F52] hover:text-white">
                    Sign In
                  </button>
                </Link>
                <Link href={"/sign-up"}>
                  <button className="rounded-xl bg-[#722F52] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#5B2441]">
                    Sign Up
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
