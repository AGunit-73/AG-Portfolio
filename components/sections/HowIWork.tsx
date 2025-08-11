"use client"

const steps = [
  { title: 'Frame the goal', desc: 'Define the metric, constraints, and success criteria.' },
  { title: 'Map constraints', desc: 'Tech, data, compliance, timeline, and cost.' },
  { title: 'Build the smallest useful thing', desc: 'Ship an incremental slice, behind a flag if needed.' },
  { title: 'Measure with telemetry', desc: 'Logging, tracing, dashboards, and user feedback.' },
  { title: 'Iterate with stakeholders', desc: 'Short loops, explicit trade-offs, and clear next steps.' },
];

export default function HowIWork() {
  return (
    <section id="process" className="mx-auto max-w-5xl px-6 py-16 text-center">
      <h1 className="text-2xl font-semibold">How I Work</h1>
      <ul className="mt-6 grid gap-6 sm:grid-cols-2">
        {steps.map((s) => (
          <li key={s.title} className="w-full min-h-28 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 text-center">
            <h3 className="font-medium">{s.title}</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{s.desc}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
