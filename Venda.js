// models/Venda.js
const mongoose = require('mongoose');

const vendaSchema = new mongoose.Schema({
  cliente: { type: mongoose.Schema.Types.ObjectId, ref: 'Cliente', required: true },
  produtos: [
    {
      produto: { type: mongoose.Schema.Types.ObjectId, ref: 'Produto' },
      quantidade: { type: Number, required: true },
      precoUnitario: { type: Number, required: true }
    }
  ],
  total: { type: Number, required: true },
  dataVenda: { type: Date, default: Date.now },
  status: { type: String, enum: ['Pendente', 'Pago', 'Cancelado'], default: 'Pendente' }
});

module.exports = mongoose.model('Venda', vendaSchema);
