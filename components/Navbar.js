'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const links = [
    { href: '/', label: 'Home' },
    { href: '/#about', label: 'About Me' },
    { href: '/services', label: 'Services' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/#contact', label: 'Contact Me' },
  ]

  // Close menu when route changes
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header className="w-full fixed top-0 left-0 bg-white/80 backdrop-blur-lg z-50 shadow-sm border-b border-purple-100">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* LOGO */}
        <Link
          href="/"
          className="text-2xl font-extrabold tracking-tight text-purple-700 hover:scale-105 transition-transform duration-300"
        >
          Uduakobong<span className="text-black">.Titus</span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex space-x-8 text-gray-800 font-medium relative">
          {links.map((l, i) => {
            const isActive =
              pathname === l.href || (pathname === '/' && l.href === '/')
            return (
              <motion.a
                key={l.href}
                href={l.href}
                className={`relative transition-colors duration-300 ${
                  isActive ? 'text-purple-700' : 'hover:text-purple-700'
                }`}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {l.label}
                {isActive && (
                  <motion.span
                    layoutId="activeIndicator"
                    className="absolute -bottom-1 left-0 w-full h-[2px] bg-purple-700 rounded-full"
                  />
                )}
              </motion.a>
            )
          })}
        </nav>

        {/* DESKTOP CTA */}
        <div className="hidden md:block">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/#contact"
              className="bg-purple-700 text-white py-2 px-6 rounded-full shadow-md hover:bg-black transition-all duration-300"
            >
              Work with Me
            </Link>
          </motion.div>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-md border border-gray-300 hover:bg-gray-100 transition"
        >
          <motion.svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.4 }}
          >
            <path
              d={
                open
                  ? 'M6 18L18 6M6 6l12 12'
                  : 'M3 6h18M3 12h18M3 18h18'
              }
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>
        </button>
      </div>

      {/* MOBILE MENU */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden md:hidden bg-white border-t border-gray-200"
      >
        <div className="px-6 py-4 space-y-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`block font-medium ${
                pathname === l.href
                  ? 'text-purple-700 font-semibold'
                  : 'text-gray-800 hover:text-purple-700'
              } transition`}
            >
              {l.label}
            </a>
          ))}
          <Link
            href="/#contact"
            className="block mt-3 bg-purple-700 text-white text-center py-2 px-4 rounded-full shadow hover:bg-black transition-all duration-300"
          >
            Work with Me
          </Link>
        </div>
      </motion.div>
    </header>
  )
}
