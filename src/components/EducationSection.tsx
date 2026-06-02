import { GraduationCap, Calendar } from "lucide-react";
import { educationData } from "../data";

export default function EducationSection() {
  return (
    <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-xs space-y-6 transition-colors duration-200">
      <div className="border-zinc-100 dark:border-zinc-800">
        <h2 className="font-display text-lg font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
          Education
        </h2>
      </div>

      <div className="space-y-3.5">
        {educationData.map((item) => (
          <div
            key={item.id}
            className="rounded-lg border border-zinc-300 hover:border-zinc-800 dark:border-zinc-800 dark:hover:border-zinc-500 bg-zinc-50/20 dark:bg-zinc-950/20 p-4 space-y-2.5 transition-all duration-300"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1">
                <h3 className="font-display text-sm font-semibold text-zinc-850 dark:text-zinc-150 tracking-tight leading-snug">
                  {item.credential}
                </h3>
                <p className="text-xs font-mono text-zinc-600 dark:text-zinc-300">{item.institution}</p>
              </div>

              <span className="inline-flex shrink-0 items-center gap-1 rounded-md border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-1.5 py-0.5 font-mono text-[10px] text-zinc-500 dark:text-zinc-400">
                <Calendar className="h-3 w-3" />
                {item.period}
              </span>
            </div>

            {item.details && item.details.length > 0 && (
              <ul className="space-y-1.5 pt-1">
                {item.details.map((detail) => (
                  <li key={detail} className="flex items-start gap-2.5 text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    <GraduationCap className="h-3.5 w-3.5 mt-0.5 shrink-0 text-zinc-400 dark:text-zinc-500" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
