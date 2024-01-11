//Client database table
const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({//creating the DB table
    name: String,
    email: String,
    password: String,
    role: String,
    medalList: [String]
});

const Client = mongoose.model('Client', clientSchema);//creating the Model

module.exports = Client;
