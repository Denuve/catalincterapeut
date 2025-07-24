import express from 'express'
import { createProgramare, getProgramari } from '../controllers/programariController.js'

const router = express.Router()

router.post('/programare', createProgramare)
router.get('/programari', getProgramari)

export default router