import { useState, useEffect } from "react";
import { BookOpen, MapPin, Sparkles, GraduationCap, ArrowUp, Menu, X, ArrowDown, FileText, Sun, Moon } from "lucide-react";
import ProfileCard from "./components/ProfileCard";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ExperienceTimeline from "./components/ExperienceTimeline";
import EducationSection from "./components/EducationSection";
import ResearchSection from "./components/ResearchSection";
import CertificationsSection from "./components/CertificationsSection";
import ContactForm from "./components/ContactForm";
import DetailModal from "./components/DetailModal";
import { Project } from "./types";
import { profileData } from "./data";

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      return saved === "dark" || (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
    return false;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(prev => {
      const next = !prev;
      localStorage.setItem("theme", next ? "dark" : "light");
      return next;
    });
  };

  // Monitor scroll height to show Back-to-Top trigger & highlight active section
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);

      const sections = ["about", "skills", "projects", "timeline", "education", "research", "certifications", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 40; // Spacing offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveSection(sectionId);
    }
  };

  const handleSelectProject = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const menuItems = [
    { id: "about", num: "01", label: "About" },
    { id: "skills", num: "02", label: "Skills" },
    { id: "projects", num: "03", label: "Projects" },
    { id: "timeline", num: "04", label: "Experience" },
    { id: "education", num: "05", label: "Education" },
    { id: "research", num: "06", label: "Research" },
    { id: "certifications", num: "07", label: "Certifications" },
    { id: "contact", num: "08", label: "Let's Connect" }
  ];

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 flex flex-col font-sans text-zinc-900 dark:text-zinc-100 selection:bg-zinc-200 dark:selection:bg-zinc-800 selection:text-zinc-900 dark:selection:text-zinc-100 relative transition-colors duration-200">
      
      {/* Top micro progress status banner */}
      <div className="fixed top-0 left-0 right-0 z-45 bg-white border-b border-zinc-150 dark:bg-zinc-900/95 dark:border-zinc-800/80 py-2.5 px-4 sm:px-6 backdrop-blur-xs transition-colors duration-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-4.5 w-4.5 text-zinc-700 dark:text-zinc-300" />
            <span className="font-display font-bold text-xs tracking-tight text-zinc-900 dark:text-zinc-100">John Omar D. Esguerra</span>
            {/* <span className="h-3 w-[1px] bg-zinc-200 dark:bg-zinc-800 hidden sm:inline" />
            <span className="font-mono text-[10px] text-zinc-400 dark:text-zinc-500 hidden sm:inline">Portfolio Index & Academic CV</span> */}
          </div>
          
          <div className="flex items-center gap-3">
            {/* <span className="font-mono text-[10px] text-zinc-400 dark:text-zinc-500 hidden md:inline">Current Status: Faculty Member & Researcher</span> */}
            
            {/* Theme Toggle Button */}
            <button
              id="theme-toggle-btn"
              onClick={toggleTheme}
              className="flex h-7 w-7 items-center justify-center rounded-lg border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-700 hover:text-zinc-900 dark:hover:text-white transition-colors cursor-pointer"
              aria-label="Toggle theme mode"
              title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? <Sun className="h-3.5 w-3.5" /> : <Moon className="h-3.5 w-3.5" />}
            </button>

            {/* Mobile Navigation Toggle */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(prev => !prev)}
              className="flex lg:hidden h-7 w-7 items-center justify-center rounded-lg border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-855 text-zinc-650 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
              aria-label="Toggle navigation map"
              title="Toggle navigation map"
            >
              {mobileMenuOpen ? <X className="h-3.5 w-3.5" /> : <Menu className="h-3.5 w-3.5" />}
            </button>

            {/* <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 hidden sm:inline" />
            <span className="font-mono text-[9px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider hidden sm:inline">ACTIVE RESEARCH PROTOTYPES</span> */}
          </div>
        </div>

        {/* Mobile dropdown menu index */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-zinc-900/95 border-b border-zinc-200 dark:border-zinc-800 shadow-md px-4 py-4 backdrop-blur-md animate-fade-in transition-all">
            <h4 className="font-mono text-[9px] uppercase font-bold text-zinc-400 dark:text-zinc-500 tracking-wider mb-2.5 px-2">
              Navigation
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
              {menuItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    id={`mobile-nav-link-${item.id}`}
                    onClick={() => {
                      scrollToSection(item.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 text-left text-xs transition-all duration-150 font-sans cursor-pointer ${
                      isActive
                        ? "bg-zinc-50 dark:bg-zinc-800/80 border-l-2 border-zinc-900 dark:border-zinc-100 font-semibold text-zinc-900 dark:text-zinc-100 pl-4"
                        : "text-zinc-505 dark:text-zinc-400 hover:bg-zinc-50/50 dark:hover:bg-zinc-800/40 hover:text-zinc-800 dark:hover:text-zinc-200"
                    }`}
                  >
                    <span className="font-mono text-[9px] text-zinc-400 dark:text-zinc-600">
                      {item.num}
                    </span>
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Main Container Layout */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (Sticky Sidebar on Desktop) */}
          <div className="lg:col-span-4 lg:sticky lg:top-20 space-y-6 lg:max-h-[calc(100vh-120px)] lg:overflow-y-auto pr-0 lg:pr-1 pb-4">
            {/* Primary Profile details */}
            <ProfileCard onScrollToSection={scrollToSection} darkMode={darkMode} />

            {/* Bryl Lim-inspired clean structured section navigator */}
            <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-5 shadow-xs hidden lg:block transition-colors duration-200">
              <h4 className="font-mono text-[10px] uppercase font-semibold text-zinc-400 dark:text-zinc-500 tracking-wider mb-4">
                Navigation
              </h4>
              <nav className="space-y-1.5">
                {menuItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      id={`nav-link-${item.id}`}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full flex items-center justify-between rounded-lg px-3 py-2 text-left text-xs transition-all cursor-pointer ${
                        isActive
                          ? "bg-zinc-50 dark:bg-zinc-800/80 border-l-2 border-zinc-900 dark:border-zinc-100 font-semibold text-zinc-900 dark:text-zinc-100 pl-4"
                          : "text-zinc-500 dark:text-zinc-400 hover:bg-zinc-50/50 dark:hover:bg-zinc-800/20 hover:text-zinc-800 dark:hover:text-zinc-200"
                      }`}
                    >
                      <div className="flex items-center gap-2.5 font-mono">
                        <span className="text-zinc-400 dark:text-zinc-650">{item.num}</span>
                        <span className="font-sans text-zinc-700 dark:text-zinc-300">{item.label}</span>
                      </div>
                      {isActive && (
                        <span className="h-1 w-1 rounded-full bg-zinc-900 dark:bg-zinc-100" />
                      )}
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Micro academic credentialing footnote */}
            {/* <div className="text-[10px] font-mono text-zinc-450 dark:text-zinc-500 leading-normal hidden lg:block px-2">
              <p>Designed with pristine spacing and academic rigor. Crafted to represent real-world solutions for educational policy and hospital MIS structures.</p>
            </div> */}
          </div>

          {/* Right Column (Scroll Content) */}
          <div className="lg:col-span-8 space-y-8 pb-10">
            
            {/* 1. About Me section */}
            <section id="about" className="scroll-mt-20">
              <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-xs space-y-6 leading-relaxed transition-colors duration-200">
                {/* Header title */}
                <div className="border-zinc-100 dark:border-zinc-800/80">
                  {/* <span className="font-mono text-[10px] tracking-wider text-zinc-400 dark:text-zinc-500 uppercase">
                    Personal Manifesto
                  </span> */}
                  <h2 className="font-display text-lg font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
                    About Me
                  </h2>
                </div>

                {/* Conceptual Content */}
                <div className="space-y-4">
                  <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed font-sans first-letter:text-3xl first-letter:font-bold first-letter:text-zinc-900 dark:first-letter:text-zinc-100 first-letter:mr-2 first-letter:float-left">
                    {profileData.about}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-1 gap-3 pt-3.5 border-t border-dashed border-zinc-100 dark:border-zinc-800">
                    <p className="font-mono text-[10px] uppercase font-bold text-zinc-400 dark:text-zinc-500 tracking-wider">
                      Professional Summary
                    </p>
                    <div className="space-y-3 pl-1">
                      {profileData.bioDetails.map((detail, index) => (
                        <div key={index} className="flex items-start gap-2.5 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                          <span className="rounded-full bg-zinc-150 dark:bg-zinc-800 p-0.5 mt-0.5 shrink-0">
                            <Sparkles className="h-3 w-3 text-zinc-500 dark:text-zinc-400" />
                          </span>
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 2. Expertise & Skills Section */}
            <section id="skills" className="scroll-mt-20">
              <SkillsSection />
            </section>

            {/* 3. Featured Projects Case Studies Section */}
            <section id="projects" className="scroll-mt-20">
              <ProjectsSection onSelectProject={handleSelectProject} />
            </section>

            {/* 4. Timeline Section */}
            <section id="timeline" className="scroll-mt-20">
              <ExperienceTimeline />
            </section>

            {/* 5. Education Section */}
            <section id="education" className="scroll-mt-20">
              <EducationSection />
            </section>

            {/* 6. Scholarly Papers Section */}
            <section id="research" className="scroll-mt-20">
              <ResearchSection />
            </section>

            {/* 7. Certifications Section */}
            <section id="certifications" className="scroll-mt-20">
              <CertificationsSection />
            </section>

            {/* 8. Contact section */}
            <section id="contact" className="scroll-mt-20">
              <ContactForm />
            </section>

          </div>
        </div>
      </main>

      {/* Footer Navigation Bar */}
      <footer className="bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 py-10 mt-auto leading-relaxed transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-zinc-100 dark:border-zinc-800 pb-8">
            <div className="space-y-1">
              <p className="font-display font-extrabold text-sm text-zinc-900 dark:text-zinc-100 tracking-tight">John Omar D. Esguerra</p>
              <p className="font-mono text-[10px] text-zinc-500 dark:text-zinc-400">Educator | Practitioner | Business Analytics Student</p>
            </div>
            
            <div className="flex flex-wrap gap-4 text-[11px] font-mono text-zinc-400 dark:text-zinc-500">
              <button onClick={() => scrollToSection("about")} className="hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors cursor-pointer">About</button>
              <span>/</span>
              <button onClick={() => scrollToSection("projects")} className="hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors cursor-pointer">Projects</button>
              <span>/</span>
              <button onClick={() => scrollToSection("timeline")} className="hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors cursor-pointer">Experience</button>
              <span>/</span>
              <button onClick={() => scrollToSection("education")} className="hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors cursor-pointer">Education</button>
              <span>/</span>
              <button onClick={() => scrollToSection("research")} className="hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors cursor-pointer">Research Projects</button>
              <span>/</span>
              <button onClick={() => scrollToSection("contact")} className="hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors cursor-pointer">Let's Connect</button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-[10px] font-mono text-zinc-400 dark:text-zinc-500">
            <p>© 2026 John Omar D. Esguerra. All rights reserved.</p>
            <div className="flex items-center gap-1.5">
              {/* <span>Optimized Layout Inspired by Bryl Lim Portfolio</span>
              <span className="h-2 w-[1px] bg-zinc-200 dark:bg-zinc-800" /> */}
              {/* <span>Ver: 3.14.0-Academic</span> */}
            </div>
          </div>
        </div>
      </footer>

      {/* Floating action buttons & back to top trigger */}
      {showScrollTop && (
        <button
          id="back-to-top-btn"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-40 flex h-9 w-9 items-center justify-center rounded-full bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 shadow-md hover:bg-zinc-800 dark:hover:bg-zinc-200 active:bg-zinc-950 transition-all cursor-pointer border border-zinc-700/50 dark:border-zinc-350"
          title="Back to top"
        >
          <ArrowUp className="h-4 w-4" />
        </button>
      )}

      {/* Modern Detailed Drawer/Modal Overlay */}
      <DetailModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={selectedProject}
      />
    </div>
  );
}
