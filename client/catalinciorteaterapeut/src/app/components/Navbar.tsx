// components/Navbar.tsx
'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo sau numele terapeutului */}
        <Link href="/" className="text-teal-700 text-2xl font-bold">
          Catalin Ciortea Terapeut
        </Link>

        {/* Meniu pentru desktop */}
        <div className="hidden md:flex space-x-8">
          <NavLink href="/about" label="Despre" />
          <NavLink href="/therapies" label="Terapii" />
          <NavLink href="/courses" label="Cursuri" />
          <NavLink href="/testimonials" label="Testimoniale" />
          <NavLink href="/contact" label="Contact" />
        </div>

        {/* Buton programare */}
        <Link href="/schedule" className="hidden md:inline-block bg-teal-600 text-white px-4 py-2 rounded-xl hover:bg-teal-700 transition">
          Programare
        </Link>

        {/* Icon burger (mobile) */}
        <button onClick={toggleMenu} className="md:hidden text-teal-700">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Meniu mobil */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-4">
          <NavLink href="/about" label="Despre" />
          <NavLink href="/courses" label="Terapii" />
          <NavLink href="/cursuri" label="Cursuri" />
          <NavLink href="/testimonials" label="Testimoniale" />
          <NavLink href="/contact" label="Contact" />
          <Link href="/schedule" className="block text-center bg-teal-600 text-white py-2 rounded-xl hover:bg-teal-700">
            Programare
          </Link>
        </div>
      )}
    </nav>
  )
}

const NavLink = ({ href, label }: { href: string; label: string }) => (
  <Link href={href} className="text-teal-800 hover:text-teal-600 transition font-medium">
    {label}
  </Link>
)

export default Navbar