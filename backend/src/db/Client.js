//Client database table
const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: String,
    medalList: [String]
});

const Client = mongoose.model('Client', clientSchema);

module.exports = Client;