import Programare from '../models/Programare.js'

export const createProgramare = async (req, res) => {
  try {
    const { nume, email, telefon, terapie, data, ora, comentarii } = req.body

    if (!nume || !email || !terapie || !data || !ora) {
      return res.status(400).json({ error: 'Date incomplete' })
    }

    const newProgramare = new Programare({
      nume,
      email,
      telefon,
      terapie,
      data,
      ora,
      comentarii,
    })

    await newProgramare.save()

    res.status(201).json({ message: 'Programare înregistrată cu succes!' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Eroare la salvarea programării' })
  }
}