import User from "../schema/user";

export async function findUserByEmail(email){
    try {
        const user = User.findOne({email});
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