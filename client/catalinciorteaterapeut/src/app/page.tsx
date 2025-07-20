// app/page.tsx
'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function HomePage() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 px-4 bg-gradient-to-br from-teal-50 to-white min-h-screen">
      
      {/* HERO */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-bold text-teal-800 mb-6"
      >
        Vindecare  Conexiune  Transformare
      </motion.h1>

      {/* SUBTEXT */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="text-lg md:text-xl max-w-2xl text-gray-700 mb-10"
      >
        Bine ai venit în spațiul în care energia vindecătoare întâlnește înțelepciunea străveche.  
        Te ghidez cu blândețe în călătoria ta de transformare interioară.
      </motion.p>

      {/* BUTTONS */}
      <div className="flex gap-6">
        <Link href="/terapii">
          <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-2xl shadow-md transition">
            Vezi terapiile
          </button>
        </Link>

        <Link href="/programare">
          <button className="border border-teal-600 text-teal-700 hover:bg-teal-100 px-6 py-3 rounded-2xl transition">
            Programează o ședință
          </button>
        </Link>
      </div>
    </section>
  )
}