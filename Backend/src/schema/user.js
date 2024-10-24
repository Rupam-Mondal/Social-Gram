import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        minlenght:5
    },
    email:{
        type:String,
        required: true,
        unique: true,
        validate:{
            validator: function (emailValue) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailValue);
            },
            message: 'Invalid email format'
        }
    },
    password: {
        type: String,
        required: true,
        minLength: 5
    }
} , {timestamps:true});

userSchema.pre('save' , function modify(next){
    const user = this;

    const SALT = bcrypt.genSaltSync(9);

    const hashedpassword = bcrypt.hashSync(user.password , SALT);

    user.password = hashedpassword;

    next();
})



const User = mongoose.model("User" , userSchema);

export default User;