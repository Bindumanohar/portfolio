import { Mail, ArrowUp } from 'lucide-react'
import { LinkedInIcon } from './SocialIcons'
import { profile } from '../data/content'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#070A12] py-8 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <p>
          &copy; {new Date().getFullYear()} {profile.name}. Built with curiosity &amp; code.
        </p>

        <div className="flex items-center gap-6">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-1.5 transition-colors hover:text-white"
          >
            <Mail className="h-3.5 w-3.5" />
            <span>Email</span>
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 transition-colors hover:text-white"
          >
            <LinkedInIcon className="h-3.5 w-3.5" />
            <span>LinkedIn</span>
          </a>
          <a
            href="#top"
            className="flex items-center gap-1.5 transition-colors hover:text-white ml-2 text-indigo-400 hover:text-indigo-300"
          >
            <span>Back to top</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
