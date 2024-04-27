const {User , Roles} = require('../models')
const {Op} = require('sequelize')
const bcrypt = require('bcrypt')


exports.createUser = async(data) =>{
    const checkUser = await User.findOne({
        where:{
            [Op.or] :{username:data.username , email:data.email}
        }
    })
    if(!checkUser){
        
        data.password = await bcrypt.hash(data.password , 10)
        const user = await User.create(data)
        return user
    }else{
        throw Error('User Already Exist')
    }
}

exports.getAllUsers = async() =>{
    const user = await User.findAll({
        include:{
            model:Roles
        }
    })
    return user
}