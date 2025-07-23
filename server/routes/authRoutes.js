import express from 'express'
import { loginAdmin } from '../controllers/authController.js'

const router = express.Router()

router.post('api/admin/login', loginAdmin)

export default router