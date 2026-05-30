import { useState } from "react";
import { Briefcase, Calendar, MapPin, ChevronDown, ChevronUp } from "lucide-react";
import { experienceData } from "../data";

export default function ExperienceTimeline() {
  // Store expanded item IDs
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({
    "exp-educator": true, // Default open the first one for neat visual greeting
  });

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-xs space-y-6 transition-colors duration-200">
      {/* Section Header */}
      <div className="border-zinc-100 dark:border-zinc-800">
        {/* <span className="font-mono text-[10px] tracking-wider text-zinc-400 dark:text-zinc-500 uppercase">
          Career Path
        </span> */}
        <h2 className="font-display text-lg font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
          Professional Experience
        </h2>
      </div>

      {/* Timeline flow */}
      <div className="relative border-l border-zinc-200 dark:border-zinc-800 pl-4 sm:pl-6 ml-2 space-y-6">
        {experienceData.map((exp) => {
          const isExpanded = !!expandedIds[exp.id];
          const isFirstExperience = exp.id === experienceData[0]?.id;

          return (
            <div key={exp.id} className="relative group">
              {/* Timeline marker node */}
              <span className={`absolute -left-[25px] sm:-left-[33px] flex h-4 w-4 items-center justify-center rounded-full border transition-all duration-300 ${isFirstExperience ? "bg-black border-black dark:bg-black dark:border-black" : "bg-white dark:bg-zinc-900 border-zinc-300 dark:border-zinc-700 group-hover:border-zinc-500 dark:group-hover:border-zinc-400"}`}>
                <span className={`h-1.5 w-1.5 rounded-full transition-colors ${isFirstExperience ? "bg-white" : "bg-zinc-400 dark:bg-zinc-500 group-hover:bg-zinc-800 dark:group-hover:bg-zinc-200"}`} />
              </span>

              {/* Card wrapper */}
              <div className="rounded-lg border border-zinc-150 dark:border-zinc-800 bg-zinc-50/20 dark:bg-zinc-950/20 p-4 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all">
                {/* Header info */}
                <div
                  id={`exp-header-${exp.id}`}
                  onClick={() => toggleExpand(exp.id)}
                  className="flex items-start justify-between gap-4 cursor-pointer select-none"
                >
                  <div className="space-y-1">
                    <h3 className="font-display text-sm font-semibold text-zinc-800 dark:text-zinc-200 tracking-tight leading-tight group-hover:text-zinc-950 dark:group-hover:text-zinc-50">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-zinc-500 dark:text-zinc-400 font-mono">
                      <span className="font-medium text-zinc-650 dark:text-zinc-300">{exp.organization}</span>
                      <span className="hidden sm:inline text-zinc-300 dark:text-zinc-700">|</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3 text-zinc-400 dark:text-zinc-500" />
                        {exp.location}
                      </span>
                      <span className="hidden sm:inline text-zinc-300 dark:text-zinc-700">|</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3 text-zinc-400 dark:text-zinc-500" />
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  {/* Toggle controls */}
                  <div className="rounded-md border border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-1 text-zinc-400 dark:text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-300">
                    {isExpanded ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
                  </div>
                </div>

                {/* Expanded deliverables breakdown */}
                {isExpanded && (
                  <div id={`exp-body-${exp.id}`} className="mt-4 pt-4 border-t border-zinc-100/80 dark:border-zinc-800/80 space-y-3 animate-fade-in">
                    <ul className="space-y-2.5">
                      {exp.description.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
                          <div className="h-1.5 w-1.5 rounded-full bg-zinc-300 dark:bg-zinc-600 mt-1.5 shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Skill markers associated with entry */}
                    <div className="flex flex-wrap gap-1 pt-1">
                      {exp.tags.map((tg) => (
                        <span
                          key={tg}
                          className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-white dark:bg-zinc-900 text-zinc-500 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800"
                        >
                          {tg}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Simple instructional helper */}
      <div className="pt-2 text-[10px] font-mono text-zinc-400 dark:text-zinc-500 text-right">
        <span>Click cards to expand/collapse metrics</span>
      </div>
    </div>
  );
}
