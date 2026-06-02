import { useState } from "react";
import { Search, Sparkles, Database, GraduationCap, Cpu } from "lucide-react";
import { skillsData } from "../data";

export default function SkillsSection() {
  const [searchTerm, setSearchTerm] = useState("");

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Data Analytics":
        return <Database className="h-4 w-4 text-zinc-500 dark:text-zinc-400" />;
      case "Machine Learning":
        return <Cpu className="h-4 w-4 text-zinc-500 dark:text-zinc-400" />;
      case "Information Systems":
        return <Sparkles className="h-4 w-4 text-zinc-500 dark:text-zinc-400" />;
      case "Academic and Training":
        return <GraduationCap className="h-4 w-4 text-zinc-500 dark:text-zinc-400" />;
      default:
        return null;
    }
  };

  return (
    <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-xs space-y-6 transition-colors duration-200">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-zinc-100 dark:border-zinc-800">
        <div className="space-y-1">
          {/* <span className="font-mono text-[10px] tracking-wider text-zinc-400 dark:text-zinc-500 uppercase">
            Specializations
          </span> */}
          <h2 className="font-display text-lg font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
            Skills & Tech Stack
          </h2>
        </div>

        {/* Interactive Highlight Search bar */}
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-3.5 w-3.5 text-zinc-400 dark:text-zinc-500" />
          <input
            id="skills-search-input"
            type="text"
            placeholder="Search skills (e.g. SQL, ML)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full sm:w-60 pl-8 pr-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-zinc-50/50 dark:bg-zinc-800 text-xs font-sans placeholder-zinc-400 dark:placeholder-zinc-500 text-zinc-900 dark:text-zinc-100 focus:bg-white dark:focus:bg-zinc-800 focus:outline-none focus:border-zinc-400 dark:focus:border-zinc-600 transition-colors"
          />
          {searchTerm && (
            <button
              id="clear-skills-search-btn"
              onClick={() => setSearchTerm("")}
              className="absolute right-2 top-2 text-[10px] text-zinc-400 dark:text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-300 px-1 font-mono cursor-pointer"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Grid of skill categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {skillsData.map((group) => {
          // Check if any skill in the group matches the search
          const hasGroupMatches = group.skills.some((skill) =>
            skill.toLowerCase().includes(searchTerm.toLowerCase())
          );

          return (
            <div
              key={group.category}
              className={`rounded-lg border p-4.5 transition-all duration-300 ${
                searchTerm && !hasGroupMatches
                  ? "border-zinc-300 dark:border-zinc-800 opacity-50 scale-[0.98]"
                  : "border-zinc-300 dark:border-zinc-800 bg-zinc-50/20 dark:bg-zinc-950/20 hover:border-zinc-800 dark:hover:border-zinc-700"
              }`}
            >
              {/* Category Title with respective Icon */}
              <div className="flex items-center gap-2 mb-3">
                {getCategoryIcon(group.category)}
                <h3 className="font-display text-xs font-semibold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider">
                  {group.category}
                </h3>
              </div>

              {/* Skills Tags Flow */}
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((skill) => {
                  const isMatch =
                    searchTerm !== "" &&
                    skill.toLowerCase().includes(searchTerm.toLowerCase());

                  return (
                    <span
                      key={skill}
                      className={`px-2.5 py-1 rounded-md text-[10px] font-mono transition-all duration-200 border ${
                        isMatch
                          ? "bg-zinc-900 dark:bg-white border-zinc-900 dark:border-white text-white dark:text-zinc-900 shadow-xs font-medium scale-105"
                          : searchTerm !== ""
                          ? "bg-zinc-50 dark:bg-zinc-800/40 border-zinc-100 dark:border-zinc-800 text-zinc-400 dark:text-zinc-500"
                          : "bg-white dark:bg-zinc-900/50 border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-300 hover:border-zinc-400 dark:hover:border-zinc-600 hover:text-zinc-900 dark:hover:text-zinc-50"
                      }`}
                    >
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Informative micro note */}
      {/* <div className="flex items-center gap-1.5 border-t border-zinc-100 dark:border-zinc-800 pt-4.5 text-[10px] font-mono text-zinc-400 dark:text-zinc-500">
        <span className="h-1.5 w-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
        <span>Continuous development across Applied AI, Health Tech registries, and Higher-Ed operations.</span>
      </div> */}
    </div>
  );
}
