import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-white/[0.08] bg-[#070B14] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/[0.06]">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-400 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                <span className="font-mono text-white font-bold text-xs">MK</span>
              </div>
              <span className="font-bold text-white tracking-tight text-lg">
                Madasamy K
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Junior Software Developer & Computer Science undergraduate at Anna University. Building practical software solutions with code, data, and modern web technologies.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Open to Software Developer Roles & Internships</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs text-slate-400">
              <a href="#home" className="hover:text-white transition-colors">Home</a>
              <a href="#about" className="hover:text-white transition-colors">About</a>
              <a href="#skills" className="hover:text-white transition-colors">Skills</a>
              <a href="#experience" className="hover:text-white transition-colors">Experience</a>
              <a href="#projects" className="hover:text-white transition-colors">Projects</a>
              <a href="#education" className="hover:text-white transition-colors">Education</a>
              <a href="#capabilities" className="hover:text-white transition-colors">What I Can Build</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>

          {/* Socials & Connect */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300">
              Connect Directly
            </h4>
            <div className="flex items-center gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-xl bg-slate-900 border border-white/[0.08] text-slate-300 hover:text-white hover:border-indigo-400/40 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-xl bg-slate-900 border border-white/[0.08] text-slate-300 hover:text-white hover:border-indigo-400/40 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Send Email"
                className="p-2.5 rounded-xl bg-slate-900 border border-white/[0.08] text-slate-300 hover:text-white hover:border-indigo-400/40 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
            <p className="text-[11px] font-mono text-slate-400 pt-1">
              Email: {personalInfo.email}
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} Madasamy K. All rights reserved.
          </div>

          <div className="flex items-center gap-2">
            <span>Built with React, TypeScript & Tailwind CSS</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
            aria-label="Scroll to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
