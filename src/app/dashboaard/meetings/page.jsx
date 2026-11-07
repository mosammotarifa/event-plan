"use client";

import { useEffect, useState } from "react";
import {
  CalendarDays,
  Clock,
  Mail,
  Phone,
  User,
  Users,
  Loader2,
} from "lucide-react";

export default function MeetingsPage() {
  const [meetings, setMeetings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMeetings = async () => {
      try {
        const response = await fetch("http://localhost:5000/meetings");

        if (!response.ok) {
          throw new Error("Failed to fetch meetings");
        }

        const data = await response.json();
        setMeetings(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMeetings();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <Loader2 className="animate-spin text-[#722F52]" size={35} />
      </div>
    );
  }

  if (error) {
    return <p className="p-10 text-red-500">{error}</p>;
  }

  return (
    <section className="min-h-screen bg-[#FAF8F6] p-6 md:p-10">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold tracking-widest text-[#722F52]">
          BLISS HAUS
        </p>

        <h1 className="mt-2 text-3xl font-bold text-[#29252B]">
          My Consultation Bookings
        </h1>

        <p className="mt-2 text-[#777078]">
          View and manage your consultation bookings with us.
        </p>

        <div className="mb-8 rounded-2xl border border-[#722F52]/10 bg-white p-6">
          <p className="text-sm text-[#777078]">Total Consultation Requests</p>

          <h2 className="mt-2 text-4xl font-bold text-[#722F52]">
            {meetings.length}
          </h2>
        </div>

        {meetings.length === 0 ? (
          <div className="rounded-2xl bg-white p-12 text-center">
            <CalendarDays size={45} className="mx-auto text-[#722F52]" />

            <h2 className="mt-4 text-xl font-bold">
              No Consultation Requests Yet
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              New client requests will appear here.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {meetings.map((meeting) => (
              <div
                key={meeting._id}
                className="rounded-2xl border border-[#722F52]/10 bg-white p-6 shadow-sm"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h2 className="text-xl font-bold text-[#29252B]">
                      {meeting.fullName}
                    </h2>

                    <p className="mt-1 text-sm text-[#722F52]">
                      {meeting.eventType}
                    </p>
                  </div>

                  <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-700">
                    {meeting.status}
                  </span>
                </div>

                <div className="mt-6 space-y-4 text-sm text-[#6B646A]">
                  <p className="flex items-center gap-3">
                    <Mail size={17} />
                    {meeting.email}
                  </p>

                  <p className="flex items-center gap-3">
                    <Phone size={17} />
                    {meeting.phone}
                  </p>

                  <p className="flex items-center gap-3">
                    <CalendarDays size={17} />
                    {meeting.date}
                  </p>

                  <p className="flex items-center gap-3">
                    <Clock size={17} />
                    {meeting.time}
                  </p>

                  <p className="flex items-center gap-3">
                    <User size={17} />
                    {meeting.meetingType}
                  </p>

                  <p className="flex items-center gap-3">
                    <Users size={17} />
                    {meeting.guests || "Not specified"} guests
                  </p>
                </div>

                <div className="mt-5 border-t border-gray-100 pt-5">
                  <h3 className="font-semibold text-[#29252B]">
                    Preferred Services
                  </h3>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {meeting.preferredServices?.length > 0 ? (
                      meeting.preferredServices.map((service) => (
                        <span
                          key={service}
                          className="rounded-full bg-[#722F52]/10 px-3 py-1 text-xs text-[#722F52]"
                        >
                          {service}
                        </span>
                      ))
                    ) : (
                      <p className="text-sm text-gray-400">
                        No preferred services selected.
                      </p>
                    )}
                  </div>

                  {meeting.message && (
                    <p className="mt-4 text-sm text-gray-500">
                      {meeting.message}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
