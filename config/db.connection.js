const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.FIRST_DB).then(() => {
    console.log("first db  connection made successfully" , process.env.FIRST_DB);
}).catch((err) => {
    console.log("db  connection error ", err);
});