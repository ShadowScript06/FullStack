"use client";
import Link from "next/link";



export default function HomePage() {
  
  return (
    <div className="bg-white text-slate-900 antialiased">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b border-[#2f795f]/10 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
          <div className="flex items-center gap-2">
            {/* Removed monitor_heart icon */}
            <span className="text-xl font-bold tracking-tight text-slate-900">
              APIWatch
            </span>
          </div>
          <div className="hidden md:flex md:gap-x-8">
            <a className="text-sm font-semibold leading-6 text-slate-600 hover:text-[#2f795f] transition-colors" href="#">Features</a>
            <a className="text-sm font-semibold leading-6 text-slate-600 hover:text-[#2f795f] transition-colors" href="#">Pricing</a>
            <a className="text-sm font-semibold leading-6 text-slate-600 hover:text-[#2f795f] transition-colors" href="#">Docs</a>
          </div>
          <div className="flex items-center gap-4">
            <Link className="hidden text-sm font-bold leading-6 text-slate-900 sm:block" href="/login">Log in</Link>
            <Link href="/register" className="rounded-lg bg-[#2f795f] px-4 py-2 text-sm font-bold text-white hover:bg-[#2f795f]/90 transition-all" >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden pt-16 pb-24 sm:pt-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex items-center rounded-full bg-[#2f795f]/10 px-3 py-1 text-sm font-medium text-[#2f795f] mb-6 ring-1 ring-inset ring-[#2f795f]/20">
                <span className="mr-2 flex h-2 w-2 rounded-full bg-[#2f795f]"></span>
                Now with 1-minute ping intervals
              </div>
              <h1 className="text-5xl font-black tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
                Reliable API Monitoring for <span className="text-[#2f795f]">Modern Teams</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-600 max-w-xl">
                Experience lightning-fast global checks and real-time status updates. Stop guessing and start knowing exactly how your services are performing.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Link href="/register"className="rounded-lg bg-[#2f795f] px-8 py-4 text-lg font-bold text-white shadow-lg hover:shadow-[#2f795f]/20 transition-all">
                  Start Free Trial
                </Link>
                <a className="text-sm font-bold leading-6 text-slate-900 flex items-center gap-1 group" href="#">
                  Watch demo 
                </a>
              </div>
            </div>

            {/* Mock Dashboard */}
            <div className="relative rounded-xl border border-[#2f795f]/10 bg-white p-2 shadow-2xl">
              <div className="overflow-hidden rounded-lg bg-white p-4">
                <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-xs font-medium text-slate-400">api.v1.production.status</div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-end gap-1 h-32">
                    {Array.from({ length: 9 }).map((_, idx) => (
                      <div
                        key={idx}
                        className={`w-full rounded-t-sm`}
                        style={{ height: `${(idx + 1) * 10}%`, backgroundColor: `rgba(47, 121, 95, ${0.1 + idx * 0.1})` }}
                        title={`${idx * 10 + 20}ms`}
                      ></div>
                    ))}
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="rounded-lg bg-white p-3 ring-1 ring-slate-200">
                      <p className="text-[10px] uppercase tracking-wider text-slate-400">Uptime</p>
                      <p className="text-lg font-bold text-[#2f795f]">99.99%</p>
                    </div>
                    <div className="rounded-lg bg-white p-3 ring-1 ring-slate-200">
                      <p className="text-[10px] uppercase tracking-wider text-slate-400">Avg Latency</p>
                      <p className="text-lg font-bold text-slate-900">42ms</p>
                    </div>
                    <div className="rounded-lg bg-white p-3 ring-1 ring-slate-200">
                      <p className="text-[10px] uppercase tracking-wider text-slate-400">Status</p>
                      <p className="text-lg font-bold text-green-500">Healthy</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}