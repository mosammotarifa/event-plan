import { Phone, Mail, MapPin, MessageCircle, ArrowUpRight } from "lucide-react";

const contactItems = [
  {
    title: "Call Us",
    description: "Speak directly with our event planning team.",
    value: "+880 1XXX-XXXXXX",
    icon: Phone,
    link: "tel:+8801XXXXXXXXX",
  },
  {
    title: "Email Us",
    description: "Send us your questions or event ideas.",
    value: "hello@blisshaus.com",
    icon: Mail,
    link: "mailto:hello@blisshaus.com",
  },
  {
    title: "Visit Our Office",
    description: "We would love to meet and discuss your event.",
    value: "Dhaka, Bangladesh",
    icon: MapPin,
    link: "#location",
  },
  {
    title: "WhatsApp",
    description: "Connect with us for a quick conversation.",
    value: "Chat with our team",
    icon: MessageCircle,
    link: "https://wa.me/8801XXXXXXXXX",
  },
];

export default function ContactInfo() {
  return (
    <section className="bg-[#FAF8F6] py-20">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="text-sm font-semibold tracking-[0.25em] text-[#722F52]">
            GET IN TOUCH
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[#29252B] md:text-4xl">
            We'd Love to Hear From You
          </h2>

          <p className="mt-4 leading-7 text-[#6B646A]">
            Have questions or planning something special? Our team is always
            happy to help you.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {contactItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group rounded-2xl border border-[#722F52]/10 bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[#722F52]/30 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#722F52]/10 text-[#722F52] transition-all duration-300 group-hover:bg-[#722F52] group-hover:text-white">
                  <Icon size={25} />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-[#29252B]">
                  {item.title}
                </h3>

                <p className="mt-3 min-h-12 text-sm leading-6 text-[#777078]">
                  {item.description}
                </p>

                <a
                  href={item.link}
                  target={item.link.startsWith("https") ? "_blank" : undefined}
                  rel={
                    item.link.startsWith("https")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="mt-5 inline-flex items-center gap-2 font-semibold text-[#722F52]"
                >
                  {item.value}
                  <ArrowUpRight size={17} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
