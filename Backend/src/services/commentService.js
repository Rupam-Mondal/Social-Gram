import { creatCommentOnDb } from "../repositories/commenrRepository.js";
import { findPostById, updatepostbyid } from "../repositories/postRepository.js";

export async function createCommentService(commentObject){
    try{
        const text = commentObject.text;
        const postId = commentObject.postId;
        const userId = commentObject.userId;
        const response = await creatCommentOnDb(text , postId , userId);
        if(!response){
            throw null;
        }
        const postResponse = await findPostById(postId);
        const commentPostSection = {
            comments: [...postResponse.comments , response._id]
        }
        const data = await updatepostbyid(postId, commentPostSection);
        return response;
    }
    catch(e){
        throw{
            message:"Something went wrong"
        }
    }
}