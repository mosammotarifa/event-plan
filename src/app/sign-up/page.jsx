"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import {
  User,
  Mail,
  LockKeyhole,
  Eye,
  EyeOff,
  Loader2,
  ArrowLeft,
} from "lucide-react";
import { signUp } from "@/lib/auth.client";
import { LogoGithub } from "@gravity-ui/icons";

export default function SignUpPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [socialLoading, setSocialLoading] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const result = await signUp.email({
        name,
        email,
        password,
      });

      if (result.error) {
        throw new Error(result.error.message);
      }

      router.push("/");
      router.refresh();
    } catch (err) {
      setError(err.message || "Unable to create your account.");
    } finally {
      setLoading(false);
    }
  };

  const handleSocialLogin = async (provider) => {
    setError("");
    setSocialLoading(provider);

    try {
      await authClient.signIn.social({
        provider,
        callbackURL: "/",
      });
    } catch (err) {
      setError(err.message || "Social registration failed.");
      setSocialLoading("");
    }
  };

  return (
    <main className="min-h-screen bg-[#FAF8F6]">
      {/* Wedding Banner */}
      <section
        className="relative flex h-64 items-center justify-center bg-cover bg-center sm:h-80"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=85&w=1600')",
        }}
      >
        <div className="absolute inset-0 bg-[#351C2B]/55" />

        <div className="relative z-10 px-5 text-center text-white">
          <Link href="/" className="inline-block">
            <p className="text-2xl font-bold tracking-[0.2em] sm:text-3xl">
              BLISS HAUS
            </p>
            <p className="mt-2 text-xs tracking-[0.4em] text-white/75">
              EVENT PLANNING
            </p>
          </Link>

          <h1 className="mt-8 font-serif text-3xl italic sm:text-5xl">
            Begin Your Beautiful Story
          </h1>

          <p className="mt-3 text-sm text-white/80">
            Create an account and let's celebrate life's special moments.
          </p>
        </div>
      </section>

      {/* Registration Form */}
      <section className="px-5 py-14 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-2xl">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm text-[#777078] hover:text-[#722F52]"
          >
            <ArrowLeft size={17} />
            Back to home
          </Link>

          <div className="rounded-2xl border border-[#722F52]/10 bg-white p-6 shadow-[0_12px_50px_rgba(80,40,60,0.06)] sm:p-10 md:p-12">
            <div className="mb-8 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#722F52]">
                Join Our Community
              </p>

              <h2 className="mt-3 font-serif text-3xl text-[#29252B] sm:text-4xl">
                Create Your Account
              </h2>

              <p className="mt-3 text-sm leading-6 text-[#777078]">
                Sign up to explore our services and plan your next unforgettable
                event.
              </p>
            </div>

            {error && (
              <div className="mb-5 rounded-lg bg-red-50 p-3 text-sm text-red-600">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-medium text-[#29252B]">
                  Full Name
                </label>

                <div className="relative">
                  <User
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A69AA1]"
                    size={18}
                  />

                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name"
                    autoComplete="name"
                    required
                    className="w-full rounded-lg border border-[#E6DDE1] bg-[#FAF8F6]/50 py-3.5 pl-12 pr-4 text-sm outline-none focus:border-[#722F52] focus:ring-2 focus:ring-[#722F52]/10"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[#29252B]">
                  Email Address
                </label>

                <div className="relative">
                  <Mail
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A69AA1]"
                    size={18}
                  />

                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                    className="w-full rounded-lg border border-[#E6DDE1] bg-[#FAF8F6]/50 py-3.5 pl-12 pr-4 text-sm outline-none focus:border-[#722F52] focus:ring-2 focus:ring-[#722F52]/10"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[#29252B]">
                  Password
                </label>

                <div className="relative">
                  <LockKeyhole
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A69AA1]"
                    size={18}
                  />

                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Create a password"
                    autoComplete="new-password"
                    minLength={8}
                    required
                    className="w-full rounded-lg border border-[#E6DDE1] bg-[#FAF8F6]/50 py-3.5 pl-12 pr-12 text-sm outline-none focus:border-[#722F52] focus:ring-2 focus:ring-[#722F52]/10"
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

                <p className="mt-2 text-xs text-[#999099]">
                  Use at least 8 characters.
                </p>
              </div>

              <button
                type="submit"
                disabled={loading || !!socialLoading}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#722F52] py-4 text-sm font-semibold tracking-wide text-white transition hover:bg-[#5E2543] disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <Loader2 size={19} className="animate-spin" />
                    Creating account...
                  </>
                ) : (
                  "CREATE ACCOUNT"
                )}
              </button>
            </form>

            <div className="my-7 flex items-center gap-4">
              <div className="h-px flex-1 bg-[#E6DDE1]" />
              <span className="text-xs text-[#999099]">OR SIGN UP WITH</span>
              <div className="h-px flex-1 bg-[#E6DDE1]" />
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <button
                type="button"
                disabled={loading || !!socialLoading}
                onClick={() => handleSocialLogin("google")}
                className="flex items-center justify-center gap-3 rounded-lg border border-[#E6DDE1] py-3.5 text-sm font-medium text-[#29252B] transition hover:border-[#722F52] disabled:opacity-50"
              >
                {socialLoading === "google" ? (
                  <Loader2 size={18} className="animate-spin" />
                ) : (
                  <span className="font-bold text-[#4285F4]">G</span>
                )}
                Google
              </button>

              <button
                type="button"
                disabled={loading || !!socialLoading}
                onClick={() => handleSocialLogin("github")}
                className="flex items-center justify-center gap-3 rounded-lg border border-[#E6DDE1] py-3.5 text-sm font-medium text-[#29252B] transition hover:border-[#722F52] disabled:opacity-50"
              >
                {socialLoading === "github" ? (
                  <Loader2 size={18} className="animate-spin" />
                ) : (
                  <LogoGithub size={19} />
                )}
                GitHub
              </button>
            </div>

            <p className="mt-8 text-center text-sm text-[#777078]">
              Already have an account?
              <Link
                href="/sign-in"
                className="ml-2 font-semibold text-[#722F52] hover:underline"
              >
                Sign In
              </Link>
            </p>
          </div>

          <p className="mt-8 text-center text-xs tracking-wider text-[#A69AA1]">
            © {new Date().getFullYear()} BLISS HAUS · EVENT PLANNING
          </p>
        </div>
      </section>
    </main>
  );
}
