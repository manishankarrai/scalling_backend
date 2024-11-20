const mongoose  =  require('mongoose');
require('dotenv').config();

 const db_c1 = mongoose.createConnection(`mongodb://127.0.0.1:27017/${process.env.DB_C1}`);
 const db_c2 = mongoose.createConnection(`mongodb://127.0.0.1:27017/${process.env.DB_C2}`);
 const db_c3 = mongoose.createConnection(`mongodb://127.0.0.1:27017/${process.env.DB_C3}`);
 const db_c4 = mongoose.createConnection(`mongodb://127.0.0.1:27017/${process.env.DB_C4}`);

 function createDBConnection(db){
    const db_conn = mongoose.createConnection(`mongodb://127.0.0.1:27017/${db}`);
    return db_conn ; 
 }

 module.exports =  { createDBConnection }