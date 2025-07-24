import User from '../models/User.js'
import jwt from 'jsonwebtoken'

export const loginAdmin = async (req, res) => {
  const { email, password } = req.body
  try {
    const user = await User.findOne({ email: email.trim().toLowerCase() })

    if (!user || user.role !== 'admin') {
      return res.status(401).json({ message: 'Email sau parolă incorecte1' })
    }

    const isMatch = await user.matchPassword(password)
    if (!isMatch) {
      return res.status(401).json({ message: 'Email sau parolă incorecte2' })
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    )

    res.json({ token })
  } catch (error) {
    res.status(500).json({ message: `${error}` })
  }
}