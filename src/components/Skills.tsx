import { motion } from 'framer-motion'
import { CodeXml, Globe, Brain, Wrench, Sparkles, Database } from 'lucide-react'
import { skills } from '../data/content'

const skillCategories = [
  {
    title: 'Languages',
    icon: CodeXml,
    color: 'text-indigo-400 bg-indigo-500/15',
    items: ['Python', 'C', 'Java'],
  },
  {
    title: 'Web Development',
    icon: Globe,
    color: 'text-sky-400 bg-sky-500/15',
    items: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'AI & Cloud Concepts',
    icon: Brain,
    color: 'text-purple-400 bg-purple-500/15',
    items: ['AI Fundamentals', 'AWS Cloud', 'Cyber Security'],
  },
  {
    title: 'Database & Systems',
    icon: Database,
    color: 'text-emerald-400 bg-emerald-500/15',
    items: ['SQL', 'DBMS', 'Data Structures'],
  },
  {
    title: 'Developer Tools',
    icon: Wrench,
    color: 'text-amber-400 bg-amber-500/15',
    items: ['Git', 'GitHub', 'VS Code', 'npm'],
  },
  {
    title: 'Professional Strengths',
    icon: Sparkles,
    color: 'text-pink-400 bg-pink-500/15',
    items: skills.strengths,
  },
]

export default function Skills() {
  return (
    <section id="skills" className="relative bg-[#0B0F19]/50 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-indigo-400">
            My Toolkit
          </div>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Skills &amp; Technologies
          </h2>
          <p className="mt-4 text-base text-slate-400">
            A solid stack of languages, technologies, and interpersonal strengths I leverage to
            build impactful applications.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="glass-panel glass-panel-hover rounded-3xl p-6 flex flex-col justify-between"
              >
                <div>
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ${cat.color}`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-heading text-lg font-bold text-white">{cat.title}</h3>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {cat.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-slate-800/80 border border-white/5 px-3 py-1 text-xs font-medium text-slate-300 transition-colors hover:text-white hover:bg-slate-700/80 hover:border-indigo-500/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
