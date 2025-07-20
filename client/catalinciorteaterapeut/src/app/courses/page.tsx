'use client'

import { motion } from 'framer-motion'

const cursuri = [
  {
    titlu: 'Introducere în Radiestezie si Inforenergetică',
    descriere: 'Un curs pentru cei care doresc să înțeleagă bazele energiei informaționale și tehnicile de vindecare energetică.',
    durata: '4 săptămâni',
  },
  {
    titlu: 'Reiki Nivel 1',
    descriere: 'Inițierea în Reiki, învățând să canalizezi energia universală pentru tine și cei dragi.',
    durata: '2 zile',
  },
  {
    titlu: 'Meditație și Șamanism Aplicat',
    descriere: 'O călătorie practică prin tehnici ancestrale pentru reconectare interioară și claritate spirituală.',
    durata: '6 săptămâni',
  },
]

export default function CursuriPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16 text-gray-800">
      {/* Titlu */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-teal-800 text-center mb-6"
      >
        Cursurile mele
      </motion.h1>

      {/* Introducere */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-center text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto"
      >
        Explorează cursurile mele atent concepute pentru a te susține pe drumul tău spiritual și energetic.
      </motion.p>

      {/* Grid cursuri */}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {cursuri.map((curs, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white border border-teal-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-semibold text-teal-800 mb-2">{curs.titlu}</h3>
              <p className="text-gray-700 text-sm mb-4">{curs.descriere}</p>
            </div>
            <div className="mt-auto flex justify-between items-center">
              <span className="text-teal-600 font-medium">{curs.durata}</span>
              <button className="bg-teal-600 text-white px-4 py-2 rounded-xl hover:bg-teal-700 transition">
                Înscrie-te
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}