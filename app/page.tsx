import Link from "next/link";
import { ArrowRight, Zap, Users, MessageCircle, ShieldCheck, Star } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Smart Matching",
    desc: "Swipe through professionals curated for your industry and goals.",
  },
  {
    icon: Users,
    title: "Mutual Connections",
    desc: "Only connect when both parties show interest — no awkward cold outreach.",
  },
  {
    icon: MessageCircle,
    title: "Direct Messaging",
    desc: "Chat instantly with every mutual match. No gatekeeping.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Profiles",
    desc: "Real professionals, real industries. Quality over quantity.",
  },
];

const testimonials = [
  {
    name: "Sarah K.",
    role: "Marketing Director",
    avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Sarah",
    text: "Found my co-founder through ConnectPro in under two weeks. The swipe model just works.",
  },
  {
    name: "James L.",
    role: "Software Engineer",
    avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=James",
    text: "Way better signal-to-noise ratio than LinkedIn. Every match has been genuinely useful.",
  },
  {
    name: "Priya M.",
    role: "Product Manager",
    avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Priya",
    text: "I landed my current role through a ConnectPro match. Couldn't recommend it more.",
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-[var(--border-default)]">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[var(--primary)] flex items-center justify-center">
              <Zap size={16} className="text-white" />
            </div>
            <span className="text-lg font-bold text-[var(--text-primary)]">ConnectPro</span>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              Sign in
            </Link>
            <Link
              href="/signup"
              className="text-sm font-semibold px-4 py-2 bg-[var(--primary)] text-white rounded-lg hover:bg-[var(--primary-hover)] transition-colors"
            >
              Get started
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-20 pb-28 px-6 bg-gradient-to-b from-[var(--primary-light)] to-white">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--primary-light)] border border-indigo-200 text-xs font-medium text-[var(--primary)] mb-6">
            <Star size={12} /> Professional Networking, Reimagined
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-[var(--text-primary)] leading-tight mb-6">
            Swipe right on your
            <span className="text-[var(--primary)]"> next big opportunity</span>
          </h1>
          <p className="text-xl text-[var(--text-secondary)] mb-10 max-w-xl mx-auto leading-relaxed">
            Connect with the right professionals through a fast, intuitive swipe experience. Build your network based on mutual interest.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--primary)] text-white font-semibold rounded-xl hover:bg-[var(--primary-hover)] transition-colors text-sm"
            >
              Create free account <ArrowRight size={16} />
            </Link>
            <Link
              href="/login"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[var(--text-primary)] font-semibold rounded-xl border border-[var(--border-default)] hover:bg-[var(--bg-subtle)] transition-colors text-sm"
            >
              Sign in
            </Link>
          </div>
        </div>

        {/* Mock app preview */}
        <div className="mt-16 mx-auto max-w-sm">
          <div className="relative bg-white rounded-3xl shadow-2xl border border-[var(--border-default)] overflow-hidden p-6">
            <div className="flex items-center justify-between mb-4">
              <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider">Today&#39;s Picks</p>
              <span className="text-xs bg-[var(--primary-light)] text-[var(--primary)] px-2 py-0.5 rounded-full font-medium">12 new</span>
            </div>
            {/* Stacked cards preview */}
            <div className="relative h-64">
              <div className="absolute inset-0 translate-x-3 -translate-y-2 bg-indigo-50 rounded-2xl border border-indigo-100" />
              <div className="absolute inset-0 translate-x-1.5 -translate-y-1 bg-indigo-50/60 rounded-2xl border border-indigo-100" />
              <div className="absolute inset-0 bg-white rounded-2xl border border-[var(--border-default)] shadow-sm flex flex-col">
                <div className="h-36 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-t-2xl flex items-center justify-center">
                  <img
                    src="https://api.dicebear.com/9.x/avataaars/svg?seed=Emma&backgroundColor=b6e3f4"
                    alt="Profile"
                    className="w-24 h-24"
                  />
                </div>
                <div className="p-4 flex-1">
                  <h3 className="font-bold text-[var(--text-primary)]">Emma Wilson</h3>
                  <p className="text-xs text-[var(--text-secondary)]">UX Designer at Stripe</p>
                  <p className="text-xs text-[var(--text-muted)] mt-2 line-clamp-2">
                    Passionate about creating delightful user experiences in fintech.
                  </p>
                </div>
              </div>
            </div>
            {/* Action buttons */}
            <div className="flex justify-center gap-6 mt-5">
              <button className="w-14 h-14 rounded-full bg-[var(--danger-light)] flex items-center justify-center text-[var(--danger)] text-xl font-bold shadow-sm border border-red-100">
                ✕
              </button>
              <button className="w-14 h-14 rounded-full bg-[var(--success-light)] flex items-center justify-center text-[var(--success)] text-xl font-bold shadow-sm border border-green-100">
                ✓
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6 bg-white">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-4">
              Everything you need to network smarter
            </h2>
            <p className="text-[var(--text-secondary)] max-w-lg mx-auto">
              No noise, no spam. Just meaningful connections with people who genuinely want to connect with you.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="flex gap-4 p-6 rounded-2xl border border-[var(--border-default)] bg-white card-hover"
              >
                <div className="w-10 h-10 rounded-xl bg-[var(--primary-light)] flex items-center justify-center shrink-0">
                  <Icon size={20} className="text-[var(--primary)]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--text-primary)] mb-1">{title}</h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="py-24 px-6 bg-[var(--bg-subtle)]">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-[var(--text-primary)] text-center mb-12">
            Loved by professionals
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map(({ name, role, avatar, text }) => (
              <div key={name} className="bg-white rounded-2xl p-6 border border-[var(--border-default)] card-hover">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">&quot;{text}&quot;</p>
                <div className="flex items-center gap-3">
                  <img src={avatar} alt={name} className="w-9 h-9 rounded-full bg-[var(--bg-muted)]" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">{name}</p>
                    <p className="text-xs text-[var(--text-muted)]">{role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-[var(--primary)]">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to grow your network?
          </h2>
          <p className="text-indigo-200 mb-8">
            Join thousands of professionals already building meaningful connections.
          </p>
          <Link
            href="/signup"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-[var(--primary)] font-semibold rounded-xl hover:bg-indigo-50 transition-colors"
          >
            Start for free <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-[var(--border-default)] bg-white">
        <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-[var(--primary)] flex items-center justify-center">
              <Zap size={12} className="text-white" />
            </div>
            <span className="text-sm font-bold text-[var(--text-primary)]">ConnectPro</span>
          </div>
          <p className="text-xs text-[var(--text-muted)]">© 2026 ConnectPro. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
