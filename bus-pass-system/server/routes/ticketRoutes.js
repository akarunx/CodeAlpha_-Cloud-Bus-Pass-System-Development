const express = require('express');
const router = express.Router();
const { bookTicket, getAllTickets } = require('../controllers/ticketController');

// POST request to book a pass: http://localhost:5000/api/tickets/book
router.post('/book', bookTicket);

// GET request to see all passes: http://localhost:5000/api/tickets/all
router.get('/all', getAllTickets);

module.exports = router;