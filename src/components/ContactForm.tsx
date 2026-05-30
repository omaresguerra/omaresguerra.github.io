import { useState, FormEvent } from "react";
import { Send, Mail, Linkedin, Github, Check, Globe } from "lucide-react";
import { profileData } from "../data";

export default function ContactForm() {
  const formEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT as string | undefined;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "Collaboration",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const categories = [
    "Collaboration",
    "Research",
    "Analytics Project",
    "Digital Strategy",
    "Academic Inquiries",
  ];

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage("Please fill all required fields (*) before transmitting.");
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    if (!formEndpoint) {
      setStatus("error");
      setErrorMessage("Contact form is not configured yet. Please use the direct email link instead.");
      return;
    }

    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send form message");
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        category: "Collaboration",
        subject: "",
        message: "",
      });
    } catch {
      setStatus("error");
      setErrorMessage("Unable to send your message right now. Please try again or use direct email.");
    }
  };

  return (
    <div id="contact" className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-xs space-y-6 transition-colors duration-200">
      {/* Section Header */}
      <div className="border-zinc-100 dark:border-zinc-800 pb-2 space-y-2">
        {/* <span className="font-mono text-[10px] tracking-wider text-zinc-400 dark:text-zinc-500 uppercase">
          Communications Gateway
        </span> */}
        <h2 className="font-display text-lg font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
          Let's Connect
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-normal font-sans">
          Interested in collaboration, research, analytics projects, or digital transformation initiatives? Let’s connect.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Direct connections (Static and interactive helper links) */}
        <div className="lg:col-span-4 space-y-5">
          <div className="rounded-lg border border-zinc-150 dark:border-zinc-800 bg-zinc-50/20 dark:bg-zinc-950/20 p-4 space-y-3.5 leading-relaxed text-xs">
            <h3 className="font-display font-semibold text-zinc-800 dark:text-zinc-200">
              Direct Contact Details
            </h3>
            
            <div className="space-y-2.5 font-mono text-zinc-500 dark:text-zinc-400">
              <a
                href={`mailto:${profileData.email}`}
                className="flex items-center gap-2.5 p-1 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"
                title={`Send mail to ${profileData.email}`}
              >
                <Mail className="h-4 w-4 text-zinc-400 dark:text-zinc-500 shrink-0" />
                <span className="truncate">{profileData.email}</span>
              </a>
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-1 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"
              >
                <Linkedin className="h-4 w-4 text-zinc-400 dark:text-zinc-500 shrink-0" />
                <span>LinkedIn Profile</span>
              </a>
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-1 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"
              >
                <Github className="h-4 w-4 text-zinc-400 dark:text-zinc-500 shrink-0" />
                <span>GitHub Repository</span>
              </a>
              <div className="flex items-center gap-2.5 p-1">
                <Globe className="h-4 w-4 text-zinc-400 dark:text-zinc-500 shrink-0" />
                <span className="text-zinc-400 dark:text-zinc-500">Philippines (UTC+8)</span>
              </div>
            </div>
          </div>

          {/* <div className="rounded-lg border border-zinc-100 dark:border-zinc-800 p-4 text-[11px] text-zinc-400 dark:text-zinc-500 space-y-1.5 font-mono">
            <span className="h-2 w-2 rounded-full bg-zinc-300 dark:bg-zinc-700 inline-block mr-1" />
            <p className="leading-normal">
              Based in the Philippines, open to local, regional, and international technological studies, teaching assignments, and analytic advisory layouts.
            </p>
          </div> */}
        </div>

        {/* Right Column: Simulated Contact Form */}
        <div className="lg:col-span-8">
          <form onSubmit={handleSubmit} className="space-y-4 font-sans text-xs">
            {/* Status Messages */}
            {status === "error" && (
              <div className="rounded-lg bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900 text-red-700 dark:text-red-400 p-3 leading-relaxed font-medium">
                {errorMessage}
              </div>
            )}

            {status === "success" && (
              <div className="rounded-lg bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900 text-emerald-800 dark:text-emerald-350 p-4 space-y-2 leading-relaxed animate-fade-in animate-once">
                <div className="flex items-center gap-2">
                  <div className="rounded-full bg-emerald-100 dark:bg-emerald-950/40 text-emerald-700 p-1">
                    <Check className="h-4 w-4" />
                  </div>
                  <span className="font-display font-bold text-zinc-900 dark:text-zinc-50">Message Transmitted Successfully!</span>
                </div>
                <p className="font-light text-[11px] text-zinc-600 dark:text-zinc-300">
                  Thank you for reaching out. Your message has been sent successfully and will be reviewed soon.
                </p>
                <button
                  type="button"
                  id="reset-form-status-btn"
                  onClick={() => setStatus("idle")}
                  className="font-mono text-[10px] text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 underline cursor-pointer"
                >
                  Clear & Write Another
                </button>
              </div>
            )}

            {status !== "success" && (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label className="font-mono text-[10px] uppercase text-zinc-500 dark:text-zinc-400 font-semibold" htmlFor="name">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      disabled={status === "submitting"}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 px-3.5 py-2 placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:border-zinc-400 dark:focus:border-zinc-600 disabled:opacity-50 transition-colors"
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-1.5">
                    <label className="font-mono text-[10px] uppercase text-zinc-500 dark:text-zinc-400 font-semibold" htmlFor="email">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="e.g. jdoe@example.com"
                      disabled={status === "submitting"}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 px-3.5 py-2 placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:border-zinc-400 dark:focus:border-zinc-600 disabled:opacity-50 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Category toggle */}
                  <div className="space-y-1.5">
                    <label className="font-mono text-[10px] uppercase text-zinc-500 dark:text-zinc-400 font-semibold" htmlFor="category">
                      Collaboration Category
                    </label>
                    <select
                      id="category"
                      disabled={status === "submitting"}
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 px-3 py-2 focus:outline-none focus:border-zinc-400 dark:focus:border-zinc-600 disabled:opacity-50 transition-colors cursor-pointer"
                    >
                      {categories.map((cat) => (
                        <option key={cat} value={cat} className="bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100">
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>                  {/* Subject field */}
                  <div className="space-y-1.5">
                    <label className="font-mono text-[10px] uppercase text-zinc-500 dark:text-zinc-400 font-semibold" htmlFor="subject">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      placeholder="e.g. Analytical Study Partnership"
                      disabled={status === "submitting"}
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 px-3.5 py-2 placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:border-zinc-400 dark:focus:border-zinc-600 disabled:opacity-50 transition-colors"
                    />
                  </div>
                </div>

                {/* Message block */}
                <div className="space-y-1.5">
                  <label className="font-mono text-[10px] uppercase text-zinc-500 dark:text-zinc-400 font-semibold" htmlFor="message">
                    Message Detail *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="Describe your research, institutional inquiry, or project specifications here..."
                    disabled={status === "submitting"}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 px-3.5 py-2 placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:border-zinc-400 dark:focus:border-zinc-600 disabled:opacity-50 transition-colors resize-y leading-relaxed"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  id="submit-contact-form"
                  disabled={status === "submitting"}
                  className="inline-flex items-center gap-2 rounded-lg bg-zinc-900 dark:bg-zinc-100 px-5 py-2.5 text-xs font-semibold text-white dark:text-zinc-900 transition-colors hover:bg-zinc-800 dark:hover:bg-zinc-200 disabled:opacity-50 active:bg-zinc-950 dark:active:bg-zinc-300 cursor-pointer"
                >
                  {status === "submitting" ? (
                    <>
                      <div className="h-3 w-3 animate-spin rounded-full border border-white dark:border-zinc-900 border-t-transparent" />
                      <span>Transmitting...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-3.5 w-3.5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
