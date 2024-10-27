import Likes from "../schema/like.js";

export async function registerLikeOnDb(likeObject){
    try{
        const response = await Likes.create(likeObject)
        return response;
    }
    catch(e){
        throw e;
    }
}