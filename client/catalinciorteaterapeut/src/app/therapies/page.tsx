// app/terapii/page.tsx
'use client'

import { motion } from 'framer-motion'
import { Sparkles, ActivitySquare, Leaf } from 'lucide-react'

const terapii = [
  {
    icon: <Sparkles size={32} className="text-teal-700" />,
    titlu: 'Radiestezie si Inforenergetică',
    descriere:
      'O metodă profundă de diagnosticare și echilibrare a câmpurilor energetice, bazată pe principiile științifice ale energiei informaționale.',
  },
  {
    icon: <ActivitySquare size={32} className="text-teal-700" />,
    titlu: 'Reiki',
    descriere:
      'Tehnică japoneză de transmitere a energiei universale prin palme, aducând relaxare, regenerare și armonizare interioară.',
  },
  {
    icon: <Leaf size={32} className="text-teal-700" />,
    titlu: 'Șamanism & Meditație',
    descriere:
      'Practici ancestrale care facilitează reconectarea cu Sinele, natura și ghizii spirituali. Te conduc spre claritate și vindecare profundă.',
  },
]

export default function TerapiiPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16 text-gray-800">
      {/* Titlu */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-teal-800 text-center mb-6"
      >
        Terapiile mele
      </motion.h1>

      {/* Subtitlu */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-center text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto"
      >
        Fiecare terapie este o călătorie de întoarcere la tine. Aleg instrumentele potrivite pentru tine în funcție de nevoile și ritmul tău interior.
      </motion.p>

      {/* Grid terapii */}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {terapii.map((terapie, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white border border-teal-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
          >
            <div className="mb-4">{terapie.icon}</div>
            <h3 className="text-xl font-semibold text-teal-800 mb-2">{terapie.titlu}</h3>
            <p className="text-gray-700 text-sm">{terapie.descriere}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}