import { findUserByEmail } from "../repositories/userRepository.js";
import { verifyJwtToken } from "../utils/jwt.js";

export function isAuthenticate(req , res , next){
    const Token = req.headers["x-access-token"];

    if(!Token){
        return res.json({
            success:false,
            message:"Token is required"
        })
    }
    try {
        const response = verifyJwtToken(Token);
        const userfetched = findUserByEmail(response.email);
        if(!userfetched){
            return res.json({
                success:false,
                message:"User is not there"
            })
        }
        req.user = response;
        next();
    } catch (error) {
        res.json({
            success:false,
            message:"Unauthorised user"
        })
    }
}