const mongoose = require('mongoose');

const carsSchema = new mongoose.Schema(
    {
        name: String,
        description: String,
        location: String,
        phoneNumber: String,
        website: String,
        isVerified: {
            type: Boolean,
            default: false
        }
    },{ timestamps: true }
)

const Cars = mongoose.model('Cars', carsSchema )
module.exports = Cars