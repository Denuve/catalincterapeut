import mongoose from 'mongoose'
import dotenv from 'dotenv'
import readlineSync from 'readline-sync'
import User from '../models/User.js'
import bcrypt from 'bcryptjs'

dotenv.config()

const resetAdminPassword = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: 'ccterapeut'
    })

    console.log('--- Resetare parolă admin ---')
    const email = readlineSync.question('Email admin: ')

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

    const newPassword = readlineSync.question('Noua parolă: ', { hideEchoBack: true })
    const hashedPassword = await bcrypt.hash(newPassword, 10)

    user.password = hashedPassword
    await user.save()

    console.log(`✅ Parola pentru adminul ${email} a fost resetată cu succes.`)
    mongoose.disconnect()
  } catch (err) {
    console.error('❌ Eroare:', err)
    mongoose.disconnect()
  }
}

resetAdminPassword()