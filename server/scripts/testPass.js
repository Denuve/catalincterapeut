import mongoose from 'mongoose'
import dotenv from 'dotenv'
import readlineSync from 'readline-sync'
import User from '../models/User.js'
import bcrypt from 'bcryptjs'

dotenv.config()

const verifyAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: 'ccterapeut'
    })

    console.log('--- Verificare admin ---')
    const email = readlineSync.question('Email: ')
    const password = readlineSync.question('Parola: ', { hideEchoBack: true })

    const user = await User.findOne({ email })

    if (!user) {
      console.log('❌ Nu există un user cu acest email.')
      mongoose.disconnect()
      return
    }

    if (user.role !== 'admin') {
      console.log('❌ Acest user nu este admin.')
      mongoose.disconnect()
      return
    }

    const isMatch = await bcrypt.compare(password, user.password)
    if (isMatch) {
      console.log(`✅ Parola este corectă pentru adminul ${email}.`)
    } else {
      console.log('❌ Parola introdusă este greșită.')
    }

    mongoose.disconnect()
  } catch (err) {
    console.error('❌ Eroare:', err)
    mongoose.disconnect()
  }
}

verifyAdmin()