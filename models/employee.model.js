const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name: {
         type: String , 
         required: true , 
         unique: true 
    },
    department: {
        type: String , 
        required: true 
    }
}, { timestamps: true });


module.exports = { employeeSchema };