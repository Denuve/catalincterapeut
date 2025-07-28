'use client'

import { useEffect, useState } from 'react'
import { HiMail, HiUser, HiChatAlt2 } from 'react-icons/hi'

export default function MesajePage() {
  const [mesaje, setMesaje] = useState([])

  useEffect(() => {
    const fetchMesaje = async () => {
      try {
        const res = await fetch('http://localhost:5000/messages/getMessages')
        if (!res.ok) throw new Error('Eroare la încărcarea mesajelor')
        const data = await res.json()
        setMesaje(data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchMesaje()
  }, [])

  return (
    <section className="min-h-screen bg-gradient-to-br from-teal-50 to-white py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center mb-12 text-teal-800 drop-shadow-md">
          Mesaje primite
        </h1>

        {mesaje.length === 0 ? (
          <p className="text-center text-gray-500 text-lg italic">Nu există mesaje deocamdată.</p>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2">
            {mesaje.map(({ _id, nume, email, mesaj }) => (
              <article
                key={_id}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300"
              >
                <header className="mb-4 border-b border-teal-200 pb-3 flex items-center gap-3">
                  <HiUser className="text-teal-500 w-7 h-7" />
                  <h2 className="text-xl font-semibold text-teal-700">{nume}</h2>
                </header>

                <div className="mb-4 flex items-center gap-2 text-gray-600">
                  <HiMail className="w-5 h-5 text-teal-400" />
                  <a
                    href={`mailto:${email}`}
                    className="hover:text-teal-600 underline break-all"
                    title={`Trimite email lui ${nume}`}
                  >
                    {email}
                  </a>
                </div>

                <section className="mb-6 flex gap-2 text-gray-700">
                  <HiChatAlt2 className="w-6 h-6 text-teal-400 flex-shrink-0" />
                  <p className="whitespace-pre-line">{mesaj}</p>
                </section>

                <button
                  onClick={() => (window.location.href = `mailto:${email}`)}
                  className="w-full text-center bg-teal-600 text-white py-2 rounded-xl font-semibold hover:bg-teal-700 transition-colors duration-200"
                  aria-label={`Răspunde lui ${nume}`}
                >
                  Răspunde prin Email
                </button>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
