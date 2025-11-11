'use client'
import { useState } from 'react'
import Link from 'next/link'


export default function Navbar(){
const [open, setOpen] = useState(false)
const links = [
{href: '/', label: 'Home'},
{href: '/#about', label: 'About Me'},
{href: '/services', label: 'Services'},
{href: '/gallery', label: 'Gallery'},
{href: '/#contact', label: 'Contact Me'}
]


return (
<header className="w-full border-b">
<div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
<Link href="/" className="text-xl font-bold text-brand">Friend<span className="text-black">Portfolio</span></Link>


{/* Desktop Links centered visually by space */}
<nav className="hidden md:flex space-x-8">
{links.map(l=> (
<a key={l.href} href={l.href} className="text-sm font-medium hover:text-brand">{l.label}</a>
))}
</nav>


<div className="md:hidden">
<button aria-label="Toggle menu" onClick={()=>setOpen(!open)} className="p-2 rounded-md border">
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d={open? 'M6 18L18 6M6 6l12 12' : 'M3 6h18M3 12h18M3 18h18'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
</button>
</div>


{/* CTA on desktop */}
<div className="hidden md:block">
<Link href="/#contact" className="bg-black text-white py-2 px-4 rounded">Work with me</Link>
</div>
</div>


{/* Mobile menu */}
<div className={`${open ? 'block' : 'hidden'} md:hidden border-t`}>
<div className="px-6 py-4 space-y-3">
{links.map(l=> (
<a key={l.href} href={l.href} className="block font-medium" onClick={()=>setOpen(false)}>{l.label}</a>
))}
<a href="/#contact" className="inline-block mt-2 bg-black text-white py-2 px-4 rounded">Work with me</a>
</div>
</div>
</header>
)
}