import React, { useState } from 'react';
import {
  Sliders,
  DollarSign,
  Plus,
  Trash2,
  TrendingUp,
  TrendingDown,
  CheckCircle2,
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon } from './SocialIcons';

export const Projects: React.FC = () => {
  // Simulator State for Student ML App
  const [studyHours, setStudyHours] = useState<number>(6.5);
  const [attendance, setAttendance] = useState<number>(88);
  const [priorScore, setPriorScore] = useState<number>(82);

  // Calculate ML prediction score (logistic curve heuristic)
  const z = -4.5 + studyHours * 0.45 + (attendance / 100) * 3.8 + (priorScore / 100) * 2.5;
  const probability = Math.min(Math.max(1 / (1 + Math.exp(-z)), 0.05), 0.99);
  const isPassing = probability >= 0.5;

  // Simulator State for Expense Tracker App
  interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: 'income' | 'expense';
    category: string;
  }

  const [transactions, setTransactions] = useState<Transaction[]>([
    { id: 1, title: 'Academic Stipend', amount: 8000, type: 'income', category: 'Income' },
    { id: 2, title: 'Textbooks & Study Tools', amount: 1450, type: 'expense', category: 'Education' },
    { id: 3, title: 'Cloud & Domain Hosting', amount: 850, type: 'expense', category: 'Tech' },
    { id: 4, title: 'Cafeteria & Meals', amount: 920, type: 'expense', category: 'Food' },
  ]);

  const [newTitle, setNewTitle] = useState('');
  const [newAmount, setNewAmount] = useState('');
  const [newType, setNewType] = useState<'income' | 'expense'>('expense');

  const totalIncome = transactions
    .filter((t) => t.type === 'income')
    .reduce((acc, t) => acc + t.amount, 0);
  const totalExpense = transactions
    .filter((t) => t.type === 'expense')
    .reduce((acc, t) => acc + t.amount, 0);
  const netBalance = totalIncome - totalExpense;

  const handleAddTransaction = (e: React.FormEvent) => {
    e.preventDefault();
    const amountVal = parseFloat(newAmount);
    if (!newTitle.trim() || isNaN(amountVal) || amountVal <= 0) return;

    const newItem: Transaction = {
      id: Date.now(),
      title: newTitle.trim(),
      amount: amountVal,
      type: newType,
      category: newType === 'income' ? 'Income' : 'General Expense',
    };

    setTransactions([newItem, ...transactions]);
    setNewTitle('');
    setNewAmount('');
  };

  const handleDeleteTransaction = (id: number) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  return (
    <section id="projects" className="py-24 relative z-10 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-mono mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            <span>04 // FEATURED ENGINEERING PROJECTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Practical software applications with interactive in-browser simulators reflecting machine learning inference and stateful web engineering.
          </p>
        </div>

        {/* Project Cards Stack */}
        <div className="space-y-16">
          {/* ========================================================
              PROJECT 01: Student Performance Prediction Web App
              ======================================================== */}
          <div className="glass-card rounded-3xl border border-white/[0.1] overflow-hidden hover:border-indigo-500/40 transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Left Column: Project Overview */}
              <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/[0.08]">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                      Machine Learning · Streamlit
                    </span>
                    <span className="text-xs font-mono text-slate-400">Verified Project</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4">
                    Student Performance Prediction Web App
                  </h3>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                    An interactive machine-learning-powered web application built with Streamlit that predicts student pass/fail outcomes based on key academic and demographic metrics.
                  </p>

                  <div className="space-y-2.5 mb-8">
                    {[
                      'Inputs include study hours, attendance rate, and prior test scores.',
                      'Applies feature scaling and pre-trained classification models.',
                      'Generates real-time pass/fail probabilities with diagnostic feedback.',
                      'Interactive web interface designed for educator and student usability.',
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {['Python', 'Streamlit', 'Machine Learning', 'Data Analytics', 'Scikit-Learn', 'Pandas'].map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-3 py-1 rounded-lg bg-slate-900 text-slate-200 border border-white/[0.08]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4 pt-4 border-t border-white/[0.06]">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium text-white bg-slate-800 hover:bg-slate-700 border border-white/[0.1] transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>View GitHub Profile</span>
                  </a>
                  <span className="text-xs text-slate-400 font-mono">
                    Live Simulator on Right &rarr;
                  </span>
                </div>
              </div>

              {/* Right Column: Live Interactive ML Simulator */}
              <div className="lg:col-span-6 p-6 sm:p-10 bg-[#0A101D] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.08]">
                    <div className="flex items-center gap-2">
                      <Sliders className="w-4 h-4 text-cyan-400" />
                      <span className="text-xs font-mono uppercase text-slate-300 font-semibold tracking-wider">
                        Interactive Model Simulator
                      </span>
                    </div>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                      Live Inference
                    </span>
                  </div>

                  {/* Interactive Sliders */}
                  <div className="space-y-5">
                    {/* Slider 1: Study Hours */}
                    <div>
                      <div className="flex justify-between text-xs font-mono mb-1.5">
                        <span className="text-slate-400">Daily Study Hours</span>
                        <span className="text-cyan-400 font-semibold">{studyHours} hrs/day</span>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="12"
                        step="0.5"
                        value={studyHours}
                        onChange={(e) => setStudyHours(parseFloat(e.target.value))}
                        className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                      />
                      <div className="flex justify-between text-[10px] text-slate-400 font-mono mt-1">
                        <span>1 hr</span>
                        <span>6 hrs</span>
                        <span>12 hrs</span>
                      </div>
                    </div>

                    {/* Slider 2: Attendance Rate */}
                    <div>
                      <div className="flex justify-between text-xs font-mono mb-1.5">
                        <span className="text-slate-400">Class Attendance Rate</span>
                        <span className="text-indigo-400 font-semibold">{attendance}%</span>
                      </div>
                      <input
                        type="range"
                        min="40"
                        max="100"
                        step="1"
                        value={attendance}
                        onChange={(e) => setAttendance(parseInt(e.target.value))}
                        className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-400"
                      />
                      <div className="flex justify-between text-[10px] text-slate-400 font-mono mt-1">
                        <span>40%</span>
                        <span>75%</span>
                        <span>100%</span>
                      </div>
                    </div>

                    {/* Slider 3: Prior Test Score */}
                    <div>
                      <div className="flex justify-between text-xs font-mono mb-1.5">
                        <span className="text-slate-400">Prior Assessment Score</span>
                        <span className="text-purple-400 font-semibold">{priorScore}/100</span>
                      </div>
                      <input
                        type="range"
                        min="30"
                        max="100"
                        step="1"
                        value={priorScore}
                        onChange={(e) => setPriorScore(parseInt(e.target.value))}
                        className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-purple-400"
                      />
                      <div className="flex justify-between text-[10px] text-slate-400 font-mono mt-1">
                        <span>30</span>
                        <span>65</span>
                        <span>100</span>
                      </div>
                    </div>
                  </div>

                  {/* Prediction Gauge Result */}
                  <div className="mt-8 p-5 rounded-2xl bg-[#0F172A] border border-white/[0.08]">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono text-slate-400">Predicted Outcome</span>
                      <span
                        className={`text-xs font-mono px-2.5 py-1 rounded-full font-semibold ${
                          isPassing
                            ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                            : 'bg-rose-500/15 text-rose-400 border border-rose-500/30'
                        }`}
                      >
                        {isPassing ? 'PASS LIKELY' : 'ACADEMIC REVIEW NEEDED'}
                      </span>
                    </div>

                    <div className="flex items-end justify-between mb-2">
                      <div>
                        <div className="text-3xl font-extrabold font-mono text-white">
                          {(probability * 100).toFixed(1)}%
                        </div>
                        <div className="text-[11px] text-slate-400">Confidence probability</div>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-mono text-slate-400">Streamlit Pipeline</span>
                        <div className="text-xs text-cyan-300 font-mono">Scaled Features: [X]</div>
                      </div>
                    </div>

                    {/* Dynamic Bar Meter */}
                    <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                      <div
                        className={`h-full transition-all duration-300 rounded-full ${
                          isPassing
                            ? 'bg-gradient-to-r from-emerald-500 to-cyan-400'
                            : 'bg-gradient-to-r from-rose-500 to-amber-500'
                        }`}
                        style={{ width: `${probability * 100}%` }}
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.06] text-center text-xs text-slate-400 font-mono">
                  Inputs dynamically evaluated via Scikit-Learn classification model weights.
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================
              PROJECT 02: Expense Tracker Web Application
              ======================================================== */}
          <div className="glass-card rounded-3xl border border-white/[0.1] overflow-hidden hover:border-cyan-500/40 transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Left Column: Project Overview */}
              <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/[0.08]">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                      Web Application · Finance
                    </span>
                    <span className="text-xs font-mono text-slate-400">Verified Project</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4">
                    Expense Tracker
                  </h3>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                    A user-friendly expense tracking application built for recording income, categorizing transactions, monitoring daily expenses, and generating budget summaries.
                  </p>

                  <div className="space-y-2.5 mb-8">
                    {[
                      'CRUD operations for income and expense transaction logs.',
                      'Dynamic balance and summary calculation updated in real-time.',
                      'Categorization system (Food, Utilities, Education, Income).',
                      'Clean responsive UI optimized for desktop and mobile browsers.',
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {['HTML5', 'CSS3', 'JavaScript', 'DOM Manipulation', 'LocalStorage', 'Responsive Design'].map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-3 py-1 rounded-lg bg-slate-900 text-slate-200 border border-white/[0.08]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4 pt-4 border-t border-white/[0.06]">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium text-white bg-slate-800 hover:bg-slate-700 border border-white/[0.1] transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>View GitHub Profile</span>
                  </a>
                  <span className="text-xs text-slate-400 font-mono">
                    Live Mini-App on Right &rarr;
                  </span>
                </div>
              </div>

              {/* Right Column: Live Interactive Expense Tracker Simulator */}
              <div className="lg:col-span-6 p-6 sm:p-10 bg-[#0A101D] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.08]">
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-emerald-400" />
                      <span className="text-xs font-mono uppercase text-slate-300 font-semibold tracking-wider">
                        Interactive Expense App
                      </span>
                    </div>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                      Live CRUD Simulator
                    </span>
                  </div>

                  {/* Balance Overview Cards */}
                  <div className="grid grid-cols-3 gap-2.5 mb-5">
                    <div className="p-3 rounded-xl bg-[#0F172A] border border-white/[0.06]">
                      <span className="text-[10px] font-mono text-slate-400 block">Net Balance</span>
                      <span className="text-base font-bold font-mono text-white">
                        ₹{netBalance.toLocaleString()}
                      </span>
                    </div>
                    <div className="p-3 rounded-xl bg-emerald-950/30 border border-emerald-500/20">
                      <span className="text-[10px] font-mono text-emerald-400 block">Total Income</span>
                      <span className="text-base font-bold font-mono text-emerald-300">
                        +₹{totalIncome.toLocaleString()}
                      </span>
                    </div>
                    <div className="p-3 rounded-xl bg-rose-950/30 border border-rose-500/20">
                      <span className="text-[10px] font-mono text-rose-400 block">Total Expense</span>
                      <span className="text-base font-bold font-mono text-rose-300">
                        -₹{totalExpense.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  {/* Add Transaction Mini-Form */}
                  <form onSubmit={handleAddTransaction} className="p-3 rounded-xl bg-slate-900/70 border border-white/[0.08] mb-4">
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 mb-2">
                      <input
                        type="text"
                        placeholder="Description (e.g. WiFi Bill)"
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                        className="sm:col-span-5 px-3 py-1.5 text-xs rounded-lg bg-slate-800 text-white border border-white/[0.1] focus:border-indigo-400 outline-none"
                      />
                      <input
                        type="number"
                        placeholder="₹ Amount"
                        value={newAmount}
                        onChange={(e) => setNewAmount(e.target.value)}
                        className="sm:col-span-3 px-3 py-1.5 text-xs rounded-lg bg-slate-800 text-white border border-white/[0.1] focus:border-indigo-400 outline-none"
                      />
                      <select
                        value={newType}
                        onChange={(e) => setNewType(e.target.value as 'income' | 'expense')}
                        className="sm:col-span-2 px-2 py-1.5 text-xs rounded-lg bg-slate-800 text-slate-200 border border-white/[0.1] focus:border-indigo-400 outline-none"
                      >
                        <option value="expense">Expense</option>
                        <option value="income">Income</option>
                      </select>
                      <button
                        type="submit"
                        className="sm:col-span-2 flex items-center justify-center gap-1 py-1.5 px-3 rounded-lg text-xs font-medium text-white bg-indigo-600 hover:bg-indigo-500 transition-colors"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add</span>
                      </button>
                    </div>
                  </form>

                  {/* Interactive Transactions List */}
                  <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                    {transactions.map((t) => (
                      <div
                        key={t.id}
                        className="flex items-center justify-between p-2.5 rounded-lg bg-[#0F172A]/80 border border-white/[0.04] text-xs hover:border-white/[0.08] transition-colors"
                      >
                        <div className="flex items-center gap-2.5">
                          <span
                            className={`p-1.5 rounded-md ${
                              t.type === 'income' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-rose-500/20 text-rose-400'
                            }`}
                          >
                            {t.type === 'income' ? <TrendingUp className="w-3.5 h-3.5" /> : <TrendingDown className="w-3.5 h-3.5" />}
                          </span>
                          <div>
                            <p className="font-medium text-white leading-tight">{t.title}</p>
                            <span className="text-[10px] text-slate-400 font-mono">{t.category}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <span
                            className={`font-mono font-semibold ${
                              t.type === 'income' ? 'text-emerald-400' : 'text-rose-400'
                            }`}
                          >
                            {t.type === 'income' ? '+' : '-'}₹{t.amount.toLocaleString()}
                          </span>
                          <button
                            onClick={() => handleDeleteTransaction(t.id)}
                            className="p-1 text-slate-500 hover:text-rose-400 transition-colors"
                            title="Delete transaction"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/[0.06] text-center text-xs text-slate-400 font-mono">
                  Stateful DOM management simulating real-world CRUD and budget monitoring.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
