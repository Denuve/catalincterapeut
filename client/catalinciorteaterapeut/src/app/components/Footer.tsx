// components/Footer.tsx
'use client'

import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-teal-50 border-t border-teal-100 py-6 mt-12 text-center text-sm text-gray-600">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Text stânga */}
        <p className="text-gray-700">
          © {new Date().getFullYear()} Catalin Ciortea Terapeut. Toate drepturile rezervate.
        </p>

        {/* Linkuri rapide */}
        <div className="flex space-x-4">
          <Link href="/politica-confidentialitate" className="hover:text-teal-700">
            Confidențialitate
          </Link>
          <Link href="/contact" className="hover:text-teal-700">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer