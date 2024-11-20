

function checkCompanyId (req , res, next){
      console.log('data pass through middleware ' , req.headers);
      if(req.headers.companyid){
         next()
      }else {
          console.log("company id not found ");
          res.status().send({error: 1 ,  message: "company id required" , data: []})
      }
}

module.exports = { checkCompanyId }