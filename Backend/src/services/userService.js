import { createuser } from "../repositories/userRepository.js";

export async function signupservice(userobject){
    try{
        const response = createuser(userobject);
        return response;
    }
    catch(e){
        throw e;
    }
}