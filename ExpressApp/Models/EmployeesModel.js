const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    position: { type: String, required: true },
    department: { type: String, required: true , enum: ['HR', 'Engineering', 'Sales', 'Marketing']},
    salary: { type: Number, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    comment: { type: String }
},
{ timestamps: true });

const Employee = mongoose.model('Employee', employeeSchema);
module.exports = Employee;