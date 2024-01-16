//Client database table
const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({//creating the DB table
    name: String,
    email: String,
    password: String,
    role: String,
    italyMedal: Number,//medal counters
    brazilMedal: Number,
    japanMedal: Number,
    thailandMedal: Number,
    arabMedal: Number,
    franceMedal: Number
});

const Client = mongoose.model('Client', clientSchema);//creating the Model

module.exports = Client;
