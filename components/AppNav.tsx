"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Compass, MessageCircle, Users, User, LogOut, Zap } from "lucide-react";

const navItems = [
  { href: "/discover", label: "Discover", icon: Compass },
  { href: "/matches",  label: "Matches",  icon: Users },
  { href: "/messages", label: "Messages", icon: MessageCircle },
  { href: "/profile",  label: "Profile",  icon: User },
];

export default function AppNav() {
  const pathname = usePathname();
  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden md:flex flex-col w-64 shrink-0 border-r border-[var(--border-default)] bg-white h-screen sticky top-0">
        {/* Logo */}
        <div className="flex items-center gap-2 px-6 py-5 border-b border-[var(--border-default)]">
          <div className="w-8 h-8 rounded-lg bg-[var(--primary)] flex items-center justify-center">
            <Zap size={16} className="text-white" />
          </div>
          <span className="text-lg font-bold text-[var(--text-primary)]">ConnectPro</span>
        </div>

        {/* Nav links */}
        <nav className="flex-1 px-3 py-4 space-y-1">
          {navItems.map(({ href, label, icon: Icon }) => {
            const active = pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  active
                    ? "bg-[var(--primary-light)] text-[var(--primary)]"
                    : "text-[var(--text-secondary)] hover:bg-[var(--bg-subtle)] hover:text-[var(--text-primary)]"
                }`}
              >
                <Icon size={18} />
                {label}
              </Link>
            );
          })}
        </nav>

        {/* User + logout */}
        <div className="px-3 py-4 border-t border-[var(--border-default)]">
          <div className="flex items-center gap-3 px-3 py-2 mb-1">
            <img
              src="https://api.dicebear.com/9.x/avataaars/svg?seed=Alex"
              alt="You"
              className="w-8 h-8 rounded-full bg-[var(--bg-muted)]"
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-[var(--text-primary)] truncate">Alex Morgan</p>
              <p className="text-xs text-[var(--text-muted)] truncate">Product Designer</p>
            </div>
          </div>
          <Link
            href="/login"
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-[var(--text-secondary)] hover:bg-[var(--bg-subtle)] hover:text-[var(--danger)] transition-colors"
          >
            <LogOut size={16} />
            Sign out
          </Link>
        </div>
      </aside>

      {/* Mobile bottom nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-[var(--border-default)] flex">
        {navItems.map(({ href, label, icon: Icon }) => {
          const active = pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className={`flex-1 flex flex-col items-center gap-1 py-3 text-xs font-medium transition-colors ${
                active ? "text-[var(--primary)]" : "text-[var(--text-muted)]"
              }`}
            >
              <Icon size={20} />
              {label}
            </Link>
          );
        })}
      </nav>
    </>
  );
}
