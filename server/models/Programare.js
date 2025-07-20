import mongoose from 'mongoose'

const programareSchema = new mongoose.Schema({
  nume: { type: String, required: true },
  email: { type: String, required: true },
  telefon: String,
  terapie: { type: String, required: true },
  data: { type: String, required: true },
  ora: { type: String, required: true },
  comentarii: String,
}, { timestamps: true })

const Programare = mongoose.model('Programare', programareSchema)

export default Programare