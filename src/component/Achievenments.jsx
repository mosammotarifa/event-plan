

import { achievenmentsDatas } from "@/lib/data";
import {
  CalendarCheck,
  CalendarClock,
  Users,
  HeartHandshake,
} from "lucide-react";

const Achievenments = async () => {
  const achievenmentsData = await achievenmentsDatas();

  const icons = [
    CalendarCheck,
    CalendarClock,
    Users,
    HeartHandshake,
  ];

  return (
    <section className="container mx-auto px-4 py-20">
      {/* Heading */}
      <div className="text-center mb-14">
        <p className="text-[#722F52] font-semibold text-sm tracking-[4px] uppercase mb-3">
          ✦ Our Achievements ✦
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-[#29252B]">
          Every Event Tells a Story
        </h2>

        <p className="text-gray-500 mt-4 max-w-xl mx-auto text-sm leading-7">
          Our journey of creating beautiful moments and
          unforgettable experiences.
        </p>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10">
        {achievenmentsData.map((item, index) => {
          const Icon = icons[index];

          return (
            <div
              key={item._id}
              className="text-center group px-3"
            >
              <div className="flex justify-center mb-4">
                <div className="text-[#722F52] bg-[#F8EFF3] p-3 rounded-full transition-all duration-300 group-hover:bg-[#722F52] group-hover:text-white">
                  {Icon && <Icon size={23} strokeWidth={1.7} />}
                </div>
              </div>

              <h3 className="text-4xl md:text-5xl font-bold text-[#722F52] tracking-tight">
                {item.number}
              </h3>

              <p className="mt-3 text-sm font-medium text-gray-500">
                {item.title}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Achievenments;
