// models/Fornecedor.js
const mongoose = require('mongoose');

const fornecedorSchema = new mongoose.Schema({
  nomeEmpresa: { type: String, required: true },
  cnpj: { type: String, required: true },
  telefone: { type: String },
  email: { type: String },
  endereco: { type: String },
  cidade: { type: String },
  estado: { type: String, maxlength: 2 },
  cep: { type: String },
  contatoPrincipal: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Fornecedor', fornecedorSchema);
