"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.history.scrollRestoration = "manual";
      window.scrollTo(0, 0);
    }
  }, []);

  const revealProps = {
    initial: { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.25 },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  } as const;

  const itemReveal = {
    initial: { opacity: 0, y: 12 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.4 },
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  } as const;

  const hoverLift = {
    whileHover: { y: -4 },
    transition: { type: "spring", stiffness: 260, damping: 20 },
  } as const;

  const phases = [
    {
      id: "Phase 1",
      kicker: "Foundation",
      title: "EARL services, hardened.",
      description:
        "Stabilize communications with your current EARL workflows while adding resilient, private on-site infrastructure.",
      items: [
        "Local SIP + Wi-Fi bubble",
        "Battery-first uptime",
        "Baseline staff check-ins",
        "Rapid deployment footprint",
      ],
    },
    {
      id: "Phase 2",
      kicker: "Coverage",
      title: "Facility-wide mesh expansion.",
      description:
        "Knodes discover each other automatically to extend resilient coverage across the entire campus.",
      items: [
        "Self-healing mesh paths",
        "Redundant node routing",
        "Coverage analytics",
        "Zero-touch provisioning",
      ],
    },
    {
      id: "Phase 3",
      kicker: "Intelligence",
      title: "Operational AI triage.",
      description:
        "Bring AI triage to the edge to filter critical signals during outages and high-stress events.",
      items: [
        "Priority extraction",
        "Pulse report summaries",
        "Role-based escalation",
        "Local inference only",
      ],
    },
    {
      id: "Phase 4",
      kicker: "People",
      title: "Staff + family resilience.",
      description:
        "Deliver calm, focused workflows for staff while keeping families informed through localized updates.",
      items: [
        "Family Bridge portal",
        "Safety Sessions timers",
        "Offline-first UX",
        "Incident playbooks",
      ],
    },
    {
      id: "Phase 5",
      kicker: "Advanced Safety",
      title: "AI Wi-Fi sensing.",
      description:
        "Unlock advanced safety with Wi‑Fi sensing and predictive alerts across critical zones.",
      items: [
        "AI Wi‑Fi sensing",
        "Predictive risk alerts",
        "Autonomous failover",
        "Continuous resilience scoring",
      ],
    },
  ];

  const [activePhase, setActivePhase] = useState(0);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <Image
              src="/knode_logo.svg"
              alt="Knode logo"
              width={100}
              height={100}
              priority
            />
          </div>
          <nav className="flex items-center gap-6 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            <a href="#infrastructure" className="hover:text-foreground">
              Infrastructure
            </a>
            <a href="#command" className="hover:text-foreground">
              Command Center
            </a>
            <a href="#staff" className="hover:text-foreground">
              Staff
            </a>
            <a href="#roi" className="hover:text-foreground">
              ROI
            </a>
            <a href="#roadmap" className="hover:text-foreground">
              Roadmap
            </a>
          </nav>
          <button className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">
            Start Phase 1 Pilot
          </button>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-6">
        <motion.section
          initial={false}
          className="relative grid items-center gap-12 py-36 md:grid-cols-[1.1fr_0.9fr]"
        >
          <div className="pointer-events-none absolute inset-0 -z-10 rounded-[48px] bg-[radial-gradient(circle_at_15%_20%,rgba(241,90,41,0.12),transparent_45%),radial-gradient(circle_at_70%_20%,rgba(45,212,191,0.12),transparent_40%)]" />
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/30 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-[#F15A29]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#F15A29]" />
                The Command Center
              </div>
              <h1 className="text-5xl font-semibold tracking-tight md:text-6xl">
                Resilience by default.
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                Knode is the backup brain for healthcare. A private,
                battery-powered mesh network that stays online when the grid,
                the cloud, and the towers fail.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition hover:bg-[#d94f24] hover:shadow-[0_10px_30px_rgba(241,90,41,0.35)]"
              >
                Start Phase 1 Pilot
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className="rounded-full border border-border px-5 py-2 text-sm font-medium transition hover:border-[#F15A29] hover:text-[#F15A29] hover:shadow-[0_8px_24px_rgba(241,90,41,0.2)]"
              >
                Download ROI Whitepaper
              </motion.button>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-border/60 bg-card/50 p-3 text-xs text-muted-foreground">
                <div className="text-sm font-semibold text-foreground">72 hrs</div>
                Battery-first uptime
              </div>
              <div className="rounded-2xl border border-border/60 bg-card/50 p-3 text-xs text-muted-foreground">
                <div className="text-sm font-semibold text-foreground">0 cloud</div>
                On-site intelligence
              </div>
              <div className="rounded-2xl border border-border/60 bg-card/50 p-3 text-xs text-muted-foreground">
                <div className="text-sm font-semibold text-foreground">1 tap</div>
                Staff status check-in
              </div>
            </div>
          </div>

          <motion.div
            className="relative flex items-center justify-center"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="relative h-64 w-64 rounded-3xl bg-gradient-to-b from-zinc-900 to-zinc-950 shadow-2xl ring-1 ring-white/10">
              <div className="absolute inset-6 rounded-[26px] border border-white/10 bg-zinc-950/60" />
              <div className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-[44%] bg-[radial-gradient(circle_at_35%_40%,rgba(45,212,191,0.18),transparent_65%)]" />
              <div className="absolute left-1/2 top-1/2 h-24 w-28 -translate-x-1/2 -translate-y-1/2 rounded-[40%] border border-white/15 bg-zinc-900/80 shadow-[0_20px_60px_-40px_rgba(0,0,0,0.8)]" />
              <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-400 shadow-[0_0_40px_rgba(45,212,191,0.9)]" />
              <div className="knode-pulse absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-400/10 blur-xl" />
              <div className="knode-orbit absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-teal-400/15">
                <div className="absolute -top-2 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-teal-400 shadow-[0_0_20px_rgba(45,212,191,0.9)]" />
              </div>
              <div className="absolute left-7 top-12 h-16 w-px bg-gradient-to-b from-teal-400/40 to-transparent" />
              <div className="absolute right-10 bottom-8 h-px w-16 bg-gradient-to-r from-teal-400/40 to-transparent" />
              <div className="absolute left-10 bottom-10 h-px w-14 bg-gradient-to-r from-teal-400/30 to-transparent" />
            </div>
            <div className="absolute inset-0 -z-10 rounded-3xl bg-[radial-gradient(circle_at_center,rgba(45,212,191,0.15),transparent_60%)]" />
          </motion.div>
        </motion.section>

        <motion.section
          {...revealProps}
          id="infrastructure"
          className="grid gap-10 border-t border-border/50 py-28 md:grid-cols-2"
        >
          <motion.div {...itemReveal} className="rounded-3xl border border-border/50 bg-card p-8">
            <div className="text-xs uppercase tracking-widest text-[#F15A29]">
              Hardware Stack
            </div>
            <div className="mt-6 space-y-3 text-sm">
              <motion.div
                {...itemReveal}
                transition={{ ...itemReveal.transition, delay: 0.05 }}
                className="flex min-h-[56px] items-center justify-between rounded-lg border border-border/60 bg-gradient-to-r from-emerald-500/15 via-muted/40 to-muted/30 px-4 py-4"
              >
                <span>Intel Atom 12V CPU</span>
                <span className="text-muted-foreground">Core</span>
              </motion.div>
              <motion.div
                {...itemReveal}
                transition={{ ...itemReveal.transition, delay: 0.12 }}
                className="flex min-h-[56px] items-center justify-between rounded-lg border border-border/60 bg-gradient-to-r from-violet-500/15 via-muted/40 to-muted/30 px-4 py-4"
              >
                <span>Intelligence</span>
                <span className="text-muted-foreground">Edge AI</span>
              </motion.div>
              <motion.div
                {...itemReveal}
                transition={{ ...itemReveal.transition, delay: 0.19 }}
                className="flex min-h-[56px] items-center justify-between rounded-lg border border-border/60 bg-gradient-to-r from-sky-500/15 via-muted/40 to-muted/30 px-4 py-4"
              >
                <span>Integrated UPS</span>
                <span className="text-muted-foreground">Power</span>
              </motion.div>
              <motion.div
                {...itemReveal}
                transition={{ ...itemReveal.transition, delay: 0.26 }}
                className="flex min-h-[56px] items-center justify-between rounded-lg border border-border/60 bg-gradient-to-r from-orange-500/15 via-muted/40 to-muted/30 px-4 py-4"
              >
                <span>Fanless Heat Sink</span>
                <span className="text-muted-foreground">Thermal</span>
              </motion.div>
            </div>
          </motion.div>
          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.3em] text-[#F15A29]">
                Edge Intelligence
              </p>
              <h2 className="text-3xl font-semibold">
                Infrastructure that thinks for itself.
              </h2>
              <p className="text-lg text-muted-foreground">
                Purpose-built resilience that keeps critical systems alive,
                isolated, and instantly aware of each other.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <motion.div
                {...hoverLift}
                className="rounded-2xl border border-border/50 bg-card/50 p-4"
              >
                <div className="text-sm font-semibold">Autonomous Power</div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Every Node is a self-contained lifeboat, running for days on
                  internal 12V power.
                </p>
              </motion.div>
              <motion.div
                {...hoverLift}
                className="rounded-2xl border border-border/50 bg-card/50 p-4"
              >
                <div className="text-sm font-semibold">The Mesh</div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Knodes find each other instantly, creating a self-healing
                  Wi-Fi bubble across your facility.
                </p>
              </motion.div>
              <motion.div
                {...hoverLift}
                className="rounded-2xl border border-border/50 bg-card/50 p-4 md:col-span-2"
              >
                <div className="text-sm font-semibold">Edge AI</div>
                <p className="mt-2 text-sm text-muted-foreground">
                  We’ve shrunk a state-of-the-art AI and tucked it inside every
                  Node. It’s not in the cloud; it’s in your building.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        <motion.section
          {...revealProps}
          id="command"
          className="grid gap-10 border-t border-border/50 py-28 md:grid-cols-2"
        >
          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.3em] text-[#F15A29]">
                AI Triage
              </p>
              <h2 className="text-3xl font-semibold">
                Silence the noise. Solve the crisis.
              </h2>
              <p className="text-lg text-muted-foreground">
                During a Code Orange, information overload is the enemy. Knode’s
                internal AI scans thousands of staff messages in milliseconds.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <motion.div
                {...hoverLift}
                className="rounded-2xl border border-border/50 bg-card/50 p-4"
              >
                <div className="text-sm font-semibold">Priority Extraction</div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Instantly flag life-safety emergencies as they come in.
                </p>
              </motion.div>
              <motion.div
                {...hoverLift}
                className="rounded-2xl border border-border/50 bg-card/50 p-4"
              >
                <div className="text-sm font-semibold">Smart Summaries</div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Get a one-sentence Pulse Report for your entire hospital.
                </p>
              </motion.div>
            </div>
          </div>
          <motion.div {...itemReveal} className="rounded-3xl border border-border/50 bg-card p-6">
            <div className="flex items-center justify-between text-xs uppercase tracking-widest text-[#F15A29]">
              <span>Message Feed</span>
              <span className="rounded-full border border-border/60 px-2 py-1 text-[10px]">
                AI ACTIVE
              </span>
            </div>
            <div className="mt-6 space-y-4 text-sm">
              <motion.div {...itemReveal} className="flex items-start gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500/20 text-orange-300">
                  ER
                </div>
                <div className="flex-1 rounded-2xl bg-zinc-900 px-4 py-3 text-zinc-200">
                  I need help in West Wing.
                  <div className="mt-2 text-xs text-muted-foreground">
                    2:14 PM • Staff SMS
                  </div>
                </div>
              </motion.div>
              <motion.div {...itemReveal} className="flex items-start gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-800 text-zinc-300">
                  AI
                </div>
                <div className="flex-1 rounded-2xl border border-orange-500/30 bg-orange-500/10 px-4 py-3 text-orange-200">
                  <div className="text-xs uppercase tracking-widest text-orange-300">
                    Priority Extraction
                  </div>
                  <div className="mt-1">
                    Emergency flagged • West Wing • Code Orange
                  </div>
                </div>
              </motion.div>
              <motion.div {...itemReveal} className="flex items-start gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-800 text-zinc-300">
                  GI
                </div>
                <div className="flex-1 rounded-2xl bg-zinc-900 px-4 py-3 text-zinc-200">
                  Supplies delivered to ER.
                  <div className="mt-2 text-xs text-muted-foreground">
                    2:15 PM • Logistics
                  </div>
                </div>
              </motion.div>
              <motion.div {...itemReveal} className="flex items-start gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-800 text-zinc-300">
                  AI
                </div>
                <div className="flex-1 rounded-2xl border border-border/60 bg-muted/40 px-4 py-3 text-zinc-200">
                  <div className="text-xs uppercase tracking-widest text-[#F15A29]">
                    Pulse Report
                  </div>
                  <div className="mt-1">
                    3 critical, 12 routine, 2 pending responses.
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.section>

        <motion.section
          {...revealProps}
          id="staff"
          className="grid gap-10 border-t border-border/50 py-28 md:grid-cols-2"
        >
          <motion.div {...itemReveal} className="rounded-3xl border border-border/50 bg-card p-8">
            <motion.div
              className="mx-auto w-64 rounded-[32px] border border-border/60 bg-zinc-950 p-4 shadow-[0_30px_60px_-40px_rgba(0,0,0,0.8)]"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center justify-between text-[10px] text-muted-foreground">
                <span>08:42</span>
                <div className="h-1.5 w-10 rounded-full bg-zinc-800" />
                <span>100%</span>
              </div>
              <div className="mt-6 text-center text-xs uppercase tracking-widest text-[#F15A29]">
                Ready
              </div>
              <div className="mt-4 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-[#F15A29]/20 blur-xl" />
                  <button
                    type="button"
                    className="relative h-24 w-24 rounded-full bg-[#F15A29] text-xs font-semibold text-white shadow-[0_10px_30px_rgba(241,90,41,0.4)]"
                  >
                    Tap to Check-In
                  </button>
                </div>
              </div>
              <div className="mt-6 rounded-xl border border-border/60 bg-muted/40 p-3 text-xs text-muted-foreground">
                Last check-in: 5 min ago
              </div>
            </motion.div>
          </motion.div>
          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.3em] text-[#F15A29]">
                The App
              </p>
              <h2 className="text-3xl font-semibold">
                Built for the person on the ground.
              </h2>
              <p className="text-lg text-muted-foreground">
                Simple, tactile flows that keep staff focused when every second
                counts.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <motion.div
                {...hoverLift}
                className="rounded-2xl border border-border/50 bg-card/50 p-4"
              >
                <div className="text-sm font-semibold">Rapid Check-In</div>
                <p className="mt-2 text-sm text-muted-foreground">
                  One tap to report status and health.
                </p>
              </motion.div>
              <motion.div
                {...hoverLift}
                className="rounded-2xl border border-border/50 bg-card/50 p-4"
              >
                <div className="text-sm font-semibold">The Family Bridge</div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Post “I’m Safe” updates for families waiting outside.
                </p>
              </motion.div>
              <motion.div
                {...hoverLift}
                className="rounded-2xl border border-border/50 bg-card/50 p-4 md:col-span-2"
              >
                <div className="text-sm font-semibold">Safety Sessions</div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Built-in timers for lone workers. If you don’t check in,
                  Knode alerts the nearest team.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        <motion.section
          {...revealProps}
          id="roi"
          className="grid gap-10 border-t border-border/50 py-28 md:grid-cols-2"
        >
          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.3em] text-[#F15A29]">
                The Economic Pivot
              </p>
              <h2 className="text-3xl font-semibold">
                Upgrade your safety. Not your budget.
              </h2>
              <p className="text-lg text-muted-foreground">
                Hospitals spend millions on fragile, old-fashioned phone
                technology. We replace those legacy bills with Knode’s modern,
                software-based SIP system.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <motion.div
                {...hoverLift}
                className="rounded-2xl border border-border/50 bg-card/50 p-4"
              >
                <div className="text-sm font-semibold">Legacy Telecom</div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Recurring bills for aging infrastructure that fails first.
                </p>
              </motion.div>
              <motion.div
                {...hoverLift}
                className="rounded-2xl border border-border/50 bg-card/50 p-4"
              >
                <div className="text-sm font-semibold">Modern Safety Stack</div>
                <p className="mt-2 text-sm text-muted-foreground">
                  A software-defined SIP system plus durable disaster hardware.
                </p>
              </motion.div>
              <motion.div
                {...hoverLift}
                className="rounded-2xl border border-border/50 bg-card/50 p-4 md:col-span-2"
              >
                <div className="text-sm font-semibold">The Result</div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Your monthly phone savings fund permanent resilience. You
                  trade a vulnerability for a long-term asset.
                </p>
              </motion.div>
            </div>
          </div>
          <div className="rounded-3xl border border-border/50 bg-card p-6">
            <div className="flex items-center justify-between">
              <div className="text-xs uppercase tracking-widest text-[#F15A29]">
                Economic Pivot
              </div>
              <div className="rounded-full border border-border/60 px-2 py-1 text-[10px] text-muted-foreground">
                Live Cost Model
              </div>
            </div>
            <div className="mt-6 space-y-6 text-sm">
              <motion.div
                {...hoverLift}
                className="rounded-2xl border border-border/60 bg-muted/30 p-4"
              >
                <div className="mb-3 flex items-center justify-between text-xs text-muted-foreground">
                  <span>Telecom Bills</span>
                  <span className="text-orange-300">↓ 40%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-zinc-800">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "80%" }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    className="h-2 rounded-full bg-gradient-to-r from-zinc-700 to-zinc-500"
                  />
                </div>
                <div className="mt-3 text-xs text-muted-foreground">
                  Legacy spend decays as SIP shifts on‑site.
                </div>
              </motion.div>
              <motion.div
                {...hoverLift}
                className="rounded-2xl border border-border/60 bg-muted/30 p-4"
              >
                <div className="mb-3 flex items-center justify-between text-xs text-muted-foreground">
                  <span>Facility Safety</span>
                  <span className="text-emerald-300">↑ 60%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-zinc-800">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "40%" }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    className="h-2 rounded-full bg-gradient-to-r from-emerald-500/70 to-emerald-300/80"
                  />
                </div>
                <div className="mt-3 text-xs text-muted-foreground">
                  Resilience compounds with each new phase.
                </div>
              </motion.div>
              <motion.div
                {...hoverLift}
                className="rounded-2xl border border-border/60 bg-gradient-to-r from-[#F15A29]/10 via-muted/30 to-transparent p-4"
              >
                <div className="text-xs uppercase tracking-widest text-[#F15A29]">
                  Net Effect
                </div>
                <div className="mt-2 text-sm text-zinc-200">
                  Spend stays flat while safety capability rises.
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        <motion.section
          {...revealProps}
          id="roadmap"
          className="border-t border-border/50 py-20"
        >
          <h2 className="text-3xl font-semibold">A path to 100% resilience.</h2>
          <p className="mt-3 text-muted-foreground">
            Knode doesn’t require a total overhaul. We deploy in phases, starting
            with your current EARL services and building toward a fully
            autonomous disaster network.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            {phases.map((phase, index) => {
              const isActive = index === activePhase;
              return (
                <motion.button
                  key={phase.id}
                  type="button"
                  onClick={() => setActivePhase(index)}
                  className={`rounded-full border px-4 py-2 text-sm transition ${
                    isActive
                      ? "border-transparent bg-primary text-primary-foreground"
                      : "border-border text-muted-foreground hover:text-foreground"
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {phase.id}
                </motion.button>
              );
            })}
          </div>
          <div className="mt-8 rounded-3xl border border-border/50 bg-card p-6">
            <div className="text-xs uppercase tracking-widest text-[#F15A29]">
              {phases[activePhase].kicker}
            </div>
            <h3 className="mt-2 text-2xl font-semibold">
              {phases[activePhase].title}
            </h3>
            <p className="mt-3 text-muted-foreground">
              {phases[activePhase].description}
            </p>
            <ul className="mt-6 grid gap-3 text-sm text-muted-foreground md:grid-cols-2">
              {phases[activePhase].items.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#F15A29]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.section>
      </main>

      <footer className="border-t border-border/50 py-12">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="grid gap-8 md:grid-cols-[2fr_1fr_1fr_1fr]">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Image
                  src="/knode_logo.svg"
                  alt="Knode logo"
                  width={100}
                  height={100}
                />
              </div>
              <p className="text-sm text-muted-foreground">
                Resilient, private infrastructure for healthcare continuity.
              </p>
              <div className="text-sm text-muted-foreground">© 2026 Knode</div>
            </div>
            <div className="space-y-3 text-sm">
              <div className="text-xs uppercase tracking-widest text-[#F15A29]">
                About
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground">
                    Company
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Mission
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3 text-sm">
              <div className="text-xs uppercase tracking-widest text-[#F15A29]">
                Features
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground">
                    Mesh Network
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Edge AI
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Command Center
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3 text-sm">
              <div className="text-xs uppercase tracking-widest text-[#F15A29]">
                Legal
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Security
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
