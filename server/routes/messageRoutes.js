import express from 'express';
import { createMessage, getMessages } from '../controllers/messageController.js';

const router = express.Router();

router.post('/sendMessage', createMessage);
router.get('/getMessages', getMessages);

export default router;