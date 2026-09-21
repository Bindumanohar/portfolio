import { motion } from 'framer-motion'
import { Award, CheckCircle2 } from 'lucide-react'
import { certifications } from '../data/content'

export default function Certifications() {
  return (
    <section id="certifications" className="relative bg-[#0B0F19]/60 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Left info column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-indigo-400">
              Learning &amp; Credentials
            </div>

            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Industry Certifications
            </h2>

            <p className="mt-4 text-base leading-relaxed text-slate-300">
              I believe in continuous learning. These verified credentials have strengthened my
              foundations in Artificial Intelligence, Cloud Architecture, Java Engineering, and
              Cyber Security.
            </p>

            <div className="mt-8 flex items-center gap-4 rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-lg backdrop-blur-xl">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-lg shadow-indigo-600/30">
                <Award className="h-7 w-7" />
              </div>
              <div>
                <p className="font-heading text-3xl font-bold text-white">{certifications.length}</p>
                <p className="text-xs font-medium text-slate-400 uppercase tracking-wider mt-0.5">
                  Professional Certifications Completed
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right certifications list card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7 rounded-3xl border border-white/10 bg-slate-900/60 p-6 sm:p-8 backdrop-blur-xl"
          >
            <ul className="space-y-4">
              {certifications.map((cert) => (
                <li
                  key={cert.name}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 rounded-2xl border border-white/5 bg-slate-800/40 p-4 transition-colors hover:border-indigo-500/30 hover:bg-slate-800/70"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 mt-0.5 shrink-0 text-indigo-400" />
                    <div>
                      <p className="text-base font-semibold text-white">{cert.name}</p>
                      <p className="text-xs text-slate-400 sm:hidden mt-0.5">{cert.issuer}</p>
                    </div>
                  </div>

                  <span className="hidden sm:inline-block rounded-full bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 text-xs font-medium text-indigo-300 shrink-0">
                    {cert.issuer}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
