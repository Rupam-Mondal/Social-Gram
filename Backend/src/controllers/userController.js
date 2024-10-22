import { signinservice, signupservice } from "../services/userService.js";

export async function signup(req , res){
    try{
        const userobject = req.body;
        const response = await signupservice(userobject);

        return res.json({
            success:true,
            message:"Resgistration successfull",
            data: response
        })
    }
    catch(e){
        return res.json({
            message:"Soemthing went wrong"
        })
    }
}

export async function signin(req , res){
    try {
        const response = await signinservice(req.body);
        return res.json({
            success:true,
            message:"User signin successfully",
            data:response
        })
    } catch (error) {
        return res.json({
            message: "User Not found"
        })
    }
}