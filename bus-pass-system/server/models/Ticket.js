const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
    passengerName: { type: String, required: true },
    busNumber: { type: String, required: true },
    price: { type: Number, required: true }, // Fixed pricing
    isPaid: { type: Boolean, default: false },
    qrCode: { type: String, unique: true }, // For security/anti-theft
    issuedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Ticket', ticketSchema);