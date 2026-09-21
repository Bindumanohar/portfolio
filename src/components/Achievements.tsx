import { motion } from 'framer-motion'
import { Trophy, Award, Sparkles, Building2, Calendar, CheckCircle } from 'lucide-react'
import { achievements } from '../data/content'

const achievementIcons = [
  {
    icon: Trophy,
    color: 'text-amber-400 bg-amber-500/15 border-amber-500/30 shadow-amber-500/10',
    badgeColor: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
  },
  {
    icon: Sparkles,
    color: 'text-indigo-400 bg-indigo-500/15 border-indigo-500/30 shadow-indigo-500/10',
    badgeColor: 'bg-indigo-500/15 text-indigo-300 border-indigo-500/30',
  },
  {
    icon: Award,
    color: 'text-emerald-400 bg-emerald-500/15 border-emerald-500/30 shadow-emerald-500/10',
    badgeColor: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="relative bg-background px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-indigo-400">
            Honors &amp; Competitions
          </div>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Key Achievements &amp; Hackathons
          </h2>
          <p className="mt-4 text-base text-slate-400">
            Proven track record of technical presentation, rapid innovation, and national-level
            hackathon collaboration.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {achievements.map((item, idx) => {
            const meta = achievementIcons[idx % achievementIcons.length]
            const Icon = meta.icon

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-panel glass-panel-hover flex flex-col justify-between rounded-3xl p-6 sm:p-7 relative overflow-hidden"
              >
                <div>
                  {/* Top Bar with Icon and Badge */}
                  <div className="flex items-center justify-between gap-3">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl border shadow-lg ${meta.color}`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>

                    <span
                      className={`rounded-full border px-3 py-1 text-xs font-semibold ${meta.badgeColor}`}
                    >
                      {item.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="mt-5 font-heading text-xl font-bold text-white leading-snug">
                    {item.title}
                  </h3>

                  {item.subtitle && (
                    <p className="mt-1 text-xs font-medium text-indigo-300">{item.subtitle}</p>
                  )}

                  {/* Organizer (if present) */}
                  {item.organizer && (
                    <div className="mt-3 flex items-start gap-1.5 text-xs text-slate-400">
                      <Building2 className="h-3.5 w-3.5 mt-0.5 shrink-0 text-slate-500" />
                      <span>{item.organizer}</span>
                    </div>
                  )}

                  {/* Description */}
                  <p className="mt-4 text-sm leading-relaxed text-slate-300">
                    {item.description}
                  </p>
                </div>

                {/* Footer Tag */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                  {item.highlight && (
                    <div className="flex items-center gap-1.5 text-slate-300 font-medium">
                      <CheckCircle className="h-3.5 w-3.5 text-emerald-400" />
                      <span>{item.highlight}</span>
                    </div>
                  )}

                  {item.year && (
                    <div className="flex items-center gap-1 text-slate-400 font-mono">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{item.year}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
