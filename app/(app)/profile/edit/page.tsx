import Link from "next/link";
import { ArrowLeft, Camera, Upload } from "lucide-react";

const industries = [
  "Technology", "Finance", "Marketing", "Design",
  "Product", "Sales", "Operations", "Healthcare", "Education", "Other",
];

export default function EditProfilePage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex items-center gap-3 mb-7">
        <Link
          href="/profile"
          className="w-8 h-8 rounded-lg border border-[var(--border-default)] flex items-center justify-center hover:bg-[var(--bg-muted)] transition-colors"
        >
          <ArrowLeft size={16} className="text-[var(--text-secondary)]" />
        </Link>
        <div>
          <h1 className="text-xl font-bold text-[var(--text-primary)]">Edit Profile</h1>
          <p className="text-xs text-[var(--text-muted)]">Update your professional details</p>
        </div>
      </div>

      <form className="space-y-5" action="/profile">
        {/* Photo upload */}
        <div className="bg-white rounded-2xl border border-[var(--border-default)] p-6">
          <h2 className="text-sm font-semibold text-[var(--text-primary)] mb-4">Profile photo</h2>
          <div className="flex items-center gap-5">
            <div className="relative">
              <img
                src="https://api.dicebear.com/9.x/avataaars/svg?seed=Alex&backgroundColor=b6e3f4"
                alt="Avatar"
                className="w-20 h-20 rounded-2xl bg-[var(--bg-muted)] border border-[var(--border-default)]"
              />
              <button
                type="button"
                className="absolute -bottom-1.5 -right-1.5 w-7 h-7 rounded-full bg-[var(--primary)] flex items-center justify-center shadow-md border-2 border-white"
              >
                <Camera size={12} className="text-white" />
              </button>
            </div>
            <div>
              <button
                type="button"
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium border border-[var(--border-default)] rounded-lg hover:bg-[var(--bg-subtle)] transition-colors text-[var(--text-primary)]"
              >
                <Upload size={14} />
                Upload new photo
              </button>
              <p className="text-xs text-[var(--text-muted)] mt-1.5">JPG, PNG or GIF. Max 5MB.</p>
            </div>
          </div>
        </div>

        {/* Basic info */}
        <div className="bg-white rounded-2xl border border-[var(--border-default)] p-6 space-y-4">
          <h2 className="text-sm font-semibold text-[var(--text-primary)]">Basic information</h2>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[var(--text-primary)] mb-1.5">First name</label>
              <input
                type="text"
                defaultValue="Alex"
                className="w-full px-3.5 py-2.5 rounded-lg border border-[var(--border-default)] text-sm text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[var(--text-primary)] mb-1.5">Last name</label>
              <input
                type="text"
                defaultValue="Morgan"
                className="w-full px-3.5 py-2.5 rounded-lg border border-[var(--border-default)] text-sm text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--text-primary)] mb-1.5">
              Job title / Profession
            </label>
            <input
              type="text"
              defaultValue="Product Designer"
              placeholder="e.g. Software Engineer, Marketing Manager"
              className="w-full px-3.5 py-2.5 rounded-lg border border-[var(--border-default)] text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--text-primary)] mb-1.5">
              Company (optional)
            </label>
            <input
              type="text"
              defaultValue="Airbnb"
              placeholder="Where do you work?"
              className="w-full px-3.5 py-2.5 rounded-lg border border-[var(--border-default)] text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--text-primary)] mb-1.5">Industry</label>
            <select
              className="w-full px-3.5 py-2.5 rounded-lg border border-[var(--border-default)] text-sm text-[var(--text-primary)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition appearance-none"
              defaultValue="design"
            >
              {industries.map(ind => (
                <option key={ind} value={ind.toLowerCase()}>{ind}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--text-primary)] mb-1.5">
              Location (optional)
            </label>
            <input
              type="text"
              defaultValue="San Francisco, CA"
              placeholder="City, Country"
              className="w-full px-3.5 py-2.5 rounded-lg border border-[var(--border-default)] text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition"
            />
          </div>
        </div>

        {/* Bio */}
        <div className="bg-white rounded-2xl border border-[var(--border-default)] p-6">
          <h2 className="text-sm font-semibold text-[var(--text-primary)] mb-4">About you</h2>
          <div>
            <label className="block text-sm font-medium text-[var(--text-primary)] mb-1.5">Bio</label>
            <textarea
              rows={4}
              defaultValue="Senior product designer with 6 years building B2B SaaS products. Passionate about design systems, accessibility, and bridging the gap between design and engineering. Always open to connecting with founders and PMs."
              placeholder="Tell others about yourself, your experience, and what you're looking for..."
              className="w-full px-3.5 py-2.5 rounded-lg border border-[var(--border-default)] text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition resize-none"
            />
            <p className="text-xs text-[var(--text-muted)] mt-1 text-right">230 / 500</p>
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-[var(--text-primary)] mb-1.5">
              Website (optional)
            </label>
            <input
              type="url"
              defaultValue="https://alexmorgan.design"
              placeholder="https://yourwebsite.com"
              className="w-full px-3.5 py-2.5 rounded-lg border border-[var(--border-default)] text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 pb-4">
          <button
            type="submit"
            className="flex-1 py-2.5 bg-[var(--primary)] text-white font-semibold rounded-lg text-sm hover:bg-[var(--primary-hover)] transition-colors"
          >
            Save changes
          </button>
          <Link
            href="/profile"
            className="flex-1 py-2.5 border border-[var(--border-default)] text-[var(--text-secondary)] font-semibold rounded-lg text-sm hover:bg-[var(--bg-subtle)] transition-colors text-center"
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}
