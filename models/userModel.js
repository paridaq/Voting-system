import mongoose from "mongoose";
const{Schema} = mongoose;
const userSchema = new Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    }
},{timestamps:true})

export default mongoose.model('Users',userSchema)