// routes/users.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Rota para registrar novo usuário
router.post('/register', async (req, res) => {
  try {
    const { username, password, role } = req.body;
    const userExists = await User.findOne({ username });

    if (userExists) return res.status(400).json({ message: 'Usuário já existe' });

    const user = new User({ username, password, role });
    await user.save();

    res.status(201).json({ message: 'Usuário criado com sucesso' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Rota para login
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ message: 'Usuário não encontrado' });

    const isMatch = await user.matchPassword(password);
    if (!isMatch) return res.status(400).json({ message: 'Senha incorreta' });

    // Criar token JWT
    const token = jwt.sign({ id: user._id, username: user.username, role: user.role }, 'SECRET_KEY', {
      expiresIn: '1d'
    });

    res.json({ token, user: { id: user._id, username: user.username, role: user.role } });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
