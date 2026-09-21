import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Mail } from 'lucide-react'
import { nav, profile } from '../data/content'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/10 bg-hero/90 backdrop-blur-xl shadow-lg shadow-black/20'
          : 'border-b border-white/5 bg-hero/50 backdrop-blur-md'
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        <a
          href="#top"
          className="font-heading text-xl font-bold tracking-tight text-white transition-opacity hover:opacity-90"
        >
          {profile.name.split(' ')[0]}
          <span className="text-indigo-400">.</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          <li>
            <a
              href="#top"
              className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
            >
              Home
            </a>
          </li>
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-600/30 transition-all hover:scale-105 hover:bg-indigo-500 hover:shadow-indigo-600/50"
          >
            <Mail className="h-4 w-4" />
            <span>Get in touch</span>
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 border-b border-white/10 bg-hero/98 px-6 py-8 backdrop-blur-2xl md:hidden"
          >
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="#top"
                  onClick={() => setOpen(false)}
                  className="block font-heading text-lg font-medium text-slate-200 hover:text-white"
                >
                  Home
                </a>
              </li>
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block font-heading text-lg font-medium text-slate-200 hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-indigo-600 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/30"
                >
                  <Mail className="h-4 w-4" />
                  Get in touch
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
