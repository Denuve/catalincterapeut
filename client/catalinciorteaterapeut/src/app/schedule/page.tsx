'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const terapii = [
  { id: 'inforenergetica', nume: 'Terapie Inforenergetica', durata: '1:30', pret: 'va urma' },
  { id: 'thetahealing', nume: 'ThetaHealing și Regresie', durata: '2-3 ore', pret: 'va urma' },
  { id: 'terapie3', nume: 'Terapie 3 (completat ulterior)', durata: '-', pret: '-' },
  { id: 'terapie4', nume: 'Terapie 4 (completat ulterior)', durata: '-', pret: '-' },
]

const oreDisponibile = [
  '10:00', '11:00', '12:00', '13:00',
  '14:00', '15:00', '16:00', '17:00', '18:00',
]

export default function ProgramarePage() {
  const [formData, setFormData] = useState({
    nume: '',
    email: '',
    telefon: '',
    terapie: terapii[0].id,
    data: '',
    ora: oreDisponibile[0],
    comentarii: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Programare:', formData)
    setSubmitted(true)
    setFormData({
      nume: '',
      email: '',
      telefon: '',
      terapie: terapii[0].id,
      data: '',
      ora: oreDisponibile[0],
      comentarii: '',
    })
  }

  return (
    <section className="max-w-3xl mx-auto px-4 py-16 text-gray-800">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-teal-800 text-center mb-8"
      >
        Programează o ședință
      </motion.h1>

      {submitted && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-6 p-4 bg-teal-100 text-teal-800 rounded-lg text-center font-semibold"
        >
          Mulțumim! Cererea ta a fost înregistrată. Te voi contacta în curând.
        </motion.div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-2xl shadow-md">
        {/* Nume */}
        <div>
          <label htmlFor="nume" className="block mb-1 font-medium text-teal-700">
            Nume complet *
          </label>
          <input
            type="text"
            id="nume"
            name="nume"
            value={formData.nume}
            onChange={handleChange}
            required
            className="w-full border border-teal-300 rounded-lg px-3 py-2 focus:outline-teal-500"
            placeholder="Numele tău"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block mb-1 font-medium text-teal-700">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-teal-300 rounded-lg px-3 py-2 focus:outline-teal-500"
            placeholder="exemplu@domain.com"
          />
        </div>

        {/* Telefon */}
        <div>
          <label htmlFor="telefon" className="block mb-1 font-medium text-teal-700">
            Telefon
          </label>
          <input
            type="tel"
            id="telefon"
            name="telefon"
            value={formData.telefon}
            onChange={handleChange}
            className="w-full border border-teal-300 rounded-lg px-3 py-2 focus:outline-teal-500"
            placeholder="Număr de telefon"
          />
        </div>

        {/* Terapie (select) */}
        <div>
          <label htmlFor="terapie" className="block mb-1 font-medium text-teal-700">
            Alege terapia *
          </label>
          <select
            id="terapie"
            name="terapie"
            value={formData.terapie}
            onChange={handleChange}
            required
            className="w-full border border-teal-300 rounded-lg px-3 py-2 focus:outline-teal-500"
          >
            {terapii.map((t) => (
              <option key={t.id} value={t.id}>
                {t.nume} — Durata: {t.durata} — Preț: {t.pret}
              </option>
            ))}
          </select>
        </div>

        {/* Data */}
        <div>
          <label htmlFor="data" className="block mb-1 font-medium text-teal-700">
            Data preferată *
          </label>
          <input
            type="date"
            id="data"
            name="data"
            value={formData.data}
            onChange={handleChange}
            required
            className="w-full border border-teal-300 rounded-lg px-3 py-2 focus:outline-teal-500"
          />
        </div>

        {/* Ora preferată */}
        <div>
          <label htmlFor="ora" className="block mb-1 font-medium text-teal-700">
            Ora preferată *
          </label>
          <select
            id="ora"
            name="ora"
            value={formData.ora}
            onChange={handleChange}
            required
            className="w-full border border-teal-300 rounded-lg px-3 py-2 focus:outline-teal-500"
          >
            {oreDisponibile.map((ora) => (
              <option key={ora} value={ora}>
                {ora}
              </option>
            ))}
          </select>
        </div>

        {/* Comentarii */}
        <div>
          <label htmlFor="comentarii" className="block mb-1 font-medium text-teal-700">
            Comentarii (opțional)
          </label>
          <textarea
            id="comentarii"
            name="comentarii"
            value={formData.comentarii}
            onChange={handleChange}
            rows={4}
            className="w-full border border-teal-300 rounded-lg px-3 py-2 focus:outline-teal-500"
            placeholder="Întrebări, detalii suplimentare..."
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-teal-600 text-white py-3 rounded-xl font-semibold hover:bg-teal-700 transition"
        >
          Trimite cererea
        </button>
      </form>
    </section>
  )
}