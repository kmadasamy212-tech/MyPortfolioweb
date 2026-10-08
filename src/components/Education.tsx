import React from 'react';
import {
  GraduationCap,
  Calendar,
  MapPin,
  BookOpen,
  Binary,
  CheckCircle2,
} from 'lucide-react';
import { educationData } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 relative z-10 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>05 // ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Education
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Rigorous undergraduate studies in Computer Science Engineering at Anna University, Tamil Nadu.
          </p>
        </div>

        {/* Education Hero Card */}
        <div className="glass-card p-8 sm:p-10 rounded-3xl border border-white/[0.1] relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Degree & Institution Info */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-indigo-600/20 border border-indigo-400/30 flex items-center justify-center text-indigo-400 flex-shrink-0 shadow-lg shadow-indigo-600/20">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span className="text-xs font-mono px-3 py-0.5 rounded-full bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                      Undergraduate Degree
                    </span>
                    <span className="text-xs font-mono text-cyan-400 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Class of {educationData.expectedGraduation}</span>
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {educationData.degree}
                  </h3>
                  <p className="text-lg font-semibold text-indigo-300">
                    {educationData.field}
                  </p>
                </div>
              </div>

              {/* Institution and Location */}
              <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-300 font-mono pt-2">
                <div className="flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-cyan-400" />
                  <span className="font-semibold text-white">{educationData.institution}</span>
                </div>
                <span className="text-slate-600">&bull;</span>
                <div className="flex items-center gap-1.5 text-slate-400">
                  <MapPin className="w-4 h-4 text-slate-500" />
                  <span>{educationData.location}</span>
                </div>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {educationData.description}
              </p>

              {/* Academic Highlights */}
              <div className="space-y-2.5 pt-4 border-t border-white/[0.08]">
                {educationData.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Key Coursework & Technical Domains */}
            <div className="lg:col-span-5 bg-[#090E1A]/80 p-6 sm:p-7 rounded-2xl border border-white/[0.06] space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 flex items-center gap-2">
                  <Binary className="w-4 h-4 text-cyan-400" />
                  <span>Key Coursework & Focus Areas</span>
                </h4>
                <span className="text-[11px] font-mono text-indigo-400">Anna University</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {educationData.coursework.map((course) => (
                  <span
                    key={course}
                    className="text-xs px-3 py-1.5 rounded-lg bg-slate-800 text-slate-200 border border-white/[0.08] hover:border-indigo-400/30 transition-colors"
                  >
                    {course}
                  </span>
                ))}
              </div>

              {/* Foundation Pillars */}
              <div className="pt-4 border-t border-white/[0.06] space-y-3">
                <div className="p-3 rounded-xl bg-slate-900/60 border border-white/[0.04]">
                  <span className="text-xs font-semibold text-white block mb-0.5">
                    Algorithmic Thinking & Problem Solving
                  </span>
                  <p className="text-xs text-slate-400">
                    Applying Data Structures and Algorithmic concepts to build efficient, scalable code solutions.
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/60 border border-white/[0.04]">
                  <span className="text-xs font-semibold text-white block mb-0.5">
                    Software Development Lifecycle (SDLC)
                  </span>
                  <p className="text-xs text-slate-400">
                    Experience in modular architecture, iterative code releases, testing, and team version control.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
