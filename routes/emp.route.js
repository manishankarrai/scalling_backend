const express  = require('express');
const route =  express.Router() ;
const {  
    getEmp , getByIdEmp  , storeEmp , updateEmp  , deleteEmp   , authEmp

} =  require('../controllers/chat.controllers');
const { checkCompanyId } =  require('../middleware/checkCompanyId.middleware')


route.use(checkCompanyId);

route.get('/' , (req , res)=> {
    res.status(200).send({message: "chat section working "});
});


route.get('/get' , getEmp );
route.get('/get/:id' , getByIdEmp );
route.post('/store' , storeEmp );
route.put('/update/:id' , updateEmp );
route.delete('/delete/:id' , deleteEmp );
route.post('/auth' , authEmp );





module.exports =  route ;