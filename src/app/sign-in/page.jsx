"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import {
  Eye,
  EyeOff,
  Mail,
  LockKeyhole,
  Loader2,
  ArrowLeft,
} from "lucide-react";
import { signIn } from "@/lib/auth.client";

export default function SignInPage() {
  const router = useRouter();

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
      const result = await signIn.email({
        email,
        password,
      });

      if (result.error) {
        throw new Error(result.error.message);
      }

      router.push("/");
      router.refresh();
    } catch (err) {
      setError(err.message || "Unable to sign in.");
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
      setError(err.message || "Social login failed.");
      setSocialLoading("");
    }
  };

  return (
    <main className="min-h-screen bg-[#FAF8F6] lg:grid lg:grid-cols-2">
      {/* Left: Wedding Photography */}
      <div
        className="relative hidden min-h-screen bg-cover bg-center lg:flex"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519741497674-611481863552?q=85&w=1600')",
        }}
      >
        <div className="absolute inset-0 bg-[#351C2B]/55" />

        <div className="relative z-10 flex w-full flex-col justify-between p-12 text-white xl:p-16">
          <Link href="/" className="w-fit">
            <h1 className="text-3xl font-bold tracking-[0.2em]">BLISS HAUS</h1>
            <p className="mt-2 text-xs tracking-[0.4em] text-white/75">
              EVENT PLANNING
            </p>
          </Link>

          <div className="max-w-lg">
            <p className="text-xs uppercase tracking-[0.35em] text-[#E8C9D8]">
              Beautiful moments begin here
            </p>

            <h2 className="mt-6 text-5xl font-semibold leading-tight xl:text-6xl">
              Every celebration
              <span className="block font-serif italic text-[#E8C9D8]">
                tells a story.
              </span>
            </h2>

            <p className="mt-6 max-w-md text-base leading-8 text-white/80">
              Welcome back to a place where dreams become celebrations and every
              detail matters.
            </p>
          </div>

          <p className="text-xs tracking-widest text-white/65">
            CREATING MEMORIES THAT LAST FOREVER
          </p>
        </div>
      </div>

      {/* Right: Sign In Form */}
      <div className="flex min-h-screen items-center justify-center px-5 py-12 sm:px-10 lg:px-12">
        <div className="w-full max-w-md">
          <Link
            href="/"
            className="mb-10 inline-flex items-center gap-2 text-sm text-[#777078] hover:text-[#722F52]"
          >
            <ArrowLeft size={17} />
            Back to home
          </Link>

          <div className="mb-9">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#722F52]">
              Welcome Back
            </p>

            <h2 className="mt-4 font-serif text-4xl text-[#29252B] sm:text-5xl">
              Sign in to your account
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#777078]">
              Your next beautiful celebration is just a step away. Sign in to
              continue.
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
                  className="w-full rounded-lg border border-[#E6DDE1] bg-white py-3.5 pl-12 pr-4 text-sm outline-none focus:border-[#722F52] focus:ring-2 focus:ring-[#722F52]/10"
                />
              </div>
            </div>

            <div>
              <div className="mb-2 flex justify-between">
                <label className="text-sm font-medium text-[#29252B]">
                  Password
                </label>
              </div>

              <div className="relative">
                <LockKeyhole
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A69AA1]"
                  size={18}
                />

                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  required
                  className="w-full rounded-lg border border-[#E6DDE1] bg-white py-3.5 pl-12 pr-12 text-sm outline-none focus:border-[#722F52] focus:ring-2 focus:ring-[#722F52]/10"
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

            <button
              disabled={loading || !!socialLoading}
              className="flex w-full items-center justify-center gap-2 bg-[#722F52] py-4 text-sm font-semibold tracking-wide text-white transition hover:bg-[#5E2543] disabled:opacity-60"
            >
              {loading ? (
                <Loader2 className="animate-spin" size={19} />
              ) : (
                "SIGN IN"
              )}
            </button>
          </form>

          <div className="my-7 flex items-center gap-4">
            <div className="h-px flex-1 bg-[#E6DDE1]" />
            <span className="text-xs text-[#999099]">OR SIGN IN WITH</span>
            <div className="h-px flex-1 bg-[#E6DDE1]" />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              disabled={loading || !!socialLoading}
              onClick={() => handleSocialLogin("google")}
              className="flex items-center justify-center gap-2 border border-[#E6DDE1] bg-white py-3 text-sm font-medium text-[#29252B] hover:border-[#722F52] disabled:opacity-50"
            >
              {socialLoading === "google" ? (
                <Loader2 size={17} className="animate-spin" />
              ) : (
                <span className="font-bold text-[#4285F4]">G</span>
              )}
              Google
            </button>

            <button
              type="button"
              disabled={loading || !!socialLoading}
              onClick={() => handleSocialLogin("github")}
              className="flex items-center justify-center gap-2 border border-[#E6DDE1] bg-white py-3 text-sm font-medium text-[#29252B] hover:border-[#722F52] disabled:opacity-50"
            >
              {socialLoading === "github" ? (
                <Loader2 size={17} className="animate-spin" />
              ) : (
                <span className="font-bold">GitHub</span>
              )}
            </button>
          </div>

          <p className="mt-8 text-center text-sm text-[#777078]">
            New to BLISS HAUS?
            <Link
              href="/sign-up"
              className="ml-2 font-semibold text-[#722F52] hover:underline"
            >
              Create an account
            </Link>
          </p>

          <p className="mt-12 text-center text-xs tracking-wider text-[#A69AA1]">
            BLISS HAUS · EVENT PLANNING
          </p>
        </div>
      </div>
    </main>
  );
}
