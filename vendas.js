// routes/vendas.js
const express = require('express');
const router = express.Router();
const Venda = require('../models/Venda');

// Listar vendas
router.get('/', async (req, res) => {
  const vendas = await Venda.find().populate('cliente').populate('produtos.produto');
  res.json(vendas);
});

// Criar venda
router.post('/', async (req, res) => {
  try {
    const venda = new Venda(req.body);
    await venda.save();
    res.status(201).json(venda);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Atualizar venda
router.put('/:id', async (req, res) => {
  try {
    const venda = await Venda.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(venda);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Deletar venda
router.delete('/:id', async (req, res) => {
  try {
    await Venda.findByIdAndDelete(req.params.id);
    res.json({ message: 'Venda removida' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
