//food database table
const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    nationality: String,
    image_url: String
});

const Food = mongoose.model('Food', foodSchema);

module.exports = Food;