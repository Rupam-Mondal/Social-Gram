import { createuser, findUserByEmail } from "../repositories/userRepository.js";
import bcrypt from 'bcrypt'
import { createToken } from "../utils/jwt.js";

export async function signupservice(userobject){
    try{
        const response = createuser(userobject);
        return response;
    }
    catch(e){
        throw e;
    }
}

export async function signinservice(userobject){
    try{
        const user = await findUserByEmail(userobject.email);
        if(!user){
            throw {
                message:"User not found"
            }
        }

        const isPasswordValid = bcrypt.compareSync(userobject.password , user.password);
        if(!isPasswordValid){
            throw {
                message: "Invalid password"
            }
        }

        const Token = createToken({email:user.email , username:user.username , id:user._id});

        return Token;

    }
    catch(e){
        throw e;
    }
}