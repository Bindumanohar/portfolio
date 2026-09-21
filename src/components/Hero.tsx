import { motion } from 'framer-motion'
import { ArrowDown, Mail, GraduationCap, Sparkles } from 'lucide-react'
import { LinkedInIcon } from './SocialIcons'
import photo from '../assets/photo.png'
import { profile } from '../data/content'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden bg-hero px-4 pt-32 pb-20 sm:px-6 lg:px-8 lg:pt-36 lg:pb-28 flex items-center"
    >
      {/* Background ambient glowing orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-indigo-500/20 blur-[130px] animate-pulse-glow" />
        <div className="absolute -right-40 bottom-0 h-[600px] w-[600px] rounded-full bg-violet-500/15 blur-[150px] animate-pulse-glow" />
        <div className="absolute left-1/3 top-1/2 h-72 w-72 rounded-full bg-pink-500/10 blur-[120px] animate-float" />
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16 w-full">
        {/* Left Column — Text & CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="order-2 lg:order-1"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>
            <span className="text-xs font-semibold tracking-wide text-slate-200">
              Open for Internships & Full-Time Roles
            </span>
          </div>

          {/* Main Title */}
          <h1 className="mt-6 font-heading text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.08]">
            Hello, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400">
              {profile.name}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-4 font-heading text-xl font-medium text-slate-200 sm:text-2xl">
            Computer Science and Engineering student at{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-300 font-semibold">
              MITM
            </span>
          </p>

          {/* Description */}
          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300/90 sm:text-lg">
            {profile.intro} Passionate about problem-solving, building useful applications, and
            continuously learning new technologies to engineer scalable, real-world software.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-indigo-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-indigo-600/30 transition-all duration-200 hover:scale-105 hover:bg-indigo-500 hover:shadow-indigo-600/50"
            >
              <span>View Projects</span>
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all duration-200 hover:bg-white/10 hover:border-white/25"
            >
              <Mail className="h-4 w-4 text-indigo-400" />
              <span>Get in touch</span>
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all duration-200 hover:bg-white/10 hover:border-white/25"
              aria-label="LinkedIn Profile"
            >
              <LinkedInIcon className="h-4 w-4 text-indigo-400" />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
          </div>

          {/* Stats Bar */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl">
            <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-3.5 text-center backdrop-blur-md transition-transform hover:-translate-y-1">
              <p className="font-heading text-2xl font-bold text-white">2027</p>
              <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                Graduation
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-3.5 text-center backdrop-blur-md transition-transform hover:-translate-y-1 border-amber-500/20">
              <p className="font-heading text-2xl font-bold text-amber-400">2nd 🥈</p>
              <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                Expo Award
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-3.5 text-center backdrop-blur-md transition-transform hover:-translate-y-1">
              <p className="font-heading text-2xl font-bold text-indigo-400">4+</p>
              <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                Certifications
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-3.5 text-center backdrop-blur-md transition-transform hover:-translate-y-1">
              <p className="font-heading text-2xl font-bold text-purple-400">2+</p>
              <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                Projects
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Column — Professional Portrait Frame with Glowing Effects */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative order-1 flex justify-center px-4 lg:order-2 lg:justify-end"
        >
          <div className="relative w-[290px] sm:w-[350px] lg:w-[410px]">
            {/* Ambient Backlight Glow */}
            <div className="absolute -inset-4 aspect-square rounded-full bg-gradient-to-tr from-indigo-500/35 via-violet-500/30 to-pink-500/20 blur-3xl" />

            {/* Glass Border Ring Frame */}
            <div className="relative z-10 aspect-square overflow-hidden rounded-full border-2 border-white/20 bg-gradient-to-br from-indigo-500/30 via-purple-500/20 to-pink-500/20 p-2 backdrop-blur-md shadow-2xl">
              <div className="h-full w-full overflow-hidden rounded-full bg-slate-950/40">
                <img
                  src={photo}
                  alt="Bindu Manohar — Professional Portrait"
                  className="relative z-10 h-full w-full object-cover object-[50%_16%]"
                  loading="eager"
                />
              </div>
            </div>

            {/* Floating Glass Badge 1: College & Degree */}
            <div className="animate-float absolute -left-3 bottom-14 sm:bottom-16 sm:-left-6 z-20 rounded-2xl border border-white/15 bg-slate-900/85 p-3.5 shadow-xl backdrop-blur-xl flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-400">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">B.E. CSE Student</p>
                <p className="text-[11px] text-slate-300">MITM</p>
              </div>
            </div>

            {/* Floating Glass Badge 2: Open Status */}
            <div className="animate-float-delayed absolute -right-3 top-12 sm:top-14 sm:-right-6 z-20 rounded-2xl border border-white/20 bg-indigo-600/90 p-3.5 shadow-xl backdrop-blur-xl text-white flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/20 text-white">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">Open For</p>
                <p className="text-[11px] font-semibold text-indigo-100">Internship & Job</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Elegant bottom wave transition */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none" aria-hidden="true">
        <svg
          viewBox="0 0 1440 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full text-[#090D16]"
          preserveAspectRatio="none"
        >
          <path
            d="M0 64V24C240 50 480 58 720 40C960 22 1200 42 1440 18V64H0Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  )
}
