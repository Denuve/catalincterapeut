// app/despre/page.tsx
'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Despre() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-16 text-gray-800">
      {/* Titlu */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-teal-800 text-center mb-10"
      >
        Despre mine
      </motion.h1>

      {/* Container */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        
        {/* Poză */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/images/eu.jpg"
            alt="Poză terapeut"
            width={300}
            height={300}
            className="rounded-2xl shadow-lg object-cover"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-lg leading-relaxed space-y-4"
        >
          <p>
            Sunt Catalin Ciortea, terapeut energetic și ghid spiritual dedicat sufletelor care își doresc transformare, vindecare și reconectare cu esența lor.
          </p>
          <p>
            Lucrez prin metode precum Inforenergetica, Reiki, meditație și practici șamanice, oferind spațiu sigur, blândețe și ghidare în procesul interior al fiecărei persoane.
          </p>
          <p>
            Cred cu tărie că fiecare om are în el puterea de a se vindeca și de a-și regăsi calea – iar eu sunt aici pentru a te însoți cu respect, claritate și prezență.
          </p>
        </motion.div>
      </div>
    </section>
  )
}