import Link from "next/link";
import { Search, Edit2 } from "lucide-react";

const conversations = [
  {
    id: "1",
    name: "Emma Wilson",
    avatar: "Emma",
    lastMessage: "That sounds great! When are you free to hop on a call?",
    time: "2m ago",
    unread: 2,
    online: true,
    title: "UX Designer · Stripe",
  },
  {
    id: "2",
    name: "Daniel Park",
    avatar: "Daniel",
    lastMessage: "I saw your work on the design system — really impressive!",
    time: "1h ago",
    unread: 1,
    online: true,
    title: "Software Engineer · Vercel",
  },
  {
    id: "3",
    name: "Priya Sharma",
    avatar: "Priya",
    lastMessage: "Would love to share some notes on PLG from Figma's playbook.",
    time: "3h ago",
    unread: 0,
    online: false,
    title: "Growth Lead · Figma",
  },
  {
    id: "4",
    name: "Marcus Johnson",
    avatar: "Marcus",
    lastMessage: "Thanks for connecting! Let's find time to chat.",
    time: "Yesterday",
    unread: 0,
    online: false,
    title: "Head of Sales · HubSpot",
  },
  {
    id: "5",
    name: "Laura Chen",
    avatar: "Laura",
    lastMessage: "You: Happy to advise. Send over the deck when ready!",
    time: "2d ago",
    unread: 0,
    online: false,
    title: "Founder & CEO",
  },
  {
    id: "6",
    name: "James Torres",
    avatar: "James",
    lastMessage: "You: Interesting use case! Let's discuss further.",
    time: "1w ago",
    unread: 0,
    online: false,
    title: "Data Scientist · Airbnb",
  },
];

const avatarGradients: Record<string, string> = {
  Emma: "from-violet-400 to-purple-500",
  Daniel: "from-blue-400 to-cyan-500",
  Priya: "from-rose-400 to-pink-500",
  Marcus: "from-amber-400 to-orange-500",
  Laura: "from-emerald-400 to-teal-500",
  James: "from-indigo-400 to-blue-500",
};

export default function MessagesPage() {
  const totalUnread = conversations.reduce((sum, c) => sum + c.unread, 0);

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-[var(--text-primary)]">Messages</h1>
          {totalUnread > 0 && (
            <p className="text-sm text-[var(--text-muted)]">{totalUnread} unread</p>
          )}
        </div>
        <button className="w-9 h-9 rounded-xl border border-[var(--border-default)] flex items-center justify-center hover:bg-[var(--bg-muted)] transition-colors text-[var(--text-secondary)]">
          <Edit2 size={15} />
        </button>
      </div>

      {/* Search */}
      <div className="relative mb-5">
        <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
        <input
          type="search"
          placeholder="Search conversations..."
          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[var(--border-default)] bg-white text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition"
        />
      </div>

      {/* Conversations list */}
      <div className="bg-white rounded-2xl border border-[var(--border-default)] overflow-hidden divide-y divide-[var(--border-default)]">
        {conversations.map(convo => (
          <Link
            key={convo.id}
            href={`/messages/${convo.id}`}
            className={`flex items-start gap-3.5 px-4 py-4 hover:bg-[var(--bg-subtle)] transition-colors ${
              convo.unread > 0 ? "bg-[var(--primary-light)]/30" : ""
            }`}
          >
            {/* Avatar with online indicator */}
            <div className="relative shrink-0">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${avatarGradients[convo.avatar] || "from-gray-400 to-gray-500"} overflow-hidden`}>
                <img
                  src={`https://api.dicebear.com/9.x/avataaars/svg?seed=${convo.avatar}`}
                  alt={convo.name}
                  className="w-full h-full"
                />
              </div>
              {convo.online && (
                <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-[var(--success)] border-2 border-white" />
              )}
            </div>

            {/* Message info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-0.5">
                <span className={`text-sm ${convo.unread > 0 ? "font-bold text-[var(--text-primary)]" : "font-semibold text-[var(--text-primary)]"}`}>
                  {convo.name}
                </span>
                <span className="text-xs text-[var(--text-muted)] shrink-0 ml-2">{convo.time}</span>
              </div>
              <p className="text-xs text-[var(--text-muted)] mb-1 truncate">{convo.title}</p>
              <p className={`text-sm truncate ${convo.unread > 0 ? "text-[var(--text-primary)] font-medium" : "text-[var(--text-secondary)]"}`}>
                {convo.lastMessage}
              </p>
            </div>

            {/* Unread badge */}
            {convo.unread > 0 && (
              <span className="shrink-0 mt-1 min-w-[20px] h-5 px-1.5 bg-[var(--primary)] text-white text-xs font-bold rounded-full flex items-center justify-center">
                {convo.unread}
              </span>
            )}
          </Link>
        ))}
      </div>

      {/* Empty state hint */}
      <p className="text-center text-xs text-[var(--text-muted)] mt-6">
        You can only message your mutual matches
      </p>
    </div>
  );
}
