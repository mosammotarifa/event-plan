import ProfileInfo from "@/component/ProfileInfo";
import React from "react";


const ProfilePage = () => {
  return (
    <main className="min-h-screen bg-[#FAF8F6] py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="mb-10">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[3px] text-[#722F52]">
            My Account
          </p>

          <h1 className="text-3xl font-bold text-[#29252B] sm:text-4xl">
            My Profile
          </h1>

          <p className="mt-3 text-gray-500">
            Manage your personal information and account details.
          </p>
        </div>

        <div className="mx-auto max-w-5xl">
          <ProfileInfo />
        </div>
      </div>
    </main>
  );
};

export default ProfilePage;
