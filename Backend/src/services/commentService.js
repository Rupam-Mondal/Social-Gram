import { creatCommentOnDb } from "../repositories/commenrRepository.js";

export async function createCommentService(commentObject){
    try{
        const text = commentObject.text;
        const postId = commentObject.postId;
        const userId = commentObject.userId;
        const response = creatCommentOnDb(text , postId , userId);
        return response
    }
    catch(e){
        throw{
            message:"Something went wrong"
        }
    }
}