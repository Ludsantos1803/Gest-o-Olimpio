// routes/fornecedores.js
const express = require('express');
const router = express.Router();
const Fornecedor = require('../models/Fornecedor');

// Listar fornecedores
router.get('/', async (req, res) => {
  const fornecedores = await Fornecedor.find();
  res.json(fornecedores);
});

// Criar fornecedor
router.post('/', async (req, res) => {
  try {
    const fornecedor = new Fornecedor(req.body);
    await fornecedor.save();
    res.status(201).json(fornecedor);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Atualizar fornecedor
router.put('/:id', async (req, res) => {
  try {
    const fornecedor = await Fornecedor.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(fornecedor);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Deletar fornecedor
router.delete('/:id', async (req, res) => {
  try {
    await Fornecedor.findByIdAndDelete(req.params.id);
    res.json({ message: 'Fornecedor removido' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
