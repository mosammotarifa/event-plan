import { achievenmentsDatas } from "@/lib/data";
import {
  CalendarCheck,
  CalendarClock,
  Users,
  HeartHandshake,
} from "lucide-react";

const Achievenments = async () => {
  const achievenmentsData = await achievenmentsDatas();

  const icons = [CalendarCheck, CalendarClock, Users, HeartHandshake];

  return (
    <section className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
      {/* Heading */}
      <div className="mb-10 text-center sm:mb-12 md:mb-14">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[3px] text-[#722F52] sm:text-sm sm:tracking-[4px]">
          ✦ Our Achievements ✦
        </p>

        <h2 className="text-2xl font-bold text-[#29252B] sm:text-3xl md:text-4xl">
          Every Event Tells a Story
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-500">
          Our journey of creating beautiful moments and unforgettable
          experiences.
        </p>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-2 gap-x-3 gap-y-8 sm:gap-x-6 sm:gap-y-10 md:grid-cols-4 md:gap-y-10">
        {achievenmentsData.map((item, index) => {
          const Icon = icons[index];

          return (
            <div key={item._id} className="group px-2 text-center sm:px-3">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-[#F8EFF3] p-3 text-[#722F52] transition-all duration-300 group-hover:bg-[#722F52] group-hover:text-white">
                  {Icon && <Icon size={23} strokeWidth={1.7} />}
                </div>
              </div>

              <h3 className="text-3xl font-bold tracking-tight text-[#722F52] sm:text-4xl md:text-5xl">
                {item.number}
              </h3>

              <p className="mt-3 text-xs font-medium text-gray-500 sm:text-sm">
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
