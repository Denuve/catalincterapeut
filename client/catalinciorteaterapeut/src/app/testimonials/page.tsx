'use client'

import { motion } from 'framer-motion'

const testimoniale = [
  {
    nume: 'Maria P.',
    text: 'Această terapie m-a ajutat să găsesc pacea interioară și să mă reconectez cu adevărata mea esență.',
  },
  {
    nume: 'Andrei M.',
    text: 'Profesionalism și energie curată. Recomand cu toată inima!',
  },
  {
    nume: 'Elena S.',
    text: 'Am simțit o transformare profundă după ședința de Reiki.',
  },
  {
    nume: 'Cristian T.',
    text: 'Un ghid de excepție pe calea vindecării și autocunoașterii.',
  },
  {
    nume: 'Ana L.',
    text: 'Spațiu sigur și blândețe în fiecare întâlnire. Mulțumesc!',
  },
  {
    nume: 'Darius F.',
    text: 'Experiență autentică, recomand tuturor celor care caută echilibru.',
  },
]

export default function TestimonialePage() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16 text-gray-800">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-teal-800 text-center mb-12"
      >
        Ce spun clienții mei
      </motion.h1>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {testimoniale.map(({ nume, text }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white border border-teal-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between"
          >
            <p className="text-gray-700 italic mb-4">"{text}"</p>
            <h4 className="text-teal-800 font-semibold text-right">— {nume}</h4>
          </motion.div>
        ))}
      </div>
    </section>
  )
}