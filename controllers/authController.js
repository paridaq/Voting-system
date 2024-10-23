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

            const existingUser = await userModel.findOne({email})
            if(existingUser){
                return res.status(200).send({
                    messege:'User already exist ',
                    success:false

                })
            }
            const user = await new userModel({name,email,password}).save();
                 return res.status(201).send({
                    message:"User Created successfully",
                    success:true,
                    user
                 })
        
        
    } catch (error) {
        console.log(error)
        res.status(500).send({
            message:'Error creating user',
            success:false,
            error
        })
        
    }
}

export const loginController =async(req,res)=>{
    const {email,password} = req.body
    try {
        if(!email || !password){
            return res.send({
                message:'Not able to login'
            })
        }
        const user = await userModel.findOne({email})
        if(!user){
            return res.send({
                message:'register before login',
                success:false
            })
        }
        if(user.password !== password){
            return res.send({
                message:'password does jnot matches'
            })
        }
        return res.status(201).send({
            success:true,
            message:'login successfully',
            user
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,

            message:'error while login'
        })
        
    }
}

export const getUserDetails = async(req,res)=>{
    const{email} = req.params;
    try {
        const user = await userModel.findOne({email})
        if(!user){
            return res.send({
                message:'error in getting userdetails'

            })
        }
        res.status(200).send({
            success:true,
            message:"succesfully getbuserdetails",
            user
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'error in getting details',
            error
        })
        
    }
}

export const updateUserDetails = async(req,res)=>{
    const {email,newname} = req.body;
    try {
        if(!email){
            res.send({
                message:'email required to getting details'
            })
        }
        const updatedUser = await userModel.findOneAndUpdate({email},{name:newname},{new:true})
        if(updatedUser){
            return res.status(200).send({
                success:true,
                message:'succesfully updated user details',
                user:{
                    name:updatedUser.name,
                    email:updatedUser.email
                }
            })
        }else{
            return res.send({
                message:'unable to update the user',
                success:false
            })
        }

    } catch (error) {
        console.log(error)
        res.status(500).send({
            message:'server error',
            error
        })
        
    }
}