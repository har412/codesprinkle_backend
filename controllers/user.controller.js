const { createUser, getAllUsers } = require("../services/user.service")
exports.createUser = async (req,res) =>{
   try {

       const user =  await createUser(req.body)
        res.status(201).send({
            detail:"User Created",
            data:user
        })
   } catch (error) {
        res.status(500).send({
            detail:"",
            data:error.message
        })
   }
}


exports.getAllUsers = async(req,res)=>{
    try {
        const user =  await getAllUsers(req.body)
        res.status(200).send({
            detail:"Users",
            data:user
        })
    } catch (error) {
        res.status(500).send({
            detail:"",
            data:error.message
        })
    }
}