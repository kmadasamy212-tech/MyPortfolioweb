import React, { useState } from 'react';
import {
  Code,
  FileCode2,
  Database,
  Server,
  Smartphone,
  GitBranch,
  BarChart3,
  PieChart,
  Binary,
  Palette,
  Terminal,
  Layers,
  Sparkles,
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';
import { GithubIcon } from './SocialIcons';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Technologies' },
    { id: 'languages', label: 'Languages' },
    { id: 'frameworks', label: 'Frameworks' },
    { id: 'web', label: 'Web Tech' },
    { id: 'data_analytics', label: 'Data & BI' },
    { id: 'databases', label: 'Databases' },
    { id: 'version_control', label: 'Version Control' },
    { id: 'core_cs', label: 'Core CS' },
  ];

  const filteredSkills =
    selectedCategory === 'all'
      ? skillsData
      : skillsData.filter((skill) => skill.category === selectedCategory);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Python':
        return <Terminal className="w-6 h-6 text-yellow-400" />;
      case 'FileCode2':
        return <FileCode2 className="w-6 h-6 text-amber-300" />;
      case 'Database':
        return <Database className="w-6 h-6 text-cyan-400" />;
      case 'Code':
        return <Code className="w-6 h-6 text-orange-400" />;
      case 'Palette':
        return <Palette className="w-6 h-6 text-blue-400" />;
      case 'Server':
        return <Server className="w-6 h-6 text-emerald-400" />;
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-sky-400" />;
      case 'GitBranch':
        return <GitBranch className="w-6 h-6 text-rose-400" />;
      case 'Github':
        return <GithubIcon className="w-6 h-6 text-purple-400" />;
      case 'BarChart3':
        return <BarChart3 className="w-6 h-6 text-amber-400" />;
      case 'PieChart':
        return <PieChart className="w-6 h-6 text-blue-400" />;
      case 'Binary':
        return <Binary className="w-6 h-6 text-indigo-400" />;
      default:
        return <Code className="w-6 h-6 text-indigo-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative z-10 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>02 // TECHNICAL ARSENAL</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
              Skills & Technologies
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              Structured strictly according to verified experience in full-stack engineering, data analytics, and computer science fundamentals.
            </p>
          </div>

          <div className="mt-6 md:mt-0">
            <span className="text-xs font-mono text-slate-400 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Grounded in Resume & Practical Implementations</span>
            </span>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all whitespace-nowrap border ${
                selectedCategory === cat.id
                  ? 'bg-indigo-600 text-white border-indigo-500 shadow-md shadow-indigo-600/30'
                  : 'bg-slate-900/60 text-slate-400 border-white/[0.08] hover:text-white hover:bg-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="glass-card p-6 rounded-2xl group hover:-translate-y-1 transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
            >
              {/* Subtle hover gradient glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 via-transparent to-cyan-500/0 group-hover:from-indigo-500/5 group-hover:to-cyan-500/5 transition-all duration-500 pointer-events-none" />

              <div>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-white/[0.08] flex items-center justify-center group-hover:scale-110 group-hover:border-indigo-500/30 transition-transform">
                    {getIcon(skill.iconName)}
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-white/[0.04] text-slate-300 border border-white/[0.08]">
                    {skill.tag}
                  </span>
                </div>

                <div className="mb-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-indigo-400">
                    {skill.categoryLabel}
                  </span>
                  <h3 className="text-lg font-bold text-white group-hover:text-indigo-200 transition-colors">
                    {skill.name}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                  {skill.description}
                </p>
              </div>

              {/* Status indicator bar (Non-fake representation) */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs">
                <span className="font-mono text-slate-500 text-[11px] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Applied In Projects / Internships</span>
                </span>
                <span className="text-indigo-400 font-mono text-[11px]">&bull;&bull;&bull;</span>
              </div>
            </div>
          ))}
        </div>

        {/* Skill Category Summary Table / Bento Box */}
        <div className="mt-12 glass-panel p-6 sm:p-8 rounded-2xl">
          <h3 className="text-base font-semibold text-white mb-4 flex items-center gap-2">
            <Layers className="w-4 h-4 text-cyan-400" />
            <span>Curriculum & Practical Technology Stack Summary</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-xs">
            <div className="space-y-1.5">
              <span className="text-slate-400 font-mono uppercase text-[10px]">Languages</span>
              <p className="text-slate-200 font-medium">Python, JavaScript, SQL</p>
              <p className="text-slate-500 text-[11px]">Primary backend, scripting & database querying</p>
            </div>
            <div className="space-y-1.5">
              <span className="text-slate-400 font-mono uppercase text-[10px]">Frameworks & Web</span>
              <p className="text-slate-200 font-medium">Django, Flutter, HTML, CSS</p>
              <p className="text-slate-500 text-[11px]">Web APIs, multiplatform apps & modern interfaces</p>
            </div>
            <div className="space-y-1.5">
              <span className="text-slate-400 font-mono uppercase text-[10px]">Data & Tools</span>
              <p className="text-slate-200 font-medium">Power BI, IBM Cognos, MySQL</p>
              <p className="text-slate-500 text-[11px]">Interactive dashboards & database administration</p>
            </div>
            <div className="space-y-1.5">
              <span className="text-slate-400 font-mono uppercase text-[10px]">Foundations</span>
              <p className="text-slate-200 font-medium">Git, GitHub, Data Structures & Algorithms</p>
              <p className="text-slate-500 text-[11px]">Team version control & computational thinking</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
