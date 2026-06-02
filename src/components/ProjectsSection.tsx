import { useState, useMemo } from "react";
import { ArrowUpRight, Search, SlidersHorizontal, Layers, FolderDot } from "lucide-react";
import { Project } from "../types";
import { projectsData } from "../data";

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export default function ProjectsSection({ onSelectProject }: ProjectsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Extracted unique categories for robust tab filter
  const categories = useMemo(() => {
    return ["All", ...new Set(projectsData.map((p) => p.category))];
  }, []);

  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesCategory =
        selectedCategory === "All" ||
        project.category === selectedCategory;

      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-xs space-y-6 transition-colors duration-200">
      {/* Section Header */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-zinc-100 dark:border-zinc-800 pb-2">
          <div className="space-y-1">
            {/* <span className="font-mono text-[10px] tracking-wider text-zinc-400 dark:text-zinc-500 uppercase">
              Portfolio Catalog
            </span> */}
            <h2 className="font-display text-lg font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
              Featured Projects
            </h2>
          </div>

          {/* Quick Find */}
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-3.5 w-3.5 text-zinc-400 dark:text-zinc-500 " />
            <input
              id="projects-search-input"
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full sm:w-60 pl-8 pr-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-zinc-50/50 dark:bg-zinc-800 text-xs text-zinc-900 dark:text-zinc-100 placeholder-zinc-500 dark:placeholder-zinc-500 focus:bg-white dark:focus:bg-zinc-800 focus:outline-none focus:border-zinc-400 dark:focus:border-zinc-600 transition-colors"
            />
          </div>
        </div>
        

        {/* Filter categories tabs (Bryl Lim style: minimal, flat tabs) */}
        <div className="flex flex-wrap items-center gap-1.5 pt-1">
          <div className="flex items-center gap-1 text-[11px] font-mono text-zinc-400 dark:text-zinc-500 mr-2">
            <SlidersHorizontal className="h-3 w-3" />
            <span>Filter:</span>
          </div>
          {categories.map((category) => (
            <button
              key={category}
              id={`tab-${category.replace(/\s+/g, "-").toLowerCase()}`}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-lg px-2 py-1 text-[10px] font-mono transition-all border cursor-pointer ${
                selectedCategory === category
                  ? "bg-zinc-900 border-zinc-900 text-white dark:bg-white dark:border-white dark:text-zinc-900 font-medium"
                  : "bg-zinc-50 border-zinc-300 text-zinc-500 dark:bg-zinc-800 dark:border-zinc-900 dark:text-zinc-400 hover:bg-zinc-100/70 dark:hover:bg-zinc-800 hover:text-zinc-800 dark:hover:text-zinc-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col justify-between rounded-xl border border-zinc-300 dark:border-zinc-800 bg-zinc-50/30 dark:bg-zinc-950/20 p-5 transition-all duration-300 hover:border-zinc-800 dark:hover:border-zinc-500 hover:bg-zinc-50/80 dark:hover:bg-zinc-900/50 hover:shadow-xs leading-relaxed"
            >
              <div className="space-y-3.5">
                {/* Meta Category and Tags */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-mono text-[9px] tracking-wider text-zinc-400 dark:text-zinc-500 uppercase font-bold">
                    {project.category}
                  </span>
                  <span className="inline-flex h-2 w-2 rounded-full bg-zinc-303 dark:bg-zinc-700 group-hover:bg-zinc-500 dark:group-hover:bg-zinc-400 transition-all" />
                </div>

                {/* Project Title and Concept description */}
                <div className="space-y-1.5">
                  <h3 className="font-display text-sm font-semibold text-zinc-808 dark:text-zinc-200 tracking-tight leading-snug group-hover:text-zinc-950 dark:group-hover:text-zinc-50">
                    {project.title}
                  </h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-normal line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Project Tags */}
                <div className="flex flex-wrap gap-1">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-1.5 py-0.5 rounded-md text-[9px] font-mono bg-white dark:bg-zinc-900 text-zinc-500 dark:text-zinc-400 border border-zinc-150 dark:border-zinc-800"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-[9px] font-mono text-zinc-400 dark:text-zinc-500 pl-1">
                      +{project.tags.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* Action - View Case Study details */}
              <div className="pt-5 mt-auto border-t border-dashed border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between">
                <span className="font-mono text-[9px] text-zinc-400 dark:text-zinc-500">
                  Role: {project.role}
                </span>
                <button
                  id={`view-details-${project.id}`}
                  onClick={() => onSelectProject(project)}
                  className="inline-flex items-center gap-1 font-mono text-[10px] font-semibold tracking-wide text-zinc-800 dark:text-zinc-300 hover:text-zinc-955 dark:hover:text-zinc-100 transition-colors cursor-pointer"
                >
                  <span>View Project</span>
                  <ArrowUpRight className="h-3 w-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-12 rounded-lg border border-dashed border-zinc-200 dark:border-zinc-800">
          <FolderDot className="h-8 w-8 text-zinc-300 dark:text-zinc-700 mb-2" />
          <p className="font-mono text-xs text-zinc-400 dark:text-zinc-550">No projects found matching the criteria.</p>
          <button
            id="reset-project-filter-btn"
            onClick={() => {
              setSelectedCategory("All");
              setSearchQuery("");
            }}
            className="mt-3 text-xs font-mono font-medium text-zinc-650 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 underline underline-offset-4 cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Small informative Footer badge */}
      <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-zinc-400 dark:text-zinc-500">
        <span>Click 'View Project' to read architectural impact maps.</span>
        <span>Total: {projectsData.length} entries</span>
      </div>
    </div>
  );
}
