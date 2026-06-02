import { useState } from "react";
import { BookOpen, Calendar, Scroll, ChevronDown, ChevronUp, FileSpreadsheet } from "lucide-react";
import { researchData } from "../data";

export default function ResearchSection() {
  const [expandedContributionId, setExpandedContributionId] = useState<string | null>(null);

  const toggleContribution = (id: string) => {
    setExpandedContributionId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-xs space-y-6 transition-colors duration-200">
      {/* Section Header */}
      <div className="border-zinc-100 dark:border-zinc-800 space-y-1">
        {/* <span className="font-mono text-[10px] tracking-wider text-zinc-400 dark:text-zinc-500 uppercase">
          Scholarly Index
        </span> */}
        <h2 className="font-display text-lg font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
          Research Projects Involvement
        </h2>
      </div>

      {/* Core Highlights items block */}
      <div className="space-y-4">
        {researchData.map((paper) => {
          const isContributionOpen = expandedContributionId === paper.id;

          return (
            <div
              key={paper.id}
              className="group rounded-lg border border-zinc-300 hover:border-zinc-800 dark:border-zinc-800 dark:hover:border-zinc-500 bg-zinc-50/10 dark:bg-zinc-950/20 p-5 hover:bg-zinc-50/30 dark:hover:bg-zinc-900/30 transition-all duration-300 leading-relaxed"
            >
              {/* Publication Header */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-md bg-zinc-100 dark:bg-zinc-800 border border-zinc-150 dark:border-zinc-700 px-1.5 py-0.5 font-mono text-[9px] text-zinc-500 dark:text-zinc-300 font-semibold uppercase">
                      {paper.type}
                    </span>
                    <span className="flex items-center gap-1 font-mono text-[10px] text-zinc-400 dark:text-zinc-500">
                      <Calendar className="h-3 w-3" />
                      {paper.year}
                    </span>
                  </div>

                  <h3 className="font-display text-sm font-semibold text-zinc-800 dark:text-zinc-200 tracking-tight leading-snug group-hover:text-zinc-950 dark:group-hover:text-zinc-50">
                    {paper.title}
                  </h3>

                  <p className="font-mono text-[10px] text-zinc-400 dark:text-zinc-500">
                    Implementing Agency: <span className="text-zinc-605 dark:text-zinc-300">{paper.agency}</span>
                  </p>
                </div>

                <button
                  id={`toggle-contribution-${paper.id}`}
                  onClick={() => toggleContribution(paper.id)}
                  className="shrink-0 flex items-center gap-1 font-mono text-[10px] text-zinc-505 dark:text-zinc-400 hover:text-zinc-850 dark:hover:text-white px-2 py-1 rounded border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 cursor-pointer"
                >
                  <span>View Contribution</span>
                  {isContributionOpen ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3.5 w-3.5" />}
                </button>
              </div>

              {/* Collapsible contribution content */}
              {isContributionOpen && (
                <div id={`contribution-body-${paper.id}`} className="mt-3.5 p-3.5 rounded bg-zinc-50 dark:bg-zinc-950 border border-zinc-150 dark:border-zinc-800 text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed font-sans space-y-2.5 animate-fade-in">
                  <p className="font-semibold text-zinc-700 dark:text-zinc-200 font-display">Contribution Summary:</p>
                  <p className="italic font-light">"{paper.contribution}"</p>
                </div>
              )}

              {/* Research Tags */}
              <div className="flex flex-wrap gap-1.5 pt-3.5 border-t border-dashed border-zinc-100 dark:border-zinc-800 mt-3.5">
                {paper.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-1.5 py-0.5 rounded-md text-[9px] font-mono bg-white dark:bg-zinc-900 text-zinc-500 dark:text-zinc-400 border border-zinc-150 dark:border-zinc-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Focus Topics List Grid (Explicitly showcasing requested highlights) */}
      {/* <div className="pt-2">
        <h4 className="font-mono text-[10px] uppercase font-bold text-zinc-400 dark:text-zinc-500 tracking-wider mb-3">
          Thematic Academic Coverage
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
          {[
            "Machine Learning in Student Risk",
            "Education Analytics",
            "Health Information Systems",
            "Business Analytics Research",
            "Decision Support Frameworks",
            "University Digital Transformation"
          ].map((topic, index) => (
            <div
              key={index}
              className="flex items-center gap-2 rounded-lg border border-zinc-100 dark:border-zinc-800 p-2.5 bg-zinc-50/50 dark:bg-zinc-950/40"
            >
              <Scroll className="h-3.5 w-3.5 text-zinc-400 dark:text-zinc-500 shrink-0" />
              <span className="text-[11px] font-medium text-zinc-700 dark:text-zinc-300">{topic}</span>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
}
