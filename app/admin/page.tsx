import Link from "next/link";
import { Users, UserCheck, MessageCircle, TrendingUp, AlertTriangle, Eye, Ban, Trash2, MoreVertical } from "lucide-react";

const stats = [
  { label: "Total Users", value: "2,841", change: "+12%", icon: Users, color: "bg-blue-50 text-blue-600" },
  { label: "Active Today", value: "342", change: "+8%", icon: UserCheck, color: "bg-green-50 text-green-600" },
  { label: "Messages Sent", value: "18.4K", change: "+23%", icon: MessageCircle, color: "bg-purple-50 text-purple-600" },
  { label: "Matches Made", value: "1,290", change: "+5%", icon: TrendingUp, color: "bg-amber-50 text-amber-600" },
];

const recentUsers = [
  { id: "1", name: "Emma Wilson", email: "emma@stripe.com", industry: "Technology", status: "active", joinedAt: "Apr 15, 2026", avatar: "Emma", matches: 12, flagged: false },
  { id: "2", name: "Daniel Park", email: "daniel@vercel.com", industry: "Technology", status: "active", joinedAt: "Apr 14, 2026", avatar: "Daniel", matches: 8, flagged: false },
  { id: "3", name: "Spam Account", email: "spam123@tempmail.com", industry: "Other", status: "flagged", joinedAt: "Apr 14, 2026", avatar: "Spam", matches: 0, flagged: true },
  { id: "4", name: "Priya Sharma", email: "priya@figma.com", industry: "Product", status: "active", joinedAt: "Apr 13, 2026", avatar: "Priya", matches: 24, flagged: false },
  { id: "5", name: "Marcus Johnson", email: "marcus@hubspot.com", industry: "Sales", status: "blocked", joinedAt: "Apr 12, 2026", avatar: "Marcus", matches: 3, flagged: false },
  { id: "6", name: "Laura Chen", email: "laura@stealth.io", industry: "Technology", status: "active", joinedAt: "Apr 11, 2026", avatar: "Laura", matches: 19, flagged: false },
];

const statusColors: Record<string, string> = {
  active: "bg-green-100 text-green-700",
  flagged: "bg-amber-100 text-amber-700",
  blocked: "bg-red-100 text-red-700",
};

const avatarGradients: Record<string, string> = {
  Emma: "from-violet-400 to-purple-500",
  Daniel: "from-blue-400 to-cyan-500",
  Priya: "from-rose-400 to-pink-500",
  Marcus: "from-amber-400 to-orange-500",
  Laura: "from-emerald-400 to-teal-500",
  Spam: "from-gray-400 to-gray-500",
};

