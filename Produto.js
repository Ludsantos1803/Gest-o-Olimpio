// models/Produto.js
const mongoose = require('mongoose');

const produtoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  codigo: { type: String, required: true, unique: true },
  marca: { type: String },
  categoria: { type: String, required: true },
  quantidade: { type: Number, default: 0 },
  precoCusto: { type: Number, required: true },
  precoVenda: { type: Number, required: true },
  fornecedor: { type: String },
  minEstoque: { type: Number, default: 5 },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Produto', produtoSchema);
