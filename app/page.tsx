export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Startup Tools
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Track Every Pivot.<br />
          <span className="text-[#58a6ff]">Learn From Each One.</span>
        </h1>
        <p className="text-lg md:text-xl text-[#8b949e] max-w-2xl mx-auto mb-10">
          Visualize your startup&apos;s pivot history with before/after metrics, spot patterns across decisions, and build a playbook that actually works.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-lg px-10 py-4 rounded-lg transition-colors duration-200"
        >
          Start Tracking — $49/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">Cancel anytime. No lock-in.</p>

        {/* Timeline preview */}
        <div className="mt-16 bg-[#161b22] border border-[#30363d] rounded-xl p-6 text-left">
          <p className="text-xs text-[#6e7681] uppercase tracking-widest mb-4">Sample Pivot Timeline</p>
          <div className="relative pl-6 border-l-2 border-[#30363d] space-y-6">
            {[
              { date: "Jan 2023", label: "B2C SaaS", metric: "MRR $1,200", color: "bg-red-500" },
              { date: "Apr 2023", label: "Pivot → B2B API", metric: "MRR $8,400", color: "bg-yellow-500" },
              { date: "Sep 2023", label: "Pivot → Enterprise", metric: "MRR $31,000", color: "bg-[#58a6ff]" }
            ].map((item) => (
              <div key={item.date} className="relative">
                <span className={`absolute -left-[1.65rem] top-1 w-3 h-3 rounded-full ${item.color}`}></span>
                <p className="text-xs text-[#6e7681]">{item.date}</p>
                <p className="text-white font-semibold">{item.label}</p>
                <p className="text-sm text-[#58a6ff]">{item.metric}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$49<span className="text-xl text-[#8b949e]">/mo</span></p>
          <p className="text-[#6e7681] text-sm mb-6">Everything you need to track pivots</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited pivot entries",
              "Before/after metrics dashboard",
              "Pattern recognition analytics",
              "Exportable pivot reports",
              "Team collaboration (up to 5)"
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors duration-200"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            {
              q: "Who is PivotTrack for?",
              a: "Serial entrepreneurs, startup founders, and accelerator mentors who want to document and learn from their pivot decisions over time."
            },
            {
              q: "How does the before/after metrics comparison work?",
              a: "For each pivot you log, you record key metrics (MRR, DAU, churn, etc.) at the time of the decision and again 30/60/90 days later. The dashboard visualizes the delta automatically."
            },
            {
              q: "Can I cancel my subscription anytime?",
              a: "Yes. Cancel anytime from your billing portal with no questions asked. Your data remains exportable for 30 days after cancellation."
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-8 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} PivotTrack. All rights reserved.
      </footer>
    </main>
  );
}
