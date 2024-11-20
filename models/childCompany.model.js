const mongoose = require('mongoose');

const ChildCompanySchema = new mongoose.Schema({
    company_name: {
         type: String , 
         required: true , 
         unique: true 
    },
    company_db: {
        type: String , 
        unique: true  ,
        required: true 
    }
}, { timestamps: true });



const ChildCompany =  mongoose.model('child_company', ChildCompanySchema) ;


module.exports = { ChildCompany };