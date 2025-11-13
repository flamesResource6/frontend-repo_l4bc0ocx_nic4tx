import { Menu } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const links = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-black/70 backdrop-blur border-b border-zinc-800">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#top" className="text-white font-semibold tracking-wide">Aditya Kumar</a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-zinc-300 hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#contact" className="rounded-md bg-white text-black px-3 py-1.5 text-sm font-medium hover:bg-zinc-200 transition-colors">Get in touch</a>
        </div>
        <button aria-label="Menu" className="md:hidden text-white" onClick={() => setOpen((v) => !v)}>
          <Menu size={22} />
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-zinc-800 bg-black">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-zinc-300 hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="rounded-md bg-white text-black px-3 py-1.5 text-sm font-medium self-start">Get in touch</a>
          </div>
        </div>
      )}
    </header>
  )
}
