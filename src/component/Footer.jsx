import Image from "next/image";
import Link from "next/link";
import { LogoFacebook, LogoLinkedin, LogoTelegram } from "@gravity-ui/icons";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#F8F0E3] text-[#29252B]">
      <div className="container mx-auto px-4 py-10 sm:px-6 sm:py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col items-start gap-3">
            <div className="flex flex-col items-center">
              <Image
                src="/enent-plan.png"
                alt="Bliss Haus"
                width={38}
                height={38}
                className="object-contain"
              />

              <h2 className="font-serif text-lg font-bold tracking-wider text-[#722F52]">
                BLISS HAUS
              </h2>

              <p className="text-[9px] font-semibold tracking-[0.25em] text-[#A17C42]">
                EVENT PLANNING
              </p>
            </div>

            <p className="max-w-xs text-sm leading-6 text-[#756B65]">
              We turn your special moments into beautiful memories. From
              weddings to birthdays, let's celebrate together.
            </p>

            <div className="flex items-center gap-4 pt-2">
              <LogoFacebook className="h-5 w-5 cursor-pointer transition-colors hover:text-[#722F52]" />
              <LogoTelegram className="h-5 w-5 cursor-pointer transition-colors hover:text-[#722F52]" />
              <LogoLinkedin className="h-5 w-5 cursor-pointer transition-colors hover:text-[#722F52]" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-serif text-lg font-bold text-[#722F52] sm:mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm text-[#756B65]">
              <li>
                <Link href="/" className="hover:text-[#722F52]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#722F52]">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#722F52]">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/your-booking" className="hover:text-[#722F52]">
                  Your Booking
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-[#722F52]">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Events */}
          <div>
            <h3 className="mb-4 font-serif text-lg font-bold text-[#722F52] sm:mb-5">
              Our Events
            </h3>

            <ul className="space-y-3 text-sm text-[#756B65]">
              <li>
                <Link href="/events/wedding" className="hover:text-[#722F52]">
                  Wedding
                </Link>
              </li>
              <li>
                <Link href="/events/birthday" className="hover:text-[#722F52]">
                  Birthday Party
                </Link>
              </li>
              <li>
                <Link href="/events/holud" className="hover:text-[#722F52]">
                  Gaye Holud
                </Link>
              </li>
              <li>
                <Link
                  href="/events/engagement"
                  className="hover:text-[#722F52]"
                >
                  Engagement
                </Link>
              </li>
              <li>
                <Link href="/events/corporate" className="hover:text-[#722F52]">
                  Corporate Events
                </Link>
              </li>
              <li>
                <Link href="/events/corporate" className="hover:text-[#722F52]">
                 etc.
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-serif text-lg font-bold text-[#722F52] sm:mb-5">
              Get In Touch
            </h3>

            <ul className="space-y-4 text-sm text-[#756B65]">
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-[#A17C42]" />
                <span className="break-all">blisshaus@gmail.com</span>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-[#A17C42]" />
                <span>+99142547682</span>
              </li>

              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 shrink-0 text-[#A17C42]" />
                <span>Dhaka, Bangladesh</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-10 border-t border-[#EDE0CC] pt-6 sm:mt-12">
          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row">
            <p className="text-xs text-[#756B65]">
              © {new Date().getFullYear()} Bliss Haus. All rights reserved.
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-xs text-[#756B65] sm:gap-5">
              <Link href="/privacy" className="hover:text-[#722F52]">
                Privacy Policy
              </Link>

              <Link href="/terms" className="hover:text-[#722F52]">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
