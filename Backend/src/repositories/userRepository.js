import User from "../schema/user.js";

export async function findUserByEmail(email){
    try {
        console.log(email);
        const user = await User.findOne({email});
        console.log(user);
        return user;
    } catch (error) {
        console.log("Something went wrong");
    }
}

export async function findAllUser(){
    try {
        const users = User.find();
        return users;
    } catch (error) {
        console.log("Something went wrong");
    }
}

export async function createuser(userobject){
    try{
        const response = User.create(userobject);
        return response;
    }
    catch(e){
        throw {
            message:"Something went wrong"
        }
    }
}