import { motion } from 'framer-motion'
import { Lightbulb, Users, Target, GraduationCap, Compass, Code2 } from 'lucide-react'
import { about } from '../data/content'

const strengths = [
  {
    title: 'Problem Solving',
    icon: Lightbulb,
    desc: 'Analytical thinking and breaking down challenges into clean solutions',
  },
  {
    title: 'Teamwork',
    icon: Users,
    desc: 'Effective communication and collaborating in agile team workflows',
  },
  {
    title: 'Leadership',
    icon: Target,
    desc: 'Taking initiative, organizing hackathon projects, and driving execution',
  },
  {
    title: 'Continuous Learning',
    icon: GraduationCap,
    desc: 'Staying on the cutting edge of modern frameworks and tools',
  },
]

export default function About() {
  return (
    <section id="about" className="relative bg-background px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          {/* Left Column: Bio & Core Strengths */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-indigo-400">
              About Me
            </div>

            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Driven by curiosity, <span className="text-indigo-400">powered by code.</span>
            </h2>

            <p className="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg">
              {about.paragraph}
            </p>

            <p className="mt-4 text-base leading-relaxed text-slate-400">
              I enjoy turning complex ideas into functional software, collaborating with fellow
              engineers, and exploring how modern tech stacks can create positive impact.
            </p>

            {/* Core Values Grid */}
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {strengths.map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.title}
                    className="glass-panel glass-panel-hover flex flex-col items-center gap-2.5 rounded-2xl p-4 text-center"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-400">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-semibold text-white">{item.title}</span>
                  </div>
                )
              })}
            </div>
          </motion.div>

          {/* Right Column: Education & Goals Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 rounded-3xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-xl sm:p-8 space-y-8"
          >
            {/* Education */}
            <div>
              <h3 className="font-heading text-xl font-bold text-white flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-indigo-400" />
                Education
              </h3>
              <div className="mt-4 flex gap-4 items-start">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-base font-semibold text-white">{about.education.degree}</p>
                  <p className="text-sm text-slate-300">{about.education.institution}</p>
                  <div className="mt-2 inline-flex items-center rounded-full bg-indigo-500/15 border border-indigo-500/30 px-3 py-0.5 text-xs font-semibold text-indigo-300 font-mono">
                    {about.education.years}
                  </div>
                </div>
              </div>
            </div>

            {/* Career Goal */}
            <div className="border-t border-white/10 pt-6">
              <h3 className="font-heading text-lg font-bold text-white flex items-center gap-2">
                <Compass className="h-4 w-4 text-indigo-400" />
                Career Goal
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
                To excel as a Software Engineer, contributing to high-impact projects through
                internships and full-time opportunities with modern software engineering practices.
              </p>
            </div>

            {/* Experience & Practical Focus */}
            <div className="border-t border-white/10 pt-6">
              <h3 className="font-heading text-lg font-bold text-white flex items-center gap-2">
                <Code2 className="h-4 w-4 text-indigo-400" />
                Hands-On Experience
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
                Actively engineering real-world software including library management and campus placement systems,
                sharpening technical problem solving through hackathons and industry certifications.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
