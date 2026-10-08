import React from 'react';
import {
  Calendar,
  Building2,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative z-10 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
            <span>03 // PROFESSIONAL EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Internship Experience
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Hands-on technical contributions gained through industry internships at IBM and POSTULATE.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Vertical Glowing Connector Line */}
          <div className="hidden md:block absolute left-8 top-6 bottom-6 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-cyan-500 opacity-30" />

          <div className="space-y-10">
            {experienceData.map((exp) => (
              <div key={exp.id} className="relative md:pl-20">
                {/* Timeline Node Badge on Desktop */}
                <div className="hidden md:flex absolute left-5 -translate-x-1/2 top-7 w-7 h-7 rounded-full bg-[#0B1120] border-2 border-indigo-400 items-center justify-center shadow-lg shadow-indigo-500/30 z-10">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                </div>

                {/* Experience Card */}
                <div className="glass-card p-6 sm:p-8 rounded-2xl border border-white/[0.08] hover:border-indigo-500/30 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1.5">
                        <Building2 className="w-4 h-4" />
                        <span className="uppercase font-semibold tracking-wider">
                          {exp.company}
                        </span>
                        <span className="text-slate-600">&bull;</span>
                        <span className="text-slate-400">{exp.type}</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                        {exp.role}
                      </h3>
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-white/[0.04] text-slate-300 border border-white/[0.08]">
                        <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                        <span>{exp.period}</span>
                      </span>
                      {exp.metrics && (
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-mono bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                          <Sparkles className="w-3 h-3 text-cyan-400" />
                          <span>Verified Experience</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Summary */}
                  <div className="pt-6">
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                      {exp.summary}
                    </p>

                    {/* Responsibilities list */}
                    <div className="space-y-3 mb-6">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                        Key Responsibilities & Deliverables:
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {exp.responsibilities.map((resp, rIdx) => (
                          <div
                            key={rIdx}
                            className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/50 border border-white/[0.04] hover:border-white/[0.08] transition-colors"
                          >
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                            <span className="text-xs sm:text-sm text-slate-300 leading-normal">
                              {resp}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technology Badges */}
                    <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center gap-2">
                      <span className="text-xs font-mono text-slate-400 mr-2">
                        Technologies Used:
                      </span>
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-mono px-3 py-1 rounded-md bg-indigo-950/40 text-indigo-300 border border-indigo-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
