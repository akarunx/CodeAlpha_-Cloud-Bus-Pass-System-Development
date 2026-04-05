const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

// 1. Connect to Database
connectDB();

// 2. Middleware
app.use(cors());
app.use(express.json());

// 3. Routes (ADD THE LINE HERE)
app.use('/api/tickets', require('./routes/ticketRoutes'));

// 4. Base Route for testing
app.get('/', (req, res) => res.send('Bus Pass API Running Successfully!'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));