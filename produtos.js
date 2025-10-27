// routes/produtos.js
const express = require('express');
const router = express.Router();
const Produto = require('../models/Produto');

// Listar produtos
router.get('/', async (req, res) => {
  const produtos = await Produto.find();
  res.json(produtos);
});

// Criar produto
router.post('/', async (req, res) => {
  try {
    const produto = new Produto(req.body);
    await produto.save();
    res.status(201).json(produto);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Atualizar produto
router.put('/:id', async (req, res) => {
  try {
    const produto = await Produto.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(produto);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Deletar produto
router.delete('/:id', async (req, res) => {
  try {
    await Produto.findByIdAndDelete(req.params.id);
    res.json({ message: 'Produto removido' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
