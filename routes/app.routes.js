const express  =  require('express');
const  route  =  express.Router() ;
const chatRoute  =  require('./chat.route');

route.use('/chat' , chatRoute);


route.get('/' , (req , res)=> {
      res.status(200).send({message : "welcome to port 3000 website"});   
});
route.get('/secret' , (req , res)=> {
    res.status(200).send({message : " i have a problem "});   
});




module.exports =   route ;