"use client";
import React, { useState } from "react";
// import React from "react";
import Image from "next/image";
import {
  UserRound,
  Mail,
  Phone,
  MapPin,
  CalendarDays,
  Pencil,
  Camera,
} from "lucide-react";
import { useSession } from "@/lib/auth.client";

const ProfileInfo = () => {
  const { data: session, isPending } = useSession();
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
  });

  if (isPending) {
    return <p className="p-6 text-center">Loading profile...</p>;
  }

  if (!session?.user) {
    return (
      <p className="p-6 text-center">Please sign in to view your profile.</p>
    );
  }
  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      setIsSaving(true);

      const response = await fetch("/api/profile", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message);
      }

      alert("Profile updated successfully!");
      setIsEditing(false);
      window.location.reload();
    } catch (error) {
      alert(error.message);
    } finally {
      setIsSaving(false);
    }
  };
  const user = session.user;
  return (
    <section className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
      {/* Profile Header */}
      <div className="flex flex-col items-center gap-5 border-b border-[#722F52]/10 pb-8 sm:flex-row">
        {/* Profile Image */}
        <div className="relative">
          {user.image ? (
            <Image
              src={user.image}
              alt={user.name || "Profile"}
              width={110}
              height={110}
              unoptimized
              className="h-28 w-28 rounded-full border-4 border-[#F5EAF0] object-cover"
            />
          ) : (
            <div className="flex h-28 w-28 items-center justify-center rounded-full border-4 border-[#F5EAF0] bg-[#F5EAF0] text-[#722F52]">
              <UserRound size={45} />
            </div>
          )}

          <button
            className="absolute bottom-1 right-1 rounded-full bg-[#722F52] p-2 text-white shadow-md transition hover:bg-[#5B2441]"
            aria-label="Change profile picture"
          >
            <Camera size={16} />
          </button>
        </div>

        {/* User Info */}
        <div className="flex-1 text-center sm:text-left">
          <h2 className="text-2xl font-bold text-[#29252B]">
            {user.name || "User"}
          </h2>

          <p className="mt-2 text-sm text-gray-500">{user.email}</p>

          <span className="mt-3 inline-block rounded-full bg-[#F5EAF0] px-4 py-1.5 text-xs font-semibold text-[#722F52]">
            BLISS HAUS Member
          </span>
        </div>
        <button
          onClick={() => {
            setFormData({
              name: user.name || "",
              phone: user.phone || "",
              address: user.address || "",
            });

            setIsEditing(!isEditing);
          }}
          className="inline-flex items-center gap-2 rounded-xl bg-[#722F52] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#5B2441]"
        >
          <Pencil size={16} />
          {isEditing ? "Close Editing" : "Edit Profile"}
        </button>
      </div>
      {isEditing && (
        <form
          onSubmit={handleUpdate}
          className="mt-8 space-y-5 rounded-xl bg-[#FAF8F6] p-6"
        >
          <h3 className="text-xl font-bold text-[#29252B]">
            Edit Your Profile
          </h3>

          <div>
            <label className="mb-2 block text-sm font-medium">Full Name</label>

            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 outline-none focus:border-[#722F52]"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Phone Number
            </label>

            <input
              type="tel"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              placeholder="Enter phone number"
              className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 outline-none focus:border-[#722F52]"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">Address</label>

            <textarea
              rows={3}
              value={formData.address}
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
              placeholder="Enter your address"
              className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 outline-none focus:border-[#722F52]"
            />
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={isSaving}
              className="rounded-lg bg-[#722F52] px-5 py-3 text-sm font-semibold text-white hover:bg-[#5B2441] disabled:opacity-60"
            >
              {isSaving ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      )}
      {/* Personal Information */}
      <div className="pt-8">
        <h3 className="mb-6 text-xl font-bold text-[#29252B]">
          Personal Information
        </h3>

        <div className="grid gap-6 sm:grid-cols-2">
          {[
            {
              label: "Full Name",
              value: user.name || "Not provided",
              icon: UserRound,
            },
            {
              label: "Email Address",
              value: user.email || "Not provided",
              icon: Mail,
            },
            {
              label: "Phone Number",
               value: user.phone || "Not provided",
              icon: Phone,
            },
            {
              label: "Address",
                value: user.address || "Not provided",
              icon: MapPin,
            },
            {
              label: "Member Since",
              value: "Not available",
              icon: CalendarDays,
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="flex items-center gap-4 rounded-xl bg-[#FAF8F6] p-4"
              >
                <div className="rounded-lg bg-[#F5EAF0] p-3">
                  <Icon size={20} className="text-[#722F52]" />
                </div>

                <div>
                  <p className="text-xs text-gray-500">{item.label}</p>

                  <p className="mt-1 text-sm font-semibold text-[#29252B]">
                    {item.value}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProfileInfo;
