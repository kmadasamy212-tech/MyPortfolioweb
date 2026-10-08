import React from 'react';
import {
  GraduationCap,
  Cpu,
  Briefcase,
  Layers,
  CheckCircle,
  FileCode,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react';

const skillPills = [
  'Python',
  'JavaScript',
  'SQL',
  'Django',
  'Flutter',
  'HTML',
  'CSS',
  'Git',
  'GitHub',
  'Power BI',
  'IBM Cognos Analytics',
  'Data Structures & Algorithms',
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative z-10 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-mono mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            <span>01 // BACKGROUND & OVERVIEW</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            About Me
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Bridging software engineering rigor with practical full-stack execution and data analytics insights.
          </p>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Authentic Resume Story */}
          <div className="lg:col-span-6 space-y-6">
            <div className="glass-card p-6 sm:p-8 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2.5">
                <FileCode className="w-5 h-5 text-indigo-400" />
                <span>Engineering Background & Vision</span>
              </h3>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  I am a <span className="text-white font-medium">Computer Science Engineering undergraduate</span> at{' '}
                  <span className="text-indigo-300 font-medium">Anna University, Tamil Nadu</span> (expected graduation in{' '}
                  <span className="text-white font-semibold">2027</span>). My technical journey is centered on crafting reliable
                  software solutions and turning complex data into intuitive, usable applications.
                </p>
                <p>
                  My hands-on experience has been forged directly through{' '}
                  <span className="text-white font-medium">internships and academic projects</span>. During my tenure as a{' '}
                  <span className="text-cyan-300 font-medium">Data Analytics Intern at IBM</span>, I built interactive reporting
                  dashboards and transformed datasets using Power BI and IBM Cognos. As a{' '}
                  <span className="text-indigo-300 font-medium">Full-Stack App Developer Intern at POSTULATE</span>, I contributed to
                  an end-to-end multiplatform application integrating Django REST APIs with Flutter.
                </p>
                <p>
                  I enjoy solving practical engineering challenges using{' '}
                  <span className="text-white font-medium">Python, JavaScript, SQL, Django, and Flutter</span>. I am actively seeking
                  a <span className="text-emerald-300 font-medium">Software Developer internship or junior role</span> where I can
                  contribute clean code, learn from senior peers, and deliver meaningful business value.
                </p>
              </div>

              {/* Core Strengths Highlights */}
              <div className="mt-8 pt-6 border-t border-white/[0.08] space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                  Core Engineering Competencies
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                  {[
                    'Full-Stack Architecture (Django + JS)',
                    'Cross-Platform UI (Flutter)',
                    'Data Analysis & BI Dashboards',
                    'Relational Schema Design & SQL',
                    'Algorithm Analysis & Problem Solving',
                    'Collaborative Git & Version Control',
                  ].map((strength, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-slate-300">
                      <CheckCircle className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                      <span>{strength}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Resume Skill Pills */}
            <div className="glass-card p-6 rounded-2xl">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Resume-Verified Technologies</span>
                </h4>
                <span className="text-[11px] font-mono text-indigo-300">12 Core Skills</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillPills.map((pill) => (
                  <span
                    key={pill}
                    className="text-xs px-3 py-1.5 rounded-lg bg-slate-800/80 text-slate-200 border border-white/[0.08] hover:border-indigo-500/40 hover:text-white transition-all font-mono"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: 4 Stat Cards & Academic Anchor */}
          <div className="lg:col-span-6 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Card 1: 2027 Expected Graduation */}
              <div className="glass-card p-6 rounded-2xl border border-white/[0.08] hover:border-indigo-500/40 transition-all group">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-4 group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div className="text-3xl font-extrabold text-white font-mono tracking-tight group-hover:text-indigo-300 transition-colors">
                  2027
                </div>
                <div className="text-sm font-semibold text-slate-200 mt-1">
                  Expected Graduation
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  B.E. Computer Science, Anna University
                </p>
              </div>

              {/* Card 2: B.E. Computer Science */}
              <div className="glass-card p-6 rounded-2xl border border-white/[0.08] hover:border-cyan-500/40 transition-all group">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                  <Cpu className="w-5 h-5" />
                </div>
                <div className="text-3xl font-extrabold text-white font-mono tracking-tight group-hover:text-cyan-300 transition-colors">
                  B.E.
                </div>
                <div className="text-sm font-semibold text-slate-200 mt-1">
                  Computer Science Engineering
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  Rigorous algorithmic & software foundations
                </p>
              </div>

              {/* Card 3: 2 Internships */}
              <div className="glass-card p-6 rounded-2xl border border-white/[0.08] hover:border-purple-500/40 transition-all group">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-4 group-hover:scale-110 transition-transform">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div className="text-3xl font-extrabold text-white font-mono tracking-tight group-hover:text-purple-300 transition-colors">
                  2
                </div>
                <div className="text-sm font-semibold text-slate-200 mt-1">
                  Internship Experiences
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  IBM (Data Analytics) & POSTULATE (Full-Stack)
                </p>
              </div>

              {/* Card 4: Full-Stack + Analytics */}
              <div className="glass-card p-6 rounded-2xl border border-white/[0.08] hover:border-emerald-500/40 transition-all group">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
                  <Layers className="w-5 h-5" />
                </div>
                <div className="text-2xl font-extrabold text-white font-mono tracking-tight group-hover:text-emerald-300 transition-colors">
                  Full Stack + BI
                </div>
                <div className="text-sm font-semibold text-slate-200 mt-1">
                  Primary Focus Areas
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  Python, Django, Flutter & Data Analytics
                </p>
              </div>
            </div>

            {/* Quick Career Goal Card */}
            <div className="glass-card p-6 sm:p-7 rounded-2xl border border-indigo-500/20 bg-gradient-to-br from-indigo-950/30 via-slate-900/50 to-slate-900/80">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-600/20 border border-indigo-400/30 flex items-center justify-center text-indigo-300 flex-shrink-0">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-white mb-1">
                    Career Objective
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    "Seeking a Software Developer internship or junior role where technical skills in full-stack development,
                    modern APIs, and data analytics can be applied to build reliable, high-impact products within a collaborative
                    engineering environment."
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <a
                      href="#experience"
                      className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
                    >
                      <span>Explore Experience Timeline</span>
                      <span>&rarr;</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
