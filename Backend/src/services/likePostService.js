import { findcommentById, updateCommentbyid } from "../repositories/commenrRepository.js";
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
        data.LikeProfileId = [...data.LikeProfileId , userId];
        const update = await updatepostbyid(postId, data)
        return response;
    }
    catch(e){
        throw e;
    }
}


export async function likeCommentService(userId, commentId) {
    try {
        const comment = commentId;
        const user = userId;

        const response = await registerLikeOnDb({ comment, user })
        console.log("I am here")
        console.log(response)
        if (!response) {
            throw null;
        }

        const data = await findcommentById(comment);
        console.log("I am here")
        data.likes = [...data.likes, userId];
        console.log(data)
        const update = await updateCommentbyid(commentId, data)
        console.log("I am here")
        return response;
    }
    catch (e) {
        throw e;
    }
}