import { Award, Calendar, CheckSquare, Search } from "lucide-react";
import { useState, useMemo } from "react";
import { certificationsData } from "../data";

export default function CertificationsSection() {
  const [filterQuery, setFilterQuery] = useState("");

  const filteredCerts = useMemo(() => {
    return certificationsData.filter(
      (cert) =>
        cert.title.toLowerCase().includes(filterQuery.toLowerCase()) ||
        cert.skills.some((sk) => sk.toLowerCase().includes(filterQuery.toLowerCase()))
    );
  }, [filterQuery]);

  return (
    <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-xs space-y-6 transition-colors duration-200">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-zinc-100 dark:border-zinc-800">
        <div className="space-y-1">
          {/* <span className="font-mono text-[10px] tracking-wider text-zinc-400 dark:text-zinc-500 uppercase">
            Credentials & Training
          </span> */}
          <h2 className="font-display text-lg font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
            Professional Certifications
          </h2>
        </div>

        {/* Certifications filter input */}
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-3.5 w-3.5 text-zinc-400 dark:text-zinc-500" />
          <input
            id="certs-filter-input"
            type="text"
            placeholder="Filter certifications..."
            value={filterQuery}
            onChange={(e) => setFilterQuery(e.target.value)}
            className="w-full sm:w-52 pl-8 pr-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-zinc-50/50 dark:bg-zinc-800 text-xs text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500 focus:bg-white dark:focus:bg-zinc-800 focus:outline-none focus:border-zinc-400 dark:focus:border-zinc-500 transition-colors"
          />
        </div>
      </div>

      {/* Grid structure */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredCerts.map((cert) => (
          <div
            key={cert.id}
            className="flex flex-col justify-between rounded-lg border border-zinc-300 hover:border-zinc-800 dark:border-zinc-800 dark:hover:border-zinc-500 bg-zinc-50/10 dark:bg-zinc-950/20 p-4 hover:bg-zinc-50/30 dark:hover:bg-zinc-900/40 transition-all duration-300 leading-normal"
          >
            <div className="space-y-2.5">
              {/* Award Badge & Issuer */}
              <div className="flex items-start justify-between gap-2">
                <div className="rounded-lg bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 p-1.5 text-zinc-500 dark:text-zinc-400">
                  <Award className="h-4 w-4" />
                </div>
                <span className="font-mono text-[10px] text-zinc-400 dark:text-zinc-500">{cert.date}</span>
              </div>

              {/* Title & Issuer */}
              <div className="space-y-0.5">
                <h3 className="font-display text-xs font-bold text-zinc-800 dark:text-zinc-200 tracking-tight leading-normal">
                  {cert.title}
                </h3>
                <p className="font-mono text-[9px] text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
                  {cert.issuer}
                </p>
                {/* {cert.credentialId && (
                  <p className="font-mono text-[9px] text-zinc-500 dark:text-zinc-400">
                    Credential ID: {cert.credentialId}
                  </p>
                )}
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex text-[10px] font-mono text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 underline underline-offset-2"
                  >
                    View credential
                  </a>
                )} */}
              </div>
            </div>

            {/* Skills associated */}
            <div className="pt-3.5 mt-3.5 border-t border-dashed border-zinc-100 dark:border-zinc-800/80 space-y-1.5">
              <span className="font-mono text-[8px] text-zinc-400 dark:text-zinc-500 uppercase tracking-widest block">
                SKILLS
              </span>
              <div className="flex flex-wrap gap-1">
                {cert.skills.map((sk) => (
                  <span
                    key={sk}
                    className="px-1.5 py-0.5 rounded text-[8px] font-mono bg-white dark:bg-zinc-900 text-zinc-500 dark:text-zinc-400 border border-zinc-150 dark:border-zinc-800"
                  >
                    {sk}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Verification footer */}
      {/* <div className="flex items-center gap-1.5 rounded-lg border border-zinc-100 dark:border-zinc-800 bg-zinc-50/40 dark:bg-zinc-950/40 p-3 text-[11px] text-zinc-500 dark:text-zinc-400 font-mono">
        <CheckSquare className="h-4 w-4 text-zinc-400 dark:text-zinc-500 shrink-0" />
        <span>Credentials completed through graduate research courses and accredited corporate analytics institutions.</span>
      </div> */}
    </div>
  );
}
