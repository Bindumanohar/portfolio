import { motion } from 'framer-motion'

type SectionHeadingProps = {
  title: string
  note?: string
}

export default function SectionHeading({ title, note }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-t border-line pt-6 mb-10 md:mb-14"
    >
      <h2 className="text-3xl md:text-4xl font-display font-medium tracking-tight">
        {title}
      </h2>
      {note && <p className="text-sm text-muted max-w-xs">{note}</p>}
    </motion.div>
  )
}
