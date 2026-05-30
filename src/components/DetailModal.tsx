import { AnimatePresence, motion } from "motion/react";
import { X, Calendar, User, Tag, Sparkles, CheckCircle2, ChevronRight, ExternalLink } from "lucide-react";
import { Project } from "../types";

interface DetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

export default function DetailModal({ isOpen, onClose, project }: DetailModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          {/* Backdrop with elegant micro-blur */}
          <motion.div
            id="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-zinc-950/40 backdrop-blur-xs"
          />

          {/* Modal Container */}
          <motion.div
            id="modal-content"
            initial={{ opacity: 0, scale: 0.98, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 8 }}
            transition={{ type: "spring", duration: 0.4, bounce: 0.1 }}
            className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xl flex flex-col transition-colors duration-200"
          >
            {/* Modal Header */}
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800 bg-white/95 dark:bg-zinc-900/95 px-6 py-4 backdrop-blur-xs">
              <div className="flex flex-col gap-1 pr-4">
                <span className="font-mono text-[10px] tracking-wider text-zinc-400 dark:text-zinc-500 uppercase">
                  {project.category}
                </span>
                <h3 className="font-display text-lg font-semibold text-zinc-900 dark:text-zinc-100 tracking-tight leading-tight">
                  {project.title}
                </h3>
              </div>
              <button
                id="close-modal-btn"
                onClick={onClose}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-100 dark:border-zinc-800 text-zinc-400 dark:text-zinc-500 transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:text-zinc-600 dark:hover:text-zinc-200 active:bg-zinc-100 dark:active:bg-zinc-800"
                aria-label="Close details"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="flex-1 p-6 space-y-6">
              {/* Quick Metadata badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pb-2">
                <div className="flex items-center gap-2.5 rounded-lg border border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/20 p-2.5">
                  <User className="h-4 w-4 text-zinc-400 dark:text-zinc-500" />
                  <div className="flex flex-col">
                    <span className="font-mono text-[9px] text-zinc-400 dark:text-zinc-500 uppercase">My Role</span>
                    <span className="text-xs font-medium text-zinc-800 dark:text-zinc-200">{project.role}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 rounded-lg border border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/20 p-2.5">
                  <Tag className="h-4 w-4 text-zinc-400 dark:text-zinc-500" />
                  <div className="flex flex-col">
                    <span className="font-mono text-[9px] text-zinc-400 dark:text-zinc-500 uppercase">Classification</span>
                    <span className="text-xs font-medium text-zinc-800 dark:text-zinc-200">{project.category}</span>
                  </div>
                </div>
              </div>

              {/* In-depth Narrative */}
              <div className="space-y-2">
                <h4 className="font-display text-sm font-medium text-zinc-900 dark:text-zinc-200 flex items-center gap-1.5">
                  Project Context & Scope
                </h4>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans">
                  {project.longDescription}
                </p>
              </div>

              {/* Key Features Column */}
              {project.keyFeatures && project.keyFeatures.length > 0 && (
                <div className="space-y-3 pt-2">
                  <h4 className="font-display text-sm font-medium text-zinc-900 dark:text-zinc-200 flex items-center gap-1.5">
                    <Sparkles className="h-4 w-4 text-zinc-400 dark:text-zinc-500" /> Key Architectures & System Features
                  </h4>
                  <ul className="space-y-2">
                    {project.keyFeatures.map((feat, index) => (
                      <li key={index} className="flex items-start gap-2.5 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        <ChevronRight className="h-3.5 w-3.5 mt-0.5 text-zinc-400 dark:text-zinc-500 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tangible Outcomes / Impacts */}
              {project.impact && project.impact.length > 0 && (
                <div className="pt-2 rounded-lg border border-zinc-100 dark:border-zinc-800 bg-zinc-50/20 dark:bg-zinc-950/20 p-4 space-y-3">
                  <h4 className="font-display text-sm font-medium text-zinc-900 dark:text-zinc-200 flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-zinc-600 dark:text-zinc-500" /> Institutional Impact & Outcomes
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-1 gap-2">
                    {project.impact.map((imp, index) => (
                      <li key={index} className="flex items-start gap-2 text-xs text-zinc-600 dark:text-zinc-400 leading-normal">
                        <div className="h-1.5 w-1.5 rounded-full bg-zinc-400 dark:bg-zinc-600 mt-1.5 shrink-0" />
                        <span>{imp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tags block */}
              <div className="space-y-2 pt-2">
                <span className="font-mono text-[9px] text-zinc-400 dark:text-zinc-500 uppercase tracking-wider block">
                  Technologies & Frameworks Deployed
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md font-mono text-[10px] text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer with interactive links */}
            <div className="sticky bottom-0 z-10 border-t border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/40 px-6 py-4 flex flex-wrap gap-3 items-center justify-between">
              <span className="font-mono text-[10px] text-zinc-400 dark:text-zinc-500">
                Prepared by John Omar D. Esguerra
              </span>
              <div className="flex gap-2.5">
                {project.links?.github && (
                  <a
                    id="modal-github-link"
                    href={project.links.github}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center gap-1.5 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-700 active:bg-zinc-100 dark:active:bg-zinc-900 px-3 py-1.5 font-mono text-[11px] text-zinc-600 dark:text-zinc-350 transition-colors"
                  >
                    Source Code
                  </a>
                )}
                <button
                  id="modal-quick-connect-btn"
                  onClick={() => {
                    onClose();
                    const contactSection = document.getElementById("contact");
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="flex items-center gap-1 text-xs font-medium text-white dark:text-zinc-900 bg-zinc-900 dark:bg-zinc-100 rounded-lg py-1.5 px-3.5 hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors cursor-pointer"
                >
                  Discuss Project
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
