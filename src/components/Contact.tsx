import { useState, type FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Copy, Check, Send, CheckCircle2, AlertCircle, ExternalLink } from 'lucide-react'
import { LinkedInIcon } from './SocialIcons'
import { profile } from '../data/content'

// Fallback robust copy function that works across all browsers and protocols
async function copyToClipboard(text: string): Promise<boolean> {
  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text)
      return true
    } catch {
      // Fallback below
    }
  }

  try {
    const textArea = document.createElement('textarea')
    textArea.value = text
    textArea.style.position = 'fixed'
    textArea.style.left = '-9999px'
    textArea.style.top = '-9999px'
    document.body.appendChild(textArea)
    textArea.focus()
    textArea.select()
    const success = document.execCommand('copy')
    document.body.removeChild(textArea)
    return success
  } catch (err) {
    console.error('Copy fallback failed:', err)
    return false
  }
}

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [copied, setCopied] = useState(false)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  // 1-Click Copy with bulletproof fallback
  async function handleCopyEmail() {
    const ok = await copyToClipboard(profile.email)
    if (ok) {
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    }
  }

  // Opens Gmail directly in a new tab with recipient pre-filled (works 100% in all browsers)
  function handleOpenGmail(subjectText = 'Portfolio Inquiry', bodyText = '') {
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      profile.email
    )}&su=${encodeURIComponent(subjectText)}&body=${encodeURIComponent(bodyText)}`
    window.open(gmailUrl, '_blank', 'noopener,noreferrer')
  }

  // Opens system default mail app (e.g., Apple Mail, Outlook)
  function handleOpenMailClient(subjectText = 'Portfolio Inquiry', bodyText = '') {
    const mailtoUrl = `mailto:${profile.email}?subject=${encodeURIComponent(
      subjectText
    )}&body=${encodeURIComponent(bodyText)}`
    window.location.href = mailtoUrl
  }

  // Handle direct form submission
  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus('submitting')
    setErrorMessage('')

    const web3FormsKey = import.meta.env.VITE_WEB3FORMS_KEY

    // If an Access Key is configured, submit directly in the background
    if (web3FormsKey && web3FormsKey !== 'YOUR_ACCESS_KEY_HERE') {
      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            access_key: web3FormsKey,
            name,
            email,
            message,
            subject: `New Portfolio Message from ${name}`,
            from_name: name,
          }),
        })

        const result = await response.json()
        if (result.success) {
          setStatus('success')
          setName('')
          setEmail('')
          setMessage('')
          return
        } else {
          throw new Error(result.message || 'Submission failed')
        }
      } catch (err: unknown) {
        console.warn('Direct API submission failed, falling back to Gmail:', err)
        // Fallback to client email compose
      }
    }

    // Direct, guaranteed fallback: Open Gmail compose with message pre-filled & copy details
    const subject = `Portfolio Inquiry from ${name}`
    const body = `${message}\n\n—\nFrom: ${name}\nEmail: ${email}`

    // Copy message to clipboard so user never loses it
    await copyToClipboard(body)

    // Open web Gmail in a new tab
    handleOpenGmail(subject, body)

    setStatus('success')
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-hero px-4 pt-20 pb-16 sm:px-6 lg:px-8">
      {/* Background ambient light */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute left-1/2 -top-24 h-96 w-96 -translate-x-1/2 rounded-full bg-indigo-600/20 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-5xl">
        {/* Header CTA */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-indigo-400">
            Get In Touch
          </div>
          <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Let's build something{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400">
              amazing together.
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300">
            I'm currently seeking internship and entry-level software engineering opportunities.
            Whether you have an opportunity or just want to connect, my inbox is always open!
          </p>

          {/* Quick Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            {/* Primary Email Button — Opens Gmail Web Compose directly */}
            <button
              type="button"
              onClick={() => handleOpenGmail()}
              title="Open draft directly in Gmail"
              className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-indigo-600/30 transition-all duration-200 hover:scale-105 hover:bg-indigo-500 hover:shadow-indigo-600/50 cursor-pointer"
            >
              <Mail className="h-4 w-4" />
              <span>Send an Email</span>
            </button>

            {/* Copy Email Button with Bulletproof Fallback */}
            <button
              type="button"
              onClick={handleCopyEmail}
              title="Copy bindumanohar98@gmail.com to clipboard"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all duration-200 hover:bg-white/10 hover:border-white/25 cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 text-emerald-400" />
                  <span className="text-emerald-300 font-medium">Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4 text-slate-300" />
                  <span>Copy Email</span>
                </>
              )}
            </button>

            {/* LinkedIn Button */}
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              title="Open LinkedIn Profile in a new tab"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all duration-200 hover:bg-white/10 hover:border-white/25"
            >
              <LinkedInIcon className="h-4 w-4 text-indigo-400" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Message Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 rounded-3xl border border-white/10 bg-slate-900/60 p-6 sm:p-10 backdrop-blur-xl"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
            <div>
              <h3 className="font-heading text-xl font-bold text-white">Send a Direct Message</h3>
              <p className="text-xs text-slate-400 mt-1">
                Fill out the form below to connect with Bindu directly.
              </p>
            </div>

            <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 text-xs font-medium text-indigo-300 self-start sm:self-auto">
              <Mail className="h-3.5 w-3.5" />
              Direct Inbox
            </span>
          </div>

          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-6 text-center"
              >
                <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-400" />
                <h4 className="mt-3 font-heading text-xl font-bold text-white">
                  Message Sent / Prepared!
                </h4>
                <p className="mt-2 text-sm text-slate-300 max-w-md mx-auto">
                  Thank you! Your message draft was opened in Gmail and copied to your clipboard so
                  nothing is lost. Bindu will review it and reply soon!
                </p>
                <div className="mt-6 flex justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setStatus('idle')
                      setName('')
                      setEmail('')
                      setMessage('')
                    }}
                    className="rounded-xl bg-slate-800 border border-white/10 px-5 py-2.5 text-xs font-semibold text-white hover:bg-slate-700 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label
                    htmlFor="name"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2"
                  >
                    Your Name <span className="text-indigo-400">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jane Doe"
                    className="w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-colors"
                  />
                </div>

                <div className="sm:col-span-1">
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2"
                  >
                    Your Email <span className="text-indigo-400">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jane@example.com"
                    className="w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-colors"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2"
                  >
                    Message <span className="text-indigo-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Hi Bindu, I'd like to discuss an opportunity or project collaboration..."
                    className="w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-colors resize-none"
                  />
                </div>

                {errorMessage && (
                  <div className="sm:col-span-2 flex items-center gap-2 rounded-xl bg-rose-500/10 border border-rose-500/20 p-3 text-xs text-rose-300">
                    <AlertCircle className="h-4 w-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="sm:col-span-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2">
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-7 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-600/30 transition-all hover:bg-indigo-500 disabled:opacity-50 cursor-pointer"
                  >
                    <Send className="h-4 w-4" />
                    <span>{status === 'submitting' ? 'Sending...' : 'Send Message'}</span>
                  </button>

                  <div className="flex items-center gap-3 text-xs text-slate-400 justify-end">
                    <span>Or open in:</span>
                    <button
                      type="button"
                      onClick={() => handleOpenGmail(`Inquiry from ${name || 'Visitor'}`, message)}
                      className="text-indigo-400 hover:text-indigo-300 font-medium inline-flex items-center gap-1 cursor-pointer"
                    >
                      Gmail Web <ExternalLink className="h-3 w-3" />
                    </button>
                    <span>•</span>
                    <button
                      type="button"
                      onClick={() =>
                        handleOpenMailClient(`Inquiry from ${name || 'Visitor'}`, message)
                      }
                      className="text-slate-300 hover:text-white font-medium cursor-pointer"
                    >
                      Mail App
                    </button>
                  </div>
                </div>
              </form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
