"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Menu, UserRound, X } from "lucide-react";
import Link from "next/link";
import { signOut, useSession } from "@/lib/auth.client";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();

  return (
    <div className="relative container mx-auto flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
      {/* Logo */}
      <Link href="/" className="flex shrink-0 items-center gap-2">
        <Image
          src="/enent-plan.png"
          alt="Bliss Haus Logo"
          width={42}
          height={42}
          className="rounded-xl object-contain"
        />

        <div className="flex flex-col">
          <h3 className="font-serif text-base font-bold tracking-wider text-[#722F52] sm:text-lg">
            BLISS HAUS
          </h3>
          <span className="text-[9px] font-semibold tracking-[0.2em] text-[#A17C42] sm:text-[10px]">
            EVENT PLANNING
          </span>
        </div>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden lg:block">
        <ul className="flex items-center gap-5 xl:gap-8 text-sm font-medium text-[#29252B]">
          {[
            { name: "Home", href: "/" },
            { name: "About Us", href: "/about" },
            { name: "Services", href: "/services" },
            { name: "Your Booking", href: "/your-booking" },
            { name: "Contact Us", href: "/contact-us" },
            ...(session?.user
              ? [{ name: "Dashboard", href: "/dashboaard/meetings" }]
              : []),
          ].map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="relative py-2 transition-colors duration-300 hover:text-[#722F52] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#722F52] after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Desktop Authentication */}
      {/* Desktop Authentication */}
      <div className="hidden items-center gap-3 lg:flex">
        {session?.user ? (
          <Link
            href="/profile"
            className="group flex items-center gap-3 rounded-full border border-[#E6DDE1] py-1.5 pl-1.5 pr-4 transition hover:border-[#722F52] hover:bg-[#FAF8F6]"
          >
            {session.user.image ? (
              <Image
                src={session.user.image}
                alt={session.user.name || "User"}
                width={38}
                height={38}
                unoptimized
                className="h-[38px] w-[38px] rounded-full object-cover"
              />
            ) : (
              <div className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-[#F5EAF0] text-[#722F52]">
                <UserRound size={20} />
              </div>
            )}

            <span className="text-sm font-semibold text-[#722F52]">
              My Profile
            </span>
          </Link>
        ) : (
          <>
            <Link
              href="/sign-in"
              className="rounded-xl border border-[#722F52] px-5 py-2.5 text-sm font-semibold text-[#722F52] transition-all hover:bg-[#722F52] hover:text-white"
            >
              Sign In
            </Link>

            <Link
              href="/sign-up"
              className="rounded-xl bg-[#722F52] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#5B2441]"
            >
              Sign Up
            </Link>
          </>
        )}
      </div>

      {/* Mobile / Tablet Hamburger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-xl p-2 text-[#722F52] transition hover:bg-[#F5EAF0] lg:hidden"
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={25} /> : <Menu size={25} />}
      </button>

      {/* Mobile / Tablet Menu */}
      {isOpen && (
        <div className="absolute left-0 top-full z-50 w-full border-t border-[#722F52]/10 bg-white px-5 py-6 shadow-xl lg:hidden sm:px-8">
          {/* Mobile Navigation */}
          <nav>
            <ul className="flex flex-col gap-1 text-sm font-medium text-[#29252B]">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Your Booking", href: "/your-booking" },
                { name: "Contact Us", href: "/contact-us" },
                ...(session?.user
                  ? [{ name: "Dashboard", href: "/dashboaard/meetings" }]
                  : []),
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block rounded-lg px-4 py-3 transition-colors duration-300 hover:bg-[#F5EAF0] hover:text-[#722F52]"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Authentication */}
          {/* Mobile Authentication */}
          <div className="mt-5 flex flex-col gap-3 border-t border-[#722F52]/10 pt-5">
            {session?.user ? (
              <Link
                href="/profile"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 rounded-xl border border-[#E6DDE1] p-3 transition hover:bg-[#FAF8F6]"
              >
                {session.user.image ? (
                  <Image
                    src={session.user.image}
                    alt={session.user.name || "User"}
                    width={42}
                    height={42}
                    unoptimized
                    className="h-[42px] w-[42px] rounded-full object-cover"
                  />
                ) : (
                  <div className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#F5EAF0] text-[#722F52]">
                    <UserRound size={21} />
                  </div>
                )}

                <div>
                  <p className="text-sm font-semibold text-[#29252B]">
                    {session.user.name || "My Profile"}
                  </p>
                  <p className="text-xs text-[#777078]">View Profile</p>
                </div>
              </Link>
            ) : (
              <>
                <Link
                  href="/sign-in"
                  onClick={() => setIsOpen(false)}
                  className="w-full rounded-xl border border-[#722F52] px-5 py-3 text-center text-sm font-semibold text-[#722F52]"
                >
                  Sign In
                </Link>

                <Link
                  href="/sign-up"
                  onClick={() => setIsOpen(false)}
                  className="w-full rounded-xl bg-[#722F52] px-5 py-3 text-center text-sm font-semibold text-white"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
