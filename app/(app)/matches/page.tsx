import Link from "next/link";
import { MessageCircle, Search, Briefcase, MapPin } from "lucide-react";

const matches = [
  {
    id: "1",
    name: "Emma Wilson",
    title: "UX Designer",
    company: "Stripe",
    location: "New York, NY",
    avatar: "Emma",
    matchedAt: "2h ago",
    isNew: true,
    bio: "Passionate about crafting delightful user experiences in fintech.",
    tags: ["UX Research", "Fintech"],
  },
  {
    id: "2",
    name: "Daniel Park",
    title: "Software Engineer",
    company: "Vercel",
    location: "Remote",
    avatar: "Daniel",
    matchedAt: "1d ago",
    isNew: true,
    bio: "Full-stack engineer obsessed with developer tooling and performance.",
    tags: ["React", "TypeScript"],
  },
  {
    id: "3",
    name: "Priya Sharma",
    title: "Growth Lead",
    company: "Figma",
    location: "San Francisco, CA",
    avatar: "Priya",
    matchedAt: "3d ago",
    isNew: false,
    bio: "Scaling user acquisition from 0 to 1M users. PLG enthusiast.",
    tags: ["Growth", "PLG"],
  },
  {
    id: "4",
    name: "Marcus Johnson",
    title: "Head of Sales",
    company: "HubSpot",
    location: "Boston, MA",
    avatar: "Marcus",
    matchedAt: "5d ago",
    isNew: false,
    bio: "Building and leading enterprise sales teams at B2B SaaS companies.",
    tags: ["Sales", "Enterprise"],
  },
  {
    id: "5",
    name: "Laura Chen",
    title: "Founder & CEO",
    company: "Stealth Startup",
    location: "Austin, TX",
    avatar: "Laura",
    matchedAt: "1w ago",
    isNew: false,
    bio: "Second-time founder working on AI-powered HR tools. Always open to advisors.",
    tags: ["Startup", "AI"],
  },
  {
    id: "6",
    name: "James Torres",
    title: "Data Scientist",
    company: "Airbnb",
    location: "Seattle, WA",
    avatar: "James",
    matchedAt: "2w ago",
    isNew: false,
    bio: "Using ML to improve trust & safety and pricing at Airbnb.",
    tags: ["ML", "Data"],
  },
];

const avatarColors: Record<string, string> = {
  Emma: "from-violet-400 to-purple-500",
  Daniel: "from-blue-400 to-cyan-500",
  Priya: "from-rose-400 to-pink-500",
  Marcus: "from-amber-400 to-orange-500",
  Laura: "from-emerald-400 to-teal-500",
  James: "from-indigo-400 to-blue-500",
};

export default function MatchesPage() {
  const newMatches = matches.filter(m => m.isNew);
  const olderMatches = matches.filter(m => !m.isNew);

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-[var(--text-primary)]">Matches</h1>
          <p className="text-sm text-[var(--text-muted)]">{matches.length} total · {newMatches.length} new</p>
        </div>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
        <input
          type="search"
          placeholder="Search matches..."
          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[var(--border-default)] bg-white text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition"
        />
      </div>

      {/* New matches (horizontal scroll) */}
      {newMatches.length > 0 && (
        <div className="mb-7">
          <h2 className="text-sm font-semibold text-[var(--text-primary)] mb-3">
            New matches
            <span className="ml-2 px-1.5 py-0.5 text-xs bg-[var(--primary)] text-white rounded-full">{newMatches.length}</span>
          </h2>
          <div className="flex gap-3 overflow-x-auto pb-2 -mx-1 px-1">
            {newMatches.map(match => (
              <div
                key={match.id}
                className="shrink-0 w-36 bg-white rounded-2xl border border-[var(--border-default)] p-4 text-center card-hover"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${avatarColors[match.avatar] || "from-gray-400 to-gray-500"} mx-auto mb-3 flex items-center justify-center overflow-hidden`}>
                  <img
                    src={`https://api.dicebear.com/9.x/avataaars/svg?seed=${match.avatar}`}
                    alt={match.name}
                    className="w-full h-full"
                  />
                </div>
                <p className="text-xs font-semibold text-[var(--text-primary)] truncate">{match.name.split(" ")[0]}</p>
                <p className="text-xs text-[var(--text-muted)] truncate mt-0.5">{match.title}</p>
                <div className="mt-2 flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-[var(--primary)] mr-1" />
                  <span className="text-xs text-[var(--primary)] font-medium">New!</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* All matches list */}
      <div>
        <h2 className="text-sm font-semibold text-[var(--text-primary)] mb-3">All connections</h2>
        <div className="space-y-3">
          {matches.map(match => (
            <div
              key={match.id}
              className="bg-white rounded-2xl border border-[var(--border-default)] p-4 flex gap-4 card-hover"
            >
              {/* Avatar */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${avatarColors[match.avatar] || "from-gray-400 to-gray-500"} shrink-0 overflow-hidden`}>
                <img
                  src={`https://api.dicebear.com/9.x/avataaars/svg?seed=${match.avatar}`}
                  alt={match.name}
                  className="w-full h-full"
                />
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-semibold text-[var(--text-primary)]">{match.name}</h3>
                      {match.isNew && (
                        <span className="px-1.5 py-0.5 text-[10px] font-bold bg-[var(--primary)] text-white rounded-full leading-none">NEW</span>
                      )}
                    </div>
                    <div className="flex items-center gap-1 mt-0.5">
                      <Briefcase size={11} className="text-[var(--text-muted)]" />
                      <span className="text-xs text-[var(--text-secondary)]">{match.title} · {match.company}</span>
                    </div>
                    <div className="flex items-center gap-1 mt-0.5">
                      <MapPin size={11} className="text-[var(--text-muted)]" />
                      <span className="text-xs text-[var(--text-muted)]">{match.location}</span>
                    </div>
                  </div>
                  <span className="text-xs text-[var(--text-muted)] shrink-0">{match.matchedAt}</span>
                </div>

                <p className="text-xs text-[var(--text-secondary)] mt-2 line-clamp-1">{match.bio}</p>

                {/* Tags + action */}
                <div className="flex items-center justify-between mt-3">
                  <div className="flex gap-1.5">
                    {match.tags.map(tag => (
                      <span key={tag} className="px-2 py-0.5 text-xs bg-[var(--bg-muted)] text-[var(--text-secondary)] rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/messages/${match.id}`}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-[var(--primary)] text-white rounded-lg hover:bg-[var(--primary-hover)] transition-colors"
                  >
                    <MessageCircle size={12} />
                    Message
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
