import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Copy,
  CheckCircle2,
  ExternalLink,
  MessageSquare,
  Sparkles,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

interface ContactProps {
  onOpenResume: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenResume }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setIsSubmitting(true);

    // Simulate clean dispatch & trigger confetti
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      // Trigger celebratory confetti
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#4F46E5', '#06B6D4', '#7C3AED', '#38BDF8'],
      });
    }, 700);
  };

  return (
    <section id="contact" className="py-24 relative z-10 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-mono mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            <span>07 // GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Contact & Connect
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Interested in discussing an internship, junior software developer role, or collaborative project? I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/[0.08] space-y-6">
              <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-indigo-400" />
                <span>Contact Details</span>
              </h3>

              {/* Status Note */}
              <div className="p-4 rounded-xl bg-indigo-950/40 border border-indigo-500/20 text-xs text-indigo-200 flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-emerald-400 mt-1 flex-shrink-0 animate-pulse" />
                <span>
                  Currently available for Summer/Fall 2026/2027 Software Developer internships and entry-level engineering roles.
                </span>
              </div>

              {/* Email Card */}
              <div className="p-4 rounded-xl bg-slate-900/60 border border-white/[0.06] hover:border-indigo-500/30 transition-colors">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                    Direct Email
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="text-xs text-indigo-300 hover:text-white flex items-center gap-1 font-mono transition-colors"
                    aria-label="Copy Email address"
                  >
                    {copiedEmail ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400 text-[11px]">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span className="text-[11px]">Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-sm sm:text-base font-semibold text-white hover:text-cyan-300 transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span className="truncate">{personalInfo.email}</span>
                </a>
              </div>

              {/* Phone Card */}
              <div className="p-4 rounded-xl bg-slate-900/60 border border-white/[0.06] hover:border-indigo-500/30 transition-colors">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                    Phone / Mobile
                  </span>
                  <button
                    onClick={handleCopyPhone}
                    className="text-xs text-indigo-300 hover:text-white flex items-center gap-1 font-mono transition-colors"
                    aria-label="Copy Phone number"
                  >
                    {copiedPhone ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400 text-[11px]">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span className="text-[11px]">Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="text-sm sm:text-base font-semibold text-white hover:text-cyan-300 transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>{personalInfo.phoneDisplay}</span>
                </a>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-xl bg-slate-900/60 border border-white/[0.06]">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                  Location & Academic Base
                </span>
                <div className="text-sm font-semibold text-white flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-rose-400 flex-shrink-0" />
                  <span>{personalInfo.location} (Anna University)</span>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="pt-2">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-3">
                  Professional Profiles:
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-900/80 border border-white/[0.08] text-slate-200 hover:text-white hover:border-indigo-400/40 hover:bg-slate-800 transition-all text-xs font-medium"
                    aria-label="LinkedIn profile"
                  >
                    <span className="flex items-center gap-2">
                      <LinkedinIcon className="w-4 h-4 text-blue-400" />
                      <span>LinkedIn</span>
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                  </a>

                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-900/80 border border-white/[0.08] text-slate-200 hover:text-white hover:border-indigo-400/40 hover:bg-slate-800 transition-all text-xs font-medium"
                    aria-label="GitHub profile"
                  >
                    <span className="flex items-center gap-2">
                      <GithubIcon className="w-4 h-4 text-purple-400" />
                      <span>GitHub</span>
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                  </a>
                </div>
              </div>

              {/* View Resume Button */}
              <div className="pt-2">
                <button
                  onClick={onOpenResume}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-white/[0.1] transition-colors"
                >
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span>View Verified Digital Resume</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Message Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/[0.08] relative">
              <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Fill in the details below to initiate contact. Your message will be formatted directly for communication.
              </p>

              {submitted ? (
                <div className="py-12 px-6 rounded-2xl bg-indigo-950/30 border border-indigo-500/30 text-center space-y-4 animate-fadeIn">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400 mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Thank You, {name}!</h4>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Your message has been captured. You can also send it directly via email to{' '}
                    <span className="text-indigo-300 font-mono">{personalInfo.email}</span>.
                  </p>
                  <div className="pt-4 flex flex-wrap justify-center gap-3">
                    <a
                      href={`mailto:${personalInfo.email}?subject=${encodeURIComponent(
                        subject || 'Portfolio Inquiry'
                      )}&body=${encodeURIComponent(message)}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-medium text-white bg-indigo-600 hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-600/30"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Open in Email App</span>
                    </a>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setName('');
                        setEmail('');
                        setSubject('');
                        setMessage('');
                      }}
                      className="px-4 py-2.5 rounded-xl text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">
                        Your Name <span className="text-indigo-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Alex Johnson"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 text-white text-sm border border-white/[0.08] focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">
                        Your Email <span className="text-indigo-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. alex@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 text-white text-sm border border-white/[0.08] focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="e.g. Software Developer Internship Opportunity"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 text-white text-sm border border-white/[0.08] focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Message <span className="text-indigo-400">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell me about your team, role, or how we can collaborate..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 text-white text-sm border border-white/[0.08] focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 outline-none transition-all resize-none"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-slate-400">
                      Response typically within 24 hours
                    </span>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-xs sm:text-sm text-white bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 border border-indigo-400/30 shadow-lg shadow-indigo-600/30 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
                    >
                      <Send className="w-4 h-4" />
                      <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
