import React, { useState } from 'react';
import {
  X,
  Printer,
  Copy,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';
import {
  personalInfo,
  experienceData,
  projectsData,
  educationData,
} from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copiedText, setCopiedText] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const resumeText = `
${personalInfo.name}
${personalInfo.title}
Email: ${personalInfo.email} | Phone: ${personalInfo.phone} | Location: ${personalInfo.location}
LinkedIn: ${personalInfo.linkedin}
GitHub: ${personalInfo.github}

PROFESSIONAL SUMMARY
${personalInfo.summary}

EDUCATION
${educationData.degree} in ${educationData.field}
${educationData.institution}, ${educationData.location}
Expected Graduation: ${educationData.expectedGraduation}

TECHNICAL SKILLS
- Programming Languages: Python, JavaScript, SQL
- Web Technologies: HTML, CSS
- Frameworks: Django, Flutter
- Version Control: Git, GitHub
- Data & Analytics: Power BI, IBM Cognos Analytics
- Databases: MySQL, SQL
- Computer Science: Data Structures & Algorithms

INTERNSHIP EXPERIENCE
1. ${experienceData[0].role} - ${experienceData[0].company}
${experienceData[0].responsibilities.map((r) => `  * ${r}`).join('\n')}

2. ${experienceData[1].role} - ${experienceData[1].company}
${experienceData[1].responsibilities.map((r) => `  * ${r}`).join('\n')}

ACADEMIC & PRACTICAL PROJECTS
1. ${projectsData[0].title} (${projectsData[0].category})
${projectsData[0].description}
Technologies: ${projectsData[0].technologies.join(', ')}

2. ${projectsData[1].title} (${projectsData[1].category})
${projectsData[1].description}
Technologies: ${projectsData[1].technologies.join(', ')}
    `.trim();

    navigator.clipboard.writeText(resumeText);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-[#0F172A] border border-white/[0.12] rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden my-6">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0B1120] border-b border-white/[0.08] sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-mono font-bold text-xs">
              MK
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white leading-tight">
                Madasamy K — Verified Resume
              </h3>
              <p className="text-[11px] font-mono text-slate-400">
                Anna University (CSE 2027) · Junior Software Developer
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors"
              title="Copy Plain Text"
            >
              {copiedText ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Text</span>
                </>
              )}
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium text-white bg-indigo-600 hover:bg-indigo-500 transition-colors shadow-md shadow-indigo-600/30"
              title="Print or Save PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-white/[0.08] rounded-lg transition-colors ml-1"
              aria-label="Close Resume Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document Area */}
        <div className="p-6 sm:p-10 max-h-[80vh] overflow-y-auto space-y-8 bg-[#0F172A] text-slate-200 text-xs sm:text-sm">
          {/* Resume Header */}
          <div className="pb-6 border-b border-white/[0.1] text-center space-y-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {personalInfo.name}
            </h1>
            <p className="text-indigo-400 font-mono font-medium text-sm">
              {personalInfo.title}
            </p>
            <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-1 text-slate-400 text-xs pt-1">
              <span>{personalInfo.email}</span>
              <span>&bull;</span>
              <span>{personalInfo.phoneDisplay}</span>
              <span>&bull;</span>
              <span>{personalInfo.location}</span>
            </div>
            <div className="flex justify-center items-center gap-4 text-xs pt-1 font-mono">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline flex items-center gap-1"
              >
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <span>&bull;</span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline flex items-center gap-1"
              >
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-bold border-b border-white/[0.08] pb-1">
              Professional Summary
            </h2>
            <p className="text-slate-300 leading-relaxed pt-1">
              {personalInfo.summary}
            </p>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-bold border-b border-white/[0.08] pb-1">
              Education
            </h2>
            <div className="pt-1 flex flex-col sm:flex-row sm:items-center justify-between">
              <div>
                <p className="font-bold text-white text-sm">
                  {educationData.degree} — {educationData.field}
                </p>
                <p className="text-slate-400">
                  {educationData.institution}, {educationData.location}
                </p>
              </div>
              <span className="font-mono text-cyan-400 text-xs mt-1 sm:mt-0">
                Expected Graduation: {educationData.expectedGraduation}
              </span>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-bold border-b border-white/[0.08] pb-1">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-xs">
              <div>
                <span className="font-semibold text-white">Programming Languages: </span>
                <span className="text-slate-300">Python, JavaScript, SQL</span>
              </div>
              <div>
                <span className="font-semibold text-white">Web Technologies: </span>
                <span className="text-slate-300">HTML, CSS</span>
              </div>
              <div>
                <span className="font-semibold text-white">Frameworks: </span>
                <span className="text-slate-300">Django, Flutter</span>
              </div>
              <div>
                <span className="font-semibold text-white">Version Control: </span>
                <span className="text-slate-300">Git, GitHub</span>
              </div>
              <div>
                <span className="font-semibold text-white">Data & Analytics: </span>
                <span className="text-slate-300">Power BI, IBM Cognos Analytics</span>
              </div>
              <div>
                <span className="font-semibold text-white">Databases: </span>
                <span className="text-slate-300">MySQL, SQL</span>
              </div>
              <div className="sm:col-span-2">
                <span className="font-semibold text-white">Computer Science: </span>
                <span className="text-slate-300">Data Structures & Algorithms</span>
              </div>
            </div>
          </div>

          {/* Internship Experience */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-bold border-b border-white/[0.08] pb-1">
              Internship Experience
            </h2>

            {experienceData.map((exp) => (
              <div key={exp.id} className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <p className="font-bold text-white text-sm">
                    {exp.role} <span className="text-slate-500 font-normal">|</span>{' '}
                    <span className="text-indigo-300">{exp.company}</span>
                  </p>
                  <span className="text-xs font-mono text-slate-400">{exp.period}</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-slate-300 pl-1 text-xs">
                  {exp.responsibilities.map((r, i) => (
                    <li key={i} className="leading-relaxed">
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Academic Projects */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-bold border-b border-white/[0.08] pb-1">
              Projects
            </h2>

            {projectsData.map((p) => (
              <div key={p.id} className="space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <p className="font-bold text-white text-sm">{p.title}</p>
                  <span className="text-xs font-mono text-cyan-400">{p.category}</span>
                </div>
                <p className="text-slate-300 leading-relaxed text-xs">
                  {p.description}
                </p>
                <div className="flex flex-wrap items-center gap-1 pt-1 text-xs font-mono text-slate-400">
                  <span className="text-slate-500">Tech:</span>
                  <span>{p.technologies.join(', ')}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 bg-[#0B1120] border-t border-white/[0.08] flex items-center justify-between text-xs text-slate-400 font-mono">
          <span>Official Resume of Madasamy K</span>
          <button
            onClick={onClose}
            className="text-slate-300 hover:text-white transition-colors"
          >
            Close Viewer [ESC]
          </button>
        </div>
      </div>
    </div>
  );
};
