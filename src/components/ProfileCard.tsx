import { MapPin, Mail, Linkedin, Github, Download, FileText, ArrowDown, Calendar, Check, GraduationCap, BarChart3, Stethoscope, Zap, TrendingUp } from "lucide-react";
import { useState } from "react";
import { profileData } from "../data";

interface ProfileCardProps {
  onScrollToSection: (sectionId: string) => void;
  darkMode: boolean;
}

export default function ProfileCard({ onScrollToSection, darkMode }: ProfileCardProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Primary Card */}
      <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-xs leading-relaxed transition-colors duration-200">
        {/* Avatar & Availability Badge */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-zinc-100 dark:border-zinc-800">
          <div className="relative">
            <div className="h-28 w-28 overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 shadow-xs">
              <img
                src={darkMode ? profileData.profileImageDark : profileData.profileImage}
                alt={`${profileData.name} portrait`}
                className="h-full w-full object-cover object-top"
                loading="lazy"
              />
            </div>
            {/* Active Status Pulse */}
            <span className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-white dark:bg-zinc-900 border-2 border-white dark:border-zinc-900 shadow-xs">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
            </span>
          </div>

          {/* <div className="inline-flex items-center gap-1.5 rounded-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-150 dark:border-zinc-700 px-2.5 py-1 text-[11px] font-mono text-zinc-500 dark:text-zinc-400 font-medium">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <span>Available for Collaboration</span>
          </div> */}
        </div>

        {/* Name and Professional Title */}
        <div className="pt-3 space-y-2">
          <h1 className="font-display text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 leading-tight">
            {profileData.name}
          </h1>
          <p className="font-mono text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest line-clamp-3">
            {profileData.title}
          </p>
          <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed font-sans pt-1">
            {profileData.tagline}
          </p>
        </div>

        {/* Location & Time info (Academic elegance) */}
        <div className="pt-4 space-y-2 text-xs font-mono text-zinc-500 dark:text-zinc-400">
          <div className="flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5 text-zinc-400 dark:text-zinc-500" />
            <span>{profileData.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-3.5 w-3.5 text-zinc-400 dark:text-zinc-500" />
            <span>UTC+8 Timezone</span>
          </div>
        </div>

        {/* Primary Call-to-actions */}
        <div className="grid grid-cols-1 gap-2 pt-5">
          <button
            id="view-projects-profile-btn"
            onClick={() => onScrollToSection("projects")}
            className="w-full flex items-center justify-center gap-2 rounded-lg bg-zinc-900 dark:bg-zinc-100 px-4 py-2 text-xs font-medium text-white dark:text-zinc-900 transition-colors hover:bg-zinc-800 dark:hover:bg-zinc-200 active:bg-zinc-950 dark:active:bg-zinc-300 cursor-pointer"
          >
            <ArrowDown className="h-3 w-3" />
            <span>View Projects</span>
          </button>

          <div className="grid grid-cols-2 gap-2">
            <button
              id="contact-profile-btn"
              onClick={() => onScrollToSection("contact")}
              className="w-full flex items-center justify-center gap-1.5 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 px-3 py-1.5 text-xs font-medium text-zinc-700 dark:text-zinc-200 transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-700 active:bg-zinc-100 dark:active:bg-zinc-700 cursor-pointer"
            >
              <span>Contact</span>
            </button>
            <a
              id="download-cv-btn"
              href={profileData.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 px-3 py-1.5 text-xs font-medium text-zinc-700 dark:text-zinc-200 transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-700 active:bg-zinc-100 dark:active:bg-zinc-700"
            >
              <Download className="h-3 w-3 text-zinc-500 dark:text-zinc-400" />
              <span>Resume</span>
            </a>
          </div>
        </div>
      </div>

      {/* Social Integration Deck */}
      <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-4 shadow-xs transition-colors duration-200">
        <h4 className="font-mono text-[10px] uppercase font-semibold text-zinc-400 dark:text-zinc-500 tracking-wider mb-3">
          Connect with Me
        </h4>
        <div className="space-y-2">
          {/* Email bar */}
          <div className="group flex items-center justify-between rounded-lg border border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/40 p-2 transition-colors hover:bg-zinc-150 dark:hover:bg-zinc-800">
            <div className="flex items-center gap-2.5 overflow-hidden">
              <Mail className="h-4 w-4 text-zinc-400 dark:text-zinc-500 shrink-0" />
              <span className="font-mono text-xs text-zinc-600 dark:text-zinc-300 truncate">{profileData.email}</span>
            </div>
            <button
              id="copy-email-btn"
              onClick={copyEmailToClipboard}
              className="rounded-md border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 p-1 hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors text-zinc-500 dark:text-zinc-400 cursor-pointer shrink-0"
              title="Copy email to clipboard"
            >
              {copiedEmail ? <Check className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" /> : <FileText className="h-3.5 w-3.5" />}
            </button>
          </div>

          {/* Social Links */}
          <div className="grid grid-cols-2 gap-2">
            <a
              id="linkedin-link"
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-800 px-3 py-2.5 text-xs text-zinc-600 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-700 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              <Linkedin className="h-4 w-4 text-zinc-400 dark:text-zinc-500" />
              <span className="font-mono">LinkedIn</span>
            </a>
            <a
              id="github-link"
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-800 px-3 py-2.5 text-xs text-zinc-600 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-700 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              <Github className="h-4 w-4 text-zinc-400 dark:text-zinc-500" />
              <span className="font-mono">GitHub</span>
            </a>
          </div>
        </div>
      </div>

      {/* Focus Core Badges */}
      <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-4 shadow-xs hidden lg:block transition-colors duration-200">
        <h4 className="font-mono text-[10px] uppercase font-semibold text-zinc-400 dark:text-zinc-500 tracking-wider mb-3">
          Focus Core
        </h4>
        <div className="flex flex-wrap gap-1.5">
          <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-[11px] font-medium bg-zinc-50 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 border border-zinc-300 dark:border-zinc-700">
            <GraduationCap className="h-3 w-3" />
            <span>Educator & Lecturer</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-[11px] font-medium bg-zinc-50 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 border border-zinc-300 dark:border-zinc-700">
            <BarChart3 className="h-3 w-3" />
            <span>Data Practitioner</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-[11px] font-medium bg-zinc-50 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 border border-zinc-300 dark:border-zinc-700">
            <Stethoscope className="h-3 w-3" />
            <span>Health Informatics</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-[11px] font-medium bg-zinc-50 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 border border-zinc-300 dark:border-zinc-700">
            <Zap className="h-3 w-3" />
            <span>Digital Transformation</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-[11px] font-medium bg-zinc-50 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 border border-zinc-300 dark:border-zinc-700">
            <TrendingUp className="h-3 w-3" />
            <span>Business Analytics</span>
          </span>
        </div>
      </div>
    </div>
  );
}
