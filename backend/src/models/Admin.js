//db table
const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({//db table
    name: String,
    email: String,
    password: String,
    role: String
});

const Admin = mongoose.model('Admin', adminSchema);//creating model

module.exports = Admin;