export default function AdminPage() {
  const flaggedCount = recentUsers.filter(u => u.flagged || u.status === "flagged").length;

  return (
    <div className="px-6 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-7">
        <div>
          <h1 className="text-2xl font-bold text-[var(--text-primary)]">Admin Dashboard</h1>
          <p className="text-sm text-[var(--text-muted)]">April 15, 2026</p>
        </div>
        {flaggedCount > 0 && (
          <div className="flex items-center gap-2 px-3 py-2 bg-amber-50 border border-amber-200 rounded-xl text-sm text-amber-700 font-medium">
            <AlertTriangle size={14} />
            {flaggedCount} flagged account{flaggedCount > 1 ? "s" : ""}
          </div>
        )}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map(({ label, value, change, icon: Icon, color }) => (
          <div key={label} className="bg-white rounded-2xl border border-[var(--border-default)] p-5">
            <div className={`w-10 h-10 rounded-xl ${color} flex items-center justify-center mb-3`}>
              <Icon size={18} />
            </div>
            <p className="text-2xl font-bold text-[var(--text-primary)]">{value}</p>
            <p className="text-xs text-[var(--text-muted)] mt-0.5">{label}</p>
            <p className="text-xs text-green-600 font-medium mt-1">{change} this week</p>
          </div>
        ))}
      </div>

      {/* Users table */}
      <div className="bg-white rounded-2xl border border-[var(--border-default)]">
        {/* Table header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--border-default)]">
          <h2 className="text-base font-semibold text-[var(--text-primary)]">Recent Users</h2>
          <Link
            href="/admin/users"
            className="text-sm text-[var(--primary)] font-medium hover:underline"
          >
            View all
          </Link>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[var(--bg-subtle)] border-b border-[var(--border-default)]">
                <th className="px-6 py-3 text-left text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider">User</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider">Industry</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider">Status</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider">Matches</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider">Joined</th>
                <th className="px-4 py-3 text-right text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-default)]">
              {recentUsers.map(user => (
                <tr
                  key={user.id}
                  className={`hover:bg-[var(--bg-subtle)] transition-colors ${
                    user.flagged || user.status === "flagged" ? "bg-amber-50/50" : ""
                  }`}
                >
                  {/* User info */}
                  <td className="px-6 py-3.5">
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${avatarGradients[user.avatar] || "from-gray-400 to-gray-500"} overflow-hidden shrink-0`}>
                        <img
                          src={`https://api.dicebear.com/9.x/avataaars/svg?seed=${user.avatar}`}
                          alt={user.name}
                          className="w-full h-full"
                        />
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="font-medium text-[var(--text-primary)]">{user.name}</span>
                          {(user.flagged || user.status === "flagged") && (
                            <AlertTriangle size={12} className="text-amber-500" />
                          )}
                        </div>
                        <p className="text-xs text-[var(--text-muted)]">{user.email}</p>
                      </div>
                    </div>
                  </td>

                  <td className="px-4 py-3.5 text-[var(--text-secondary)]">{user.industry}</td>

                  {/* Status */}
                  <td className="px-4 py-3.5">
                    <span className={`px-2.5 py-1 text-xs font-medium rounded-full capitalize ${statusColors[user.status]}`}>
                      {user.status}
                    </span>
                  </td>

                  <td className="px-4 py-3.5 text-[var(--text-secondary)]">{user.matches}</td>
                  <td className="px-4 py-3.5 text-[var(--text-secondary)]">{user.joinedAt}</td>

                  {/* Actions */}
                  <td className="px-4 py-3.5">
                    <div className="flex items-center justify-end gap-1">
                      <button
                        title="View profile"
                        className="w-7 h-7 rounded-lg flex items-center justify-center text-[var(--text-muted)] hover:bg-[var(--bg-muted)] hover:text-[var(--text-primary)] transition-colors"
                      >
                        <Eye size={14} />
                      </button>
                      <button
                        title="Block user"
                        className="w-7 h-7 rounded-lg flex items-center justify-center text-[var(--text-muted)] hover:bg-amber-50 hover:text-amber-600 transition-colors"
                      >
                        <Ban size={14} />
                      </button>
                      <button
                        title="Delete user"
                        className="w-7 h-7 rounded-lg flex items-center justify-center text-[var(--text-muted)] hover:bg-[var(--danger-light)] hover:text-[var(--danger)] transition-colors"
                      >
                        <Trash2 size={14} />
                      </button>
                      <button className="w-7 h-7 rounded-lg flex items-center justify-center text-[var(--text-muted)] hover:bg-[var(--bg-muted)] transition-colors">
                        <MoreVertical size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Table footer */}
        <div className="flex items-center justify-between px-6 py-3.5 border-t border-[var(--border-default)]">
          <p className="text-xs text-[var(--text-muted)]">Showing 6 of 2,841 users</p>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 text-xs font-medium border border-[var(--border-default)] rounded-lg text-[var(--text-secondary)] hover:bg-[var(--bg-muted)] transition-colors disabled:opacity-40" disabled>
              Previous
            </button>
            <button className="px-3 py-1.5 text-xs font-medium border border-[var(--border-default)] rounded-lg text-[var(--text-secondary)] hover:bg-[var(--bg-muted)] transition-colors">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
