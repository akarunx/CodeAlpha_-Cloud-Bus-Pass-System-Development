const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // This setup forces Node to wait for the cloud to respond
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('✅ MongoDB Cloud Connected Successfully!');
    } catch (err) {
        console.error('❌ Connection Failed:', err.message);
    }
};

module.exports = connectDB;