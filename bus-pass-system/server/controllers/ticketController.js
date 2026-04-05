const Ticket = require('../models/Ticket');

// Create a new Bus Pass
exports.bookTicket = async (req, res) => {
    try {
        const { passengerName, busNumber, route } = req.body;

        // Strict Pricing Logic: Prevents "incorrect pricing" by setting it on the server
        const fixedPrice = 500; 

        const newTicket = new Ticket({
            passengerName,
            busNumber,
            route,
            price: fixedPrice,
            qrCode: `PASS-${Math.random().toString(36).toUpperCase().substring(2, 10)}`
        });

        await newTicket.save();
        res.status(201).json({ message: "Bus Pass Booked Successfully!", ticket: newTicket });
    } catch (error) {
        res.status(500).json({ message: "Server Error: Could not book ticket", error: error.message });
    }
};

// Get all passes (for Admin/Verification)
exports.getAllTickets = async (req, res) => {
    try {
        const tickets = await Ticket.find();
        res.json(tickets);
    } catch (error) {
        res.status(500).json({ message: "Error fetching tickets" });
    }
};