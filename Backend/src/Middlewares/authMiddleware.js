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
        console.log(response)
        req.user = response;

        next();
    } catch (error) {
        res.json({
            success:false,
            message:"Unauthorised user"
        })
    }
}