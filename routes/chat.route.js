const express  = require('express');
const route =  express.Router() ;
const {  
    getEmp , getByIdEmp  , storeEmp , updateEmp  , deleteEmp   , authEmp

} =  require('../controllers/chat.controllers');




route.get('/' , (req , res)=> {
    res.status(200).send({message: "chat section working "});
});


route.get('/employee/get' , getEmp );
route.get('/employee/get/:id' , getByIdEmp );
route.post('/employee/store' , storeEmp );
route.put('/employee/update/:id' , updateEmp );
route.delete('/employee/delete/:id' , deleteEmp );
route.post('/employee/auth' , authEmp );





module.exports =  route ;