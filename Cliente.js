// models/Cliente.js
const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  documento: { type: String, required: true }, // CPF ou CNPJ
  telefone: { type: String, required: true },
  email: { type: String },
  endereco: { type: String },
  cidade: { type: String },
  estado: { type: String, maxlength: 2 },
  cep: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Cliente', clienteSchema);
