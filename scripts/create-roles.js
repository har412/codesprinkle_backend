const {Roles} = require('../models')
const defaultRoles = require('../config/defaultRoles.json')


const addRoles = async() =>{
    try {
    
        for(const role of defaultRoles){
         const checkRole = await Roles.findOne({
             where:{
                 name:role.name
             }
         })
         if(checkRole){
             console.log("This role is already there", role.name)
         }
         else{
              await Roles.create(role)
             console.log('Role added' , role.name)
         }
        }
     
        console.log("Alll roles are added")
     
     } catch (error) {
         console.log("Error in adding roles " , error.message)
     }
}

addRoles()