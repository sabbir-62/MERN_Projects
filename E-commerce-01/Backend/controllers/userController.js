const userData = require('../models/userData')


//Write a getUser function ans send response with user Data
exports.getUser = ((req, res) => {
   try{
    res.status(200).send({
        userData
    })
   }
   catch(err){
    res.send(err)
   }
})