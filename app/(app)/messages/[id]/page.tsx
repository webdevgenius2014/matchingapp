"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Send, MoreVertical, Phone, Video, Info } from "lucide-react";

const contacts: Record<string, { name: string; avatar: string; title: string; online: boolean; gradient: string }> = {
  "1": { name: "Emma Wilson", avatar: "Emma", title: "UX Designer · Stripe", online: true, gradient: "from-violet-400 to-purple-500" },
  "2": { name: "Daniel Park", avatar: "Daniel", title: "Software Engineer · Vercel", online: true, gradient: "from-blue-400 to-cyan-500" },
  "3": { name: "Priya Sharma", avatar: "Priya", title: "Growth Lead · Figma", online: false, gradient: "from-rose-400 to-pink-500" },
};

const initialMessages = [
  { id: 1, from: "them", text: "Hey! I saw your profile and would love to connect.", time: "10:32 AM" },
  { id: 2, from: "me", text: "Hi Emma! Thanks for reaching out. Your work at Stripe looks incredible.", time: "10:35 AM" },
  { id: 3, from: "them", text: "Thanks! I've been following your design system work — really solid approach to tokens.", time: "10:37 AM" },
  { id: 4, from: "me", text: "Appreciate that! I'd love to pick your brain about scaling design at a company like Stripe someday.", time: "10:40 AM" },
  { id: 5, from: "them", text: "Absolutely, I'm happy to chat. Are you open to a quick 30-min call this week?", time: "10:41 AM" },
  { id: 6, from: "me", text: "That sounds great! When are you free?", time: "10:43 AM" },
  { id: 7, from: "them", text: "That sounds great! When are you free to hop on a call?", time: "2:14 PM" },
];

export default function ChatPage({ params }: { params: { id: string } }) {
  const contact = contacts[params.id] || contacts["1"];
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages(prev => [
      ...prev,
      { id: prev.length + 1, from: "me", text: input.trim(), time: "Now" },
    ]);
    setInput("");
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Chat header */}
      <header className="flex items-center gap-3 px-4 py-3.5 bg-white border-b border-[var(--border-default)] shrink-0">
        <Link
          href="/messages"
          className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-[var(--bg-muted)] transition-colors text-[var(--text-secondary)]"
        >
          <ArrowLeft size={18} />
        </Link>

        {/* Contact info */}
        <div className="relative">
          <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${contact.gradient} overflow-hidden`}>
            <img
              src={`https://api.dicebear.com/9.x/avataaars/svg?seed=${contact.avatar}`}
              alt={contact.name}
              className="w-full h-full"
            />
          </div>
          {contact.online && (
            <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-[var(--success)] border-2 border-white" />
          )}
        </div>

        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-[var(--text-primary)] truncate">{contact.name}</p>
          <p className="text-xs text-[var(--text-muted)] truncate">
            {contact.online ? (
              <span className="text-[var(--success)]">● Online</span>
            ) : contact.title}
          </p>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-1">
          <button className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-[var(--bg-muted)] transition-colors text-[var(--text-secondary)]">
            <Phone size={16} />
          </button>
          <button className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-[var(--bg-muted)] transition-colors text-[var(--text-secondary)]">
            <Video size={16} />
          </button>
          <button className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-[var(--bg-muted)] transition-colors text-[var(--text-secondary)]">
            <Info size={16} />
          </button>
          <button className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-[var(--bg-muted)] transition-colors text-[var(--text-secondary)]">
            <MoreVertical size={16} />
          </button>
        </div>
      </header>

      {/* Match banner */}
      <div className="bg-gradient-to-r from-[var(--primary-light)] to-indigo-50 border-b border-indigo-100 px-4 py-2.5 text-center shrink-0">
        <p className="text-xs text-[var(--primary)] font-medium">
          🎉 You matched with {contact.name.split(" ")[0]}! Start a conversation.
        </p>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-[var(--bg-subtle)]">
        {/* Date separator */}
        <div className="flex items-center gap-3 my-2">
          <div className="flex-1 h-px bg-[var(--border-default)]" />
          <span className="text-xs text-[var(--text-muted)] shrink-0">Today</span>
          <div className="flex-1 h-px bg-[var(--border-default)]" />
        </div>

        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.from === "me" ? "justify-end" : "justify-start"}`}
          >
            {msg.from === "them" && (
              <div className={`w-7 h-7 rounded-lg bg-gradient-to-br ${contact.gradient} overflow-hidden shrink-0 mr-2 mt-auto`}>
                <img
                  src={`https://api.dicebear.com/9.x/avataaars/svg?seed=${contact.avatar}`}
                  alt={contact.name}
                  className="w-full h-full"
                />
              </div>
            )}
            <div className={`max-w-xs lg:max-w-sm group`}>
              <div
                className={`px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                  msg.from === "me"
                    ? "bg-[var(--primary)] text-white rounded-br-sm"
                    : "bg-white border border-[var(--border-default)] text-[var(--text-primary)] rounded-bl-sm"
                }`}
              >
                {msg.text}
              </div>
              <p className={`text-[10px] text-[var(--text-muted)] mt-1 ${msg.from === "me" ? "text-right" : "text-left"}`}>
                {msg.time}
              </p>
            </div>
          </div>
        ))}

        {/* Typing indicator */}
        <div className="flex items-end gap-2">
          <div className={`w-7 h-7 rounded-lg bg-gradient-to-br ${contact.gradient} overflow-hidden shrink-0`}>
            <img
              src={`https://api.dicebear.com/9.x/avataaars/svg?seed=${contact.avatar}`}
              alt={contact.name}
              className="w-full h-full"
            />
          </div>
          <div className="bg-white border border-[var(--border-default)] px-4 py-3 rounded-2xl rounded-bl-sm flex items-center gap-1">
            {[0, 1, 2].map(i => (
              <span
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-[var(--text-muted)] animate-bounce"
                style={{ animationDelay: `${i * 0.15}s` }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Input bar */}
      <div className="px-4 py-3 bg-white border-t border-[var(--border-default)] shrink-0">
        <div className="flex items-end gap-2">
          <div className="flex-1 relative">
            <textarea
              rows={1}
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  sendMessage();
                }
              }}
              placeholder="Type a message..."
              className="w-full px-4 py-2.5 rounded-2xl border border-[var(--border-default)] text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent resize-none transition"
              style={{ maxHeight: "120px" }}
            />
          </div>
          <button
            onClick={sendMessage}
            disabled={!input.trim()}
            className="w-10 h-10 rounded-full bg-[var(--primary)] flex items-center justify-center text-white hover:bg-[var(--primary-hover)] transition-colors disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
          >
            <Send size={16} />
          </button>
        </div>
        <p className="text-[10px] text-center text-[var(--text-muted)] mt-2">Press Enter to send · Shift+Enter for new line</p>
      </div>
    </div>
  );
}
