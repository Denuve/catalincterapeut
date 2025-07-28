import Message from '../models/Message.js';

export const createMessage = async (req, res) => {
  try {
    const { nume, email, mesaj } = req.body;
    if (!nume || !email || !mesaj) {
      return res.status(400).json({ error: 'Toate câmpurile sunt obligatorii.' });
    }
    const newMessage = new Message({ nume, email, mesaj });
    await newMessage.save();
    res.status(201).json({ message: 'Mesaj trimis cu succes!', data: newMessage });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Eroare server, încearcă mai târziu.' });
  }
};

export const getMessages = async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.status(200).json(messages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Eroare server, încearcă mai târziu.' });
  }
};