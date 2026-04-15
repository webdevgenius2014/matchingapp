import Link from "next/link";
import { Zap, ArrowLeft, Mail } from "lucide-react";

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-subtle)] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="w-9 h-9 rounded-xl bg-[var(--primary)] flex items-center justify-center">
            <Zap size={18} className="text-white" />
          </div>
          <span className="text-xl font-bold text-[var(--text-primary)]">ConnectPro</span>
        </div>

        <div className="bg-white rounded-2xl border border-[var(--border-default)] shadow-sm p-8">
          {/* Icon */}
          <div className="w-12 h-12 rounded-2xl bg-[var(--primary-light)] flex items-center justify-center mb-5">
            <Mail size={22} className="text-[var(--primary)]" />
          </div>

          <h1 className="text-2xl font-bold text-[var(--text-primary)] mb-1">Reset your password</h1>
          <p className="text-sm text-[var(--text-secondary)] mb-7">
            Enter your email and we&#39;ll send you a link to reset your password.
          </p>

          <form className="space-y-4" action="/login">
            <div>
              <label className="block text-sm font-medium text-[var(--text-primary)] mb-1.5">
                Email address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-3.5 py-2.5 rounded-lg border border-[var(--border-default)] text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 bg-[var(--primary)] text-white font-semibold rounded-lg text-sm hover:bg-[var(--primary-hover)] transition-colors"
            >
              Send reset link
            </button>
          </form>

          {/* Success state (shown after submit) */}
          <div className="mt-6 p-4 rounded-xl bg-[var(--success-light)] border border-emerald-100 hidden">
            <p className="text-sm font-medium text-emerald-800">Check your inbox</p>
            <p className="text-xs text-emerald-700 mt-1">
              We sent a reset link to your email. It expires in 15 minutes.
            </p>
          </div>
        </div>

        <div className="text-center mt-6">
          <Link
            href="/login"
            className="inline-flex items-center gap-1.5 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
          >
            <ArrowLeft size={14} /> Back to sign in
          </Link>
        </div>
      </div>
    </div>
  );
}
