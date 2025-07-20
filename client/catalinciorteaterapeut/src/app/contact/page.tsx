'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, MapPin } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nume: '',
    email: '',
    mesaj: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Contact:', formData)
    setSubmitted(true)
    setFormData({ nume: '', email: '', mesaj: '' })
  }

  return (
    <section className="max-w-3xl mx-auto px-4 py-16 text-gray-800">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-teal-800 text-center mb-8"
      >
        Contact
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-center text-lg text-gray-600 mb-12 max-w-xl mx-auto"
      >
        Ai întrebări, sugestii sau dorești să colaborăm? Scrie-mi mai jos și îți voi răspunde cât de curând.
      </motion.p>

      {submitted && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-6 p-4 bg-teal-100 text-teal-800 rounded-lg text-center font-semibold"
        >
          Mulțumesc pentru mesaj! Te voi contacta în curând.
        </motion.div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-2xl shadow-md">
        <div>
          <label htmlFor="nume" className="block mb-1 font-medium text-teal-700">
            Nume *
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

        <div>
          <label htmlFor="mesaj" className="block mb-1 font-medium text-teal-700">
            Mesaj *
          </label>
          <textarea
            id="mesaj"
            name="mesaj"
            value={formData.mesaj}
            onChange={handleChange}
            required
            rows={5}
            className="w-full border border-teal-300 rounded-lg px-3 py-2 focus:outline-teal-500"
            placeholder="Scrie mesajul tău aici..."
          />
        </div>

        <button
          type="submit"
          className="w-full bg-teal-600 text-white py-3 rounded-xl font-semibold hover:bg-teal-700 transition"
        >
          Trimite mesaj
        </button>
      </form>

      {/* Contact Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-12 bg-teal-50 rounded-2xl p-6 shadow-inner border border-teal-100"
      >
        <h2 className="text-2xl font-semibold text-teal-800 mb-4 text-center">Date de contact</h2>
        <div className="flex flex-col gap-6 max-w-md mx-auto">
          <div className="flex items-center gap-4">
            <Phone className="text-teal-600" size={28} />
            <a href="tel:+40123456789" className="text-teal-700 font-medium hover:underline">
              +40 123 456 789
            </a>
          </div>
          <div className="flex items-center gap-4">
            <MapPin className="text-teal-600" size={28} />
            <address className="not-italic text-teal-700 font-medium">
              Strada Exemplu 10, Cluj-Napoca, România
            </address>
          </div>
        </div>
      </motion.div>
    </section>
  )
}