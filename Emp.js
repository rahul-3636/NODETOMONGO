const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    e_id: Number,
    e_name: String,
    e_email: String,
    e_number: Number,
    e_gender: String,
    e_dept: String,
    e_location: String
  
});

module.exports = mongoose.model('Emp', employeeSchema);