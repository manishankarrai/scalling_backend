const express  = require('express');
const route =  express.Router() ;
const {  
    getCompany , getByIdCompany  , storeCompany , updateCompany  , deleteCompany   , authCompany

} =  require('../controllers/childCompany.controllers');



route.get('/' , (req , res)=> {
    res.status(200).send({message: "company section working "});
});


route.get('/get' , getCompany );
route.get('/get/:id' , getByIdCompany );
route.post('/store' , storeCompany );
//route.put('/update/:id' , updateCompany );
route.delete('/delete/:id' , deleteCompany );
//route.post('/auth' , authCompany );





module.exports =  route ;