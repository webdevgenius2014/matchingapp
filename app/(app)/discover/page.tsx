"use client";
import { useState } from "react";
import { X, Check, Briefcase, MapPin, Link2, SlidersHorizontal, ChevronDown } from "lucide-react";

const profiles = [
  {
    id: 1,
    name: "Emma Wilson",
    title: "UX Designer",
    company: "Stripe",
    industry: "Technology",
    location: "New York, NY",
    bio: "Passionate about crafting delightful user experiences in fintech. 5 years at startups and now leading design at Stripe's payments team.",
    avatar: "Emma",
    bgGradient: "from-violet-400 to-purple-600",
    tags: ["UX Research", "Design Systems", "Fintech"],
    website: "emmawilson.co",
  },
  {
    id: 2,
    name: "Daniel Park",
    title: "Software Engineer",
    company: "Vercel",
    industry: "Technology",
    location: "Remote",
    bio: "Full-stack engineer obsessed with developer tooling and performance. Building the future of web deployments.",
    avatar: "Daniel",
    bgGradient: "from-blue-400 to-cyan-600",
    tags: ["React", "TypeScript", "Node.js"],
    website: "danielpark.dev",
  },
  {
    id: 3,
    name: "Maya Chen",
    title: "Product Manager",
    company: "Notion",
    industry: "Product",
    location: "San Francisco, CA",
    bio: "PM with a design background. Shipped 3 products from 0→1. Love working at the intersection of user needs and business goals.",
    avatar: "Maya",
    bgGradient: "from-emerald-400 to-teal-600",
    tags: ["Product Strategy", "0→1", "Growth"],
    website: "mayachen.io",
  },
];

const gradientColors: Record<string, string> = {
  "from-violet-400 to-purple-600": "#7c3aed",
  "from-blue-400 to-cyan-600": "#0891b2",
  "from-emerald-400 to-teal-600": "#0d9488",
};

export default function DiscoverPage() {
  const [current, setCurrent] = useState(0);
  const [swipeDir, setSwipeDir] = useState<"left" | "right" | null>(null);
  const [showFilter, setShowFilter] = useState(false);

  const profile = profiles[current % profiles.length];

  const handleSwipe = (dir: "left" | "right") => {
    setSwipeDir(dir);
    setTimeout(() => {
      setSwipeDir(null);
      setCurrent(c => c + 1);
    }, 350);
  };

  const allDone = current >= profiles.length;

  return (
    <div className="flex flex-col h-full max-w-lg mx-auto px-4 py-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-[var(--text-primary)]">Discover</h1>
          <p className="text-sm text-[var(--text-muted)]">{profiles.length - Math.min(current, profiles.length)} profiles left today</p>
        </div>
        <button
          onClick={() => setShowFilter(!showFilter)}
          className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium border border-[var(--border-default)] rounded-lg text-[var(--text-secondary)] hover:bg-[var(--bg-muted)] transition-colors"
        >
          <SlidersHorizontal size={14} />
          Filters
          <ChevronDown size={12} className={`transition-transform ${showFilter ? "rotate-180" : ""}`} />
        </button>
      </div>

      {/* Filter panel */}
      {showFilter && (
        <div className="bg-white rounded-2xl border border-[var(--border-default)] p-5 mb-5 shadow-sm">
          <h2 className="text-sm font-semibold text-[var(--text-primary)] mb-4">Filter by industry</h2>
          <div className="flex flex-wrap gap-2">
            {["All", "Technology", "Finance", "Marketing", "Design", "Product", "Sales"].map(tag => (
              <button
                key={tag}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  tag === "All"
                    ? "bg-[var(--primary)] text-white"
                    : "bg-[var(--bg-muted)] text-[var(--text-secondary)] hover:bg-[var(--primary-light)] hover:text-[var(--primary)]"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Card stack */}
      {allDone ? (
        <div className="flex-1 flex flex-col items-center justify-center text-center">
          <div className="w-20 h-20 rounded-3xl bg-[var(--primary-light)] flex items-center justify-center mb-5">
            <Check size={32} className="text-[var(--primary)]" />
          </div>
          <h2 className="text-xl font-bold text-[var(--text-primary)] mb-2">You&apos;re all caught up!</h2>
          <p className="text-sm text-[var(--text-secondary)] max-w-xs">
            Check back tomorrow for fresh profiles. Meanwhile, view your matches.
          </p>
        </div>
      ) : (
        <div className="flex-1 flex flex-col">
          {/* Stacked cards */}
          <div className="relative flex-1 min-h-[480px]">
            {/* Background cards */}
            {profiles.slice(current + 1, current + 3).reverse().map((p, i) => (
              <div
                key={p.id}
                className="absolute inset-0 bg-white rounded-3xl border border-[var(--border-default)] shadow-sm"
                style={{
                  transform: `translateX(${(i + 1) * 6}px) translateY(${-(i + 1) * 6}px)`,
                  zIndex: 10 - i,
                }}
              />
            ))}

            {/* Active card */}
            <div
              className={`absolute inset-0 bg-white rounded-3xl border border-[var(--border-default)] shadow-md flex flex-col overflow-hidden z-20 ${
                swipeDir === "left" ? "swipe-left" : swipeDir === "right" ? "swipe-right" : ""
              }`}
            >
              {/* Card header / avatar area */}
              <div
                className={`h-56 bg-gradient-to-br ${profile.bgGradient} flex items-end p-5 relative`}
              >
                <img
                  src={`https://api.dicebear.com/9.x/avataaars/svg?seed=${profile.avatar}&backgroundColor=b6e3f4`}
                  alt={profile.name}
                  className="absolute top-6 left-1/2 -translate-x-1/2 w-28 h-28"
                />
                <div className="absolute top-4 right-4">
                  <span className="px-2.5 py-1 text-xs font-medium bg-white/20 text-white rounded-full backdrop-blur-sm">
                    {profile.industry}
                  </span>
                </div>
              </div>

              {/* Card body */}
              <div className="flex-1 p-5 overflow-y-auto">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h2 className="text-xl font-bold text-[var(--text-primary)]">{profile.name}</h2>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <Briefcase size={12} className="text-[var(--text-muted)]" />
                      <span className="text-sm text-[var(--text-secondary)]">{profile.title} at {profile.company}</span>
                    </div>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <MapPin size={12} className="text-[var(--text-muted)]" />
                      <span className="text-xs text-[var(--text-muted)]">{profile.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">{profile.bio}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {profile.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-medium bg-[var(--bg-subtle)] text-[var(--text-secondary)] rounded-lg border border-[var(--border-default)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {profile.website && (
                  <div className="flex items-center gap-1.5">
                    <Link2 size={12} className="text-[var(--text-muted)]" />
                    <span className="text-xs text-[var(--primary)]">{profile.website}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center justify-center gap-8 mt-6 mb-2">
            <button
              onClick={() => handleSwipe("left")}
              className="w-16 h-16 rounded-full bg-white border-2 border-[var(--danger)] flex items-center justify-center text-[var(--danger)] hover:bg-[var(--danger-light)] transition-colors shadow-sm active:scale-95 disabled:opacity-50"
              disabled={!!swipeDir}
            >
              <X size={24} strokeWidth={2.5} />
            </button>

            <button
              onClick={() => handleSwipe("right")}
              className="w-16 h-16 rounded-full bg-white border-2 border-[var(--success)] flex items-center justify-center text-[var(--success)] hover:bg-[var(--success-light)] transition-colors shadow-sm active:scale-95 disabled:opacity-50"
              disabled={!!swipeDir}
            >
              <Check size={24} strokeWidth={2.5} />
            </button>
          </div>

          <p className="text-center text-xs text-[var(--text-muted)]">
            Swipe or tap the buttons
          </p>
        </div>
      )}
    </div>
  );
}
