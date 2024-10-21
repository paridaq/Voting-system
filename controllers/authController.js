import userModel from '../models/userModel.js'

export const registerController = async(req,res)=>{
    const {name,email,password} = req.body
    try {
        if(!name){
            return res.send({
                messege:"name is required"

            })
        }
            if(!email){
                return res.send({
                    messege:"Email is required"
                })
            }
            if(!password){
                return res.send({
                    messege:"Password is required"
                })
            }

            const existingUser = await userM
        
        
    } catch (error) {
        
    }
}