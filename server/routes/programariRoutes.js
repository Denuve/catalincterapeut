import express from 'express'
import { createProgramare } from '../controllers/programariController.js'

const router = express.Router()

router.post('/', createProgramare)

export default router