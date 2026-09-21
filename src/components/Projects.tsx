import { motion } from 'framer-motion'
import { BookOpen, Briefcase, ExternalLink, Sparkles } from 'lucide-react'
import { GitHubIcon } from './SocialIcons'
import { projects } from '../data/content'

const projectMeta = [
  {
    icon: BookOpen,
    accentGradient: 'from-indigo-600 to-blue-700',
    iconBg: 'bg-indigo-500/20 text-indigo-300',
    tags: ['Python', 'SQL Database', 'Automation', 'Management System'],
  },
  {
    icon: Briefcase,
    accentGradient: 'from-violet-600 to-purple-700',
    iconBg: 'bg-violet-500/20 text-violet-300',
    tags: ['Web Application', 'Workflow Engine', 'Placement Portal', 'UI/UX'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative bg-background px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-indigo-400">
            Portfolio
          </div>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-4 text-base text-slate-400">
            Real-world applications engineered to solve practical management and workflow problems.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {projects.map((project, idx) => {
            const meta = projectMeta[idx % projectMeta.length]
            const Icon = meta.icon

            return (
              <motion.article
                key={project.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                className="group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-indigo-500/40 hover:shadow-2xl hover:shadow-indigo-500/10"
              >
                {/* Visual Banner Header */}
                <div
                  className={`relative flex h-44 items-center justify-center bg-gradient-to-br ${meta.accentGradient} overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-grid-pattern opacity-20" />
                  <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 shadow-lg text-white group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-10 w-10" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <div className="flex items-center justify-between">
                    <h3 className="font-heading text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {project.name}
                    </h3>
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-slate-300">
                    {project.description}
                  </p>

                  <p className="mt-2.5 text-xs leading-relaxed text-slate-400 border-l-2 border-indigo-500/40 pl-3">
                    {project.emphasis}
                  </p>

                  {/* Tags */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {meta.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-slate-800 border border-white/5 px-2.5 py-1 text-xs font-medium text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap gap-3">
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 text-xs font-semibold text-white shadow-md hover:bg-indigo-500 transition-all"
                      >
                        <GitHubIcon className="h-4 w-4" />
                        Code
                      </a>
                    ) : (
                      <div className="inline-flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                        <Sparkles className="h-3.5 w-3.5 text-indigo-400" />
                        Source repository on request
                      </div>
                    )}

                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white hover:bg-white/10 transition-all"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
