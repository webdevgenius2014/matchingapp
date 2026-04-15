import Link from "next/link";
import { Edit2, MapPin, Briefcase, Link2, Camera } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-[var(--text-primary)]">My Profile</h1>
        <Link
          href="/profile/edit"
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium border border-[var(--border-default)] rounded-lg text-[var(--text-primary)] hover:bg-[var(--bg-muted)] transition-colors"
        >
          <Edit2 size={14} />
          Edit profile
        </Link>
      </div>

      {/* Profile card */}
      <div className="bg-white rounded-2xl border border-[var(--border-default)] overflow-hidden mb-5">
        {/* Cover */}
        <div className="h-32 bg-gradient-to-r from-indigo-500 to-purple-600 relative">
          <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/20 hover:bg-black/30 flex items-center justify-center transition-colors">
            <Camera size={14} className="text-white" />
          </button>
        </div>

        <div className="px-6 pb-6">
          {/* Avatar */}
          <div className="relative -mt-12 mb-4 inline-block">
            <img
              src="https://api.dicebear.com/9.x/avataaars/svg?seed=Alex&backgroundColor=b6e3f4"
              alt="Alex Morgan"
              className="w-24 h-24 rounded-2xl border-4 border-white bg-[var(--bg-muted)] shadow-sm"
            />
            <button className="absolute bottom-1 right-1 w-6 h-6 rounded-full bg-[var(--primary)] flex items-center justify-center shadow">
              <Camera size={10} className="text-white" />
            </button>
          </div>

          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-xl font-bold text-[var(--text-primary)]">Alex Morgan</h2>
              <p className="text-sm text-[var(--text-secondary)] mt-0.5">Product Designer</p>
              <div className="flex flex-wrap items-center gap-3 mt-2">
                <span className="flex items-center gap-1 text-xs text-[var(--text-muted)]">
                  <MapPin size={12} /> San Francisco, CA
                </span>
                <span className="flex items-center gap-1 text-xs text-[var(--text-muted)]">
                  <Briefcase size={12} /> Airbnb
                </span>
              </div>
            </div>
            <span className="px-2.5 py-1 text-xs font-medium bg-[var(--primary-light)] text-[var(--primary)] rounded-full">
              Design
            </span>
          </div>

          <p className="text-sm text-[var(--text-secondary)] mt-4 leading-relaxed">
            Senior product designer with 6 years building B2B SaaS products. Passionate about design systems, accessibility, and bridging the gap between design and engineering. Always open to connecting with founders and PMs.
          </p>

          <div className="flex items-center gap-1.5 mt-3">
            <Link2 size={12} className="text-[var(--text-muted)]" />
            <a href="#" className="text-xs text-[var(--primary)] hover:underline">alexmorgan.design</a>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-5">
        {[
          { label: "Matches", value: "24" },
          { label: "Connections", value: "18" },
          { label: "Profile views", value: "142" },
        ].map(({ label, value }) => (
          <div key={label} className="bg-white rounded-xl border border-[var(--border-default)] p-4 text-center">
            <p className="text-2xl font-bold text-[var(--text-primary)]">{value}</p>
            <p className="text-xs text-[var(--text-muted)] mt-0.5">{label}</p>
          </div>
        ))}
      </div>

      {/* Profile completeness */}
      <div className="bg-white rounded-2xl border border-[var(--border-default)] p-5 mb-5">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold text-[var(--text-primary)]">Profile strength</h3>
          <span className="text-sm font-bold text-[var(--primary)]">75%</span>
        </div>
        <div className="h-2 bg-[var(--bg-muted)] rounded-full overflow-hidden">
          <div className="h-full w-3/4 bg-[var(--primary)] rounded-full" />
        </div>
        <div className="mt-4 space-y-2.5">
          {[
            { label: "Add a profile photo", done: true },
            { label: "Write a bio", done: true },
            { label: "Add your company", done: true },
            { label: "Add a website link", done: false },
            { label: "Verify your email", done: false },
          ].map(({ label, done }) => (
            <div key={label} className="flex items-center gap-2.5">
              <div className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold ${
                done
                  ? "bg-[var(--success)] text-white"
                  : "border-2 border-[var(--border-strong)]"
              }`}>
                {done && "✓"}
              </div>
              <span className={`text-xs ${done ? "text-[var(--text-muted)] line-through" : "text-[var(--text-secondary)]"}`}>
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Danger zone */}
      <div className="bg-white rounded-2xl border border-[var(--border-default)] p-5">
        <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-3">Account</h3>
        <div className="space-y-2">
          <button className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-[var(--bg-subtle)] transition-colors text-sm text-[var(--text-secondary)]">
            Change password
          </button>
          <button className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-[var(--danger-light)] transition-colors text-sm text-[var(--danger)]">
            Delete account
          </button>
        </div>
      </div>
    </div>
  );
}
