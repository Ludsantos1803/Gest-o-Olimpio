// routes/clientes.js
const express = require('express');
const router = express.Router();
const Cliente = require('../models/Cliente');

// Listar todos os clientes
router.get('/', async (req, res) => {
  const clientes = await Cliente.find();
  res.json(clientes);
});

// Criar novo cliente
router.post('/', async (req, res) => {
  try {
    const cliente = new Cliente(req.body);
    await cliente.save();
    res.status(201).json(cliente);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Atualizar cliente
router.put('/:id', async (req, res) => {
  try {
    const cliente = await Cliente.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(cliente);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Deletar cliente
router.delete('/:id', async (req, res) => {
  try {
    await Cliente.findByIdAndDelete(req.params.id);
    res.json({ message: 'Cliente removido' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
