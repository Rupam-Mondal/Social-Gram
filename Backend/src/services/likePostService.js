import { registerLikeOnDb } from "../repositories/likeRepository.js";
import { findPostById, updatepostbyid } from "../repositories/postRepository.js";

export async function likePostService(userId, postId){
    try{
        const post = postId;
        const user = userId;

        const response = await registerLikeOnDb({post , user})
        if(!response){
            throw null;
        }

        const data = await findPostById(postId);
        data.LikeProfileId = [...data.LikeProfileId , response._id];
        const update = await updatepostbyid(postId, data)
        return response;
    }
    catch(e){
        throw e;
    }
}