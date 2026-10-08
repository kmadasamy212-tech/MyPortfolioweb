import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  Download,
  Mail,
  Play,
  CheckCircle2,
  Copy,
  Terminal,
  Sparkles,
} from 'lucide-react';
import { personalInfo, rotatingKeywords } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [keywordIndex, setKeywordIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'python' | 'django' | 'sql' | 'flutter'>('python');
  const [isRunningCode, setIsRunningCode] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);

  // Rotating keyword ticker
  useEffect(() => {
    const interval = setInterval(() => {
      setKeywordIndex((prev) => (prev + 1) % rotatingKeywords.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const codeSnippets = {
    python: {
      fileName: 'student_model.py',
      lang: 'python',
      badge: 'ML · Streamlit',
      code: `# Predict Student Pass/Fail Probability
import pandas as pd
from sklearn.linear_model import LogisticRegression

def predict_student_outcome(hours, attendance, prior_score):
    """Predicts pass/fail from demographic & academic inputs"""
    features = pd.DataFrame([{
        "study_hours": hours,
        "attendance_rate": attendance,
        "prior_score": prior_score
    }])
    prob = model.predict_proba(features)[0][1]
    status = "Pass Likely" if prob >= 0.50 else "Review Needed"
    return {"probability": f"{prob * 100:.1f}%", "status": status}

# Real-time Streamlit invocation
result = predict_student_outcome(hours=7.5, attendance=92, prior_score=85)
print(f"Prediction: {result['status']} ({result['probability']})")`,
      output: `[Streamlit Engine] Model loaded: LogisticRegression(v1.2)
→ Inputs: hours=7.5, attendance=92%, prior_score=85
✓ Real-time Prediction: Pass Likely (94.2% confidence)
✓ Ready for student dashboard evaluation.`,
    },
    django: {
      fileName: 'api_views.py',
      lang: 'python',
      badge: 'Django REST',
      code: `# POSTULATE Internship - Core API View
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import ApplicationRecord
from .serializers import RecordSerializer

class ApplicationEndpoint(APIView):
    """Serves mobile Flutter client & web interfaces"""
    def get(self, request):
        records = ApplicationRecord.objects.all().order_by('-created_at')
        serializer = RecordSerializer(records, many=True)
        return Response({
            "status": "success",
            "count": records.count(),
            "data": serializer.data
        })`,
      output: `HTTP/1.1 200 OK
Content-Type: application/json
{
  "status": "success",
  "count": 4,
  "client": "Flutter-Mobile-v1.0",
  "database": "WampServer-MySQL"
}`,
    },
    sql: {
      fileName: 'kpi_report.sql',
      lang: 'sql',
      badge: 'IBM Cognos · Power BI',
      code: `-- Business Analytics & Trend Identification
SELECT 
    department,
    COUNT(record_id) AS total_transactions,
    ROUND(AVG(performance_metric), 2) AS avg_efficiency,
    SUM(transaction_value) AS total_revenue
FROM business_dataset
WHERE submission_status = 'Approved'
GROUP BY department
HAVING total_transactions > 50
ORDER BY avg_efficiency DESC;`,
      output: `Rows returned: 5 | Query execution time: 14ms
+---------------+--------------------+----------------+---------------+
| department    | total_transactions | avg_efficiency | total_revenue |
+---------------+--------------------+----------------+---------------+
| Engineering   | 142                | 94.8%          | $48,200       |
| Analytics     | 98                 | 91.2%          | $32,450       |
+---------------+--------------------+----------------+---------------+`,
    },
    flutter: {
      fileName: 'expense_card.dart',
      lang: 'dart',
      badge: 'Flutter UI',
      code: `// Cross-platform mobile UI widget
class ExpenseSummaryCard extends StatelessWidget {
  final double totalIncome;
  final double totalExpense;

  const ExpenseSummaryCard({
    required this.totalIncome,
    required this.totalExpense,
  });

  @override
  Widget build(BuildContext context) {
    final balance = totalIncome - totalExpense;
    return Card(
      color: Color(0xFF131D33),
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
      child: MetricRow(balance: balance),
    );
  }
}`,
      output: `[Flutter DevTools] Hot Reload completed in 240ms.
✓ Widget rendered: ExpenseSummaryCard
✓ Client state synchronised with REST API.`,
    },
  };

  const handleRunCode = () => {
    setIsRunningCode(true);
    setTimeout(() => {
      setIsRunningCode(false);
    }, 600);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab].code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const techBadges = [
    { name: 'Python', color: 'from-blue-500/20 to-yellow-500/20 border-yellow-500/30 text-yellow-300' },
    { name: 'Django', color: 'from-emerald-600/20 to-teal-500/20 border-emerald-500/30 text-emerald-300' },
    { name: 'JavaScript', color: 'from-yellow-500/20 to-amber-500/20 border-yellow-400/30 text-yellow-300' },
    { name: 'Flutter', color: 'from-sky-500/20 to-blue-600/20 border-sky-400/30 text-sky-300' },
    { name: 'SQL', color: 'from-indigo-500/20 to-cyan-500/20 border-cyan-400/30 text-cyan-300' },
    { name: 'Power BI', color: 'from-amber-500/20 to-orange-500/20 border-amber-400/30 text-amber-300' },
    { name: 'IBM Cognos', color: 'from-blue-600/20 to-indigo-600/20 border-blue-400/30 text-blue-300' },
    { name: 'Git', color: 'from-orange-600/20 to-red-500/20 border-orange-400/30 text-orange-300' },
    { name: 'GitHub', color: 'from-purple-500/20 to-slate-500/20 border-purple-400/30 text-purple-300' },
  ];

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Bio & Positioning */}
          <div className="lg:col-span-6 flex flex-col items-start space-y-6">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-indigo-950/60 border border-indigo-500/30 backdrop-blur-md shadow-inner">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs font-medium text-indigo-200">
                Seeking Software Developer Internship / Junior Role
              </span>
            </div>

            {/* Title & Name */}
            <div className="space-y-2">
              <p className="text-slate-400 text-sm sm:text-base font-mono tracking-wide">
                Hi, I'm
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Madasamy K
              </h1>

              {/* Dynamic Keyword Ticker */}
              <div className="h-9 sm:h-10 flex items-center overflow-hidden">
                <div className="inline-flex items-center gap-2 text-xl sm:text-2xl font-semibold">
                  <span className="text-slate-400 font-mono">&gt;</span>
                  <span
                    key={keywordIndex}
                    className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-300 to-indigo-200 animate-fadeIn font-mono"
                  >
                    {rotatingKeywords[keywordIndex]}
                  </span>
                </div>
              </div>
            </div>

            {/* Headline */}
            <p className="text-lg sm:text-xl font-medium text-slate-200 leading-snug">
              {personalInfo.headline}
            </p>

            {/* Resume-grounded Description */}
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-xl">
              {personalInfo.summary}
            </p>

            {/* Floating Tech Badges */}
            <div className="w-full pt-1">
              <p className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                <span>Core Technologies (Resume Verified)</span>
              </p>
              <div className="flex flex-wrap gap-2">
                {techBadges.map((badge) => (
                  <span
                    key={badge.name}
                    className={`text-xs px-2.5 py-1 rounded-md bg-gradient-to-r ${badge.color} border backdrop-blur-sm transition-transform hover:-translate-y-0.5 cursor-default font-mono`}
                  >
                    {badge.name}
                  </span>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              {/* Primary: View Projects */}
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm text-white bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-500/40 border border-indigo-400/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Secondary: Download Resume */}
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm text-slate-200 bg-slate-900/80 hover:bg-slate-800 hover:text-white border border-white/[0.12] hover:border-indigo-400/40 backdrop-blur-md shadow-md transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Download className="w-4 h-4 text-indigo-400" />
                <span>Resume</span>
              </button>

              {/* Ghost: Contact Me */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm text-slate-300 hover:text-white hover:bg-white/[0.05] border border-transparent hover:border-white/[0.1] transition-all"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social quick links */}
            <div className="flex items-center gap-4 pt-2 text-xs text-slate-400">
              <span className="font-mono text-slate-400">Direct Links:</span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <span className="text-slate-700">•</span>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
              <span className="text-slate-700">•</span>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{personalInfo.email}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Premium Interactive Developer Workspace */}
          <div className="lg:col-span-6">
            <div className="relative group">
              {/* Outer decorative ambient glows */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-indigo-500/20 via-cyan-500/20 to-purple-500/20 blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 -z-10" />

              {/* Workspace Mockup Card */}
              <div className="rounded-2xl bg-[#0F172A]/90 border border-white/[0.12] shadow-2xl backdrop-blur-xl overflow-hidden">
                {/* Code Editor Header Bar */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#0B1120]/90 border-b border-white/[0.08]">
                  {/* Window Controls */}
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                    <span className="ml-2 font-mono text-xs text-slate-400 flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                      <span>madasamy-workspace</span>
                    </span>
                  </div>

                  {/* Run / Copy Actions */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleCopyCode}
                      className="p-1.5 text-xs text-slate-400 hover:text-white hover:bg-white/[0.08] rounded-md transition-colors"
                      title="Copy Code"
                      aria-label="Copy Code"
                    >
                      {copiedCode ? (
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                    <button
                      onClick={handleRunCode}
                      disabled={isRunningCode}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-emerald-300 bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-500/40 rounded-md transition-colors"
                      title="Execute code simulation"
                    >
                      <Play className={`w-3 h-3 ${isRunningCode ? 'animate-spin' : ''}`} />
                      <span>{isRunningCode ? 'Running...' : 'Run'}</span>
                    </button>
                  </div>
                </div>

                {/* Tabs Bar */}
                <div className="flex items-center overflow-x-auto border-b border-white/[0.06] bg-[#0D1527]/70 scrollbar-none">
                  {(
                    [
                      { key: 'python', label: 'student_model.py', icon: 'py' },
                      { key: 'django', label: 'api_views.py', icon: 'dj' },
                      { key: 'sql', label: 'kpi_report.sql', icon: 'sql' },
                      { key: 'flutter', label: 'expense_card.dart', icon: 'fl' },
                    ] as const
                  ).map((tab) => (
                    <button
                      key={tab.key}
                      onClick={() => setActiveTab(tab.key)}
                      className={`flex items-center gap-2 px-3.5 py-2 text-xs font-mono border-r border-white/[0.06] transition-colors whitespace-nowrap ${
                        activeTab === tab.key
                          ? 'text-white bg-[#0F172A] border-t-2 border-t-indigo-500 font-semibold'
                          : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.02]'
                      }`}
                    >
                      <span className="text-[10px] px-1 py-0.2 rounded bg-indigo-500/20 text-indigo-300 font-bold">
                        {tab.icon}
                      </span>
                      <span>{tab.label}</span>
                    </button>
                  ))}
                </div>

                {/* Code Window */}
                <div className="p-4 bg-[#090E1A]/90 font-mono text-xs overflow-x-auto max-h-[290px] leading-relaxed">
                  <pre className="text-slate-300">
                    <code>{codeSnippets[activeTab].code}</code>
                  </pre>
                </div>

                {/* Live Output Console */}
                <div className="p-3.5 bg-[#070B14] border-t border-white/[0.08] font-mono text-xs">
                  <div className="flex items-center justify-between text-[11px] text-slate-400 pb-1.5 border-b border-white/[0.04]">
                    <span className="flex items-center gap-1.5 text-cyan-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                      Console Output ({codeSnippets[activeTab].badge})
                    </span>
                    <span className="text-slate-400">Status: 200 OK</span>
                  </div>
                  <pre className="text-emerald-400/90 pt-2 text-[11px] whitespace-pre-wrap leading-relaxed">
                    {codeSnippets[activeTab].output}
                  </pre>
                </div>

                {/* Footer status strip */}
                <div className="px-4 py-2 bg-[#0B1120] border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>UTF-8 · LF · Python / JS / Dart / SQL</span>
                  </span>
                  <span>Anna University (CSE 2027)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
