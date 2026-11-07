"use client";

import { useState } from "react";
import Link from "next/link";

import { User, Mail, LockKeyhole, Eye, EyeOff, ArrowLeft } from "lucide-react";
import { signIn, signUp } from "@/lib/auth.client";

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());

    if (userData.password !== userData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const { data, error } = await signUp.email({
      name: userData.name,
      email: userData.email,
      password: userData.password,
      image: userData.image,
      callbackURL: "/",
    });

    console.log(data, error);
  };

  const handelsignInGoogle = async () => {
    const data = await signIn.social({
      provider: "google",
    });
  };
  const handelsignInGithut = async () => {
    const data = await signIn.social({
      provider: "github",
    });
  };
  return (
    <main className="min-h-screen bg-[#FAF8F6]">
      {/* Wedding Banner */}
      <section
        className="relative flex min-h-[300px] items-center justify-center bg-cover bg-center px-5 py-16 sm:min-h-[360px]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519741497674-611481863552?q=85&w=1600')",
        }}
      >
        <div className="absolute inset-0 bg-[#351C2B]/65" />

        <div className="relative z-10 text-center text-white">
          <Link href="/">
            <h1 className="text-3xl font-bold tracking-[0.2em] sm:text-4xl">
              BLISS HAUS
            </h1>

            <p className="mt-2 text-xs tracking-[0.4em] text-white/75">
              EVENT PLANNING
            </p>
          </Link>

          <p className="mt-10 text-xs uppercase tracking-[0.35em] text-[#E8C9D8]">
            Your journey begins here
          </p>

          <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
            Create Your Account
          </h2>

          <p className="mt-4 text-sm text-white/80">
            Let's make your special moments unforgettable.
          </p>
        </div>
      </section>

      {/* Registration Section */}
      <section className="px-5 py-12 sm:px-8 sm:py-16">
        <div className="mx-auto max-w-xl">
          {/* Back Home */}
          <Link
            href="/"
            className="mb-7 inline-flex items-center gap-2 text-sm text-[#777078] transition hover:text-[#722F52]"
          >
            <ArrowLeft size={17} />
            Back to home
          </Link>

          {/* Sign Up Card */}
          <div className="rounded-2xl border border-[#E6DDE1] bg-white p-6 shadow-[0_10px_50px_rgba(53,28,43,0.06)] sm:p-10">
            <div className="mb-8 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#722F52]">
                Join Our Community
              </p>

              <h3 className="mt-3 font-serif text-3xl text-[#29252B] sm:text-4xl">
                Get Started
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#777078]">
                Create an account to plan, manage, and celebrate your beautiful
                events with us.
              </p>
            </div>

            <form onSubmit={onSubmit} className="space-y-5">
              {/* Full Name */}
              <div>
                <label className="mb-2 block text-sm font-medium text-[#29252B]">
                  Full Name
                </label>

                <div className="relative">
                  <User
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A69AA1]"
                  />

                  <input
                    type="text"
                    placeholder="Enter your full name"
                    autoComplete="name"
                    name="name"
                    required
                    className="w-full rounded-lg border border-[#E6DDE1] bg-[#FAF8F6]/50 py-3.5 pl-12 pr-4 text-sm outline-none transition focus:border-[#722F52] focus:ring-2 focus:ring-[#722F52]/10"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-medium text-[#29252B]">
                  Email Address
                </label>

                <div className="relative">
                  <Mail
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A69AA1]"
                  />

                  <input
                    type="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    name="email"
                    required
                    className="w-full rounded-lg border border-[#E6DDE1] bg-[#FAF8F6]/50 py-3.5 pl-12 pr-4 text-sm outline-none transition focus:border-[#722F52] focus:ring-2 focus:ring-[#722F52]/10"
                  />
                </div>
              </div>
              {/* Profile Image */}
              <div>
                <label className="mb-2 block text-sm font-medium text-[#29252B]">
                  Profile Image
                </label>

                <input
                  type="url"
                  name="image"
                  accept="image/*"
                  className="w-full rounded-lg border border-[#E6DDE1] bg-[#FAF8F6]/50 p-3 text-sm"
                />
              </div>
              {/* Password */}
              <div>
                <label className="mb-2 block text-sm font-medium text-[#29252B]">
                  Password
                </label>

                <div className="relative">
                  <LockKeyhole
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A69AA1]"
                  />

                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a password"
                    autoComplete="new-password"
                    name="password"
                    required
                    className="w-full rounded-lg border border-[#E6DDE1] bg-[#FAF8F6]/50 py-3.5 pl-12 pr-12 text-sm outline-none transition focus:border-[#722F52] focus:ring-2 focus:ring-[#722F52]/10"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#A69AA1]"
                    aria-label="Toggle password visibility"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label className="mb-2 block text-sm font-medium text-[#29252B]">
                  Confirm Password
                </label>

                <div className="relative">
                  <LockKeyhole
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A69AA1]"
                  />

                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    autoComplete="new-password"
                    name="confirmPassword"
                    required
                    className="w-full rounded-lg border border-[#E6DDE1] bg-[#FAF8F6]/50 py-3.5 pl-12 pr-12 text-sm outline-none transition focus:border-[#722F52] focus:ring-2 focus:ring-[#722F52]/10"
                  />

                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#A69AA1]"
                    aria-label="Toggle confirm password visibility"
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>
              </div>

              {/* Create Account */}
              <button
                type="submit"
                className="mt-2 w-full bg-[#722F52] py-4 text-sm font-semibold tracking-wide text-white transition hover:bg-[#5E2543]"
              >
                CREATE ACCOUNT
              </button>
            </form>

            {/* Divider */}
            <div className="my-7 flex items-center gap-4">
              <div className="h-px flex-1 bg-[#E6DDE1]" />

              <span className="text-xs text-[#999099]">OR SIGN UP WITH</span>

              <div className="h-px flex-1 bg-[#E6DDE1]" />
            </div>

            {/* Social Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={handelsignInGoogle}
                type="button"
                className="flex items-center justify-center gap-2 border border-[#E6DDE1] bg-white py-3 text-sm font-medium text-[#29252B] transition hover:border-[#722F52]"
              >
                <span className="font-bold text-[#4285F4]">G</span>
                Google
              </button>

              <button
                onClick={handelsignInGithut}
                type="button"
                className="flex items-center justify-center gap-2 border border-[#E6DDE1] bg-white py-3 text-sm font-medium text-[#29252B] transition hover:border-[#722F52]"
              >
                <span className="font-bold">GitHub</span>
                GitHub
              </button>
            </div>

            {/* Sign In Link */}
            <p className="mt-8 text-center text-sm text-[#777078]">
              Already have an account?
              <Link
                href="/sign-in"
                className="ml-2 font-semibold text-[#722F52] hover:underline"
              >
                Sign in
              </Link>
            </p>
          </div>

          <p className="mt-8 text-center text-xs tracking-wider text-[#A69AA1]">
            BLISS HAUS · EVENT PLANNING
          </p>
        </div>
      </section>
    </main>
  );
}
