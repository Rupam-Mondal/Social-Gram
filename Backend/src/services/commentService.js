import { creatCommentOnDb, findcommentById, updateCommentbyid } from "../repositories/commenrRepository.js";
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

export async function nestedCommentService(commentObject){
    try {
        const text = commentObject.text;
        const replyId = commentObject.commentId;
        const userId = commentObject.userId;
        const response = await creatCommentOnDb(text, replyId, userId);
        console.log(response)
        if (!response) {
            throw null;
        }
        console.log("IO am here")
        const commentResponse = await findcommentById(replyId);
        console.log("IO am here")
        const commentPostSection = {
            reply: [...commentResponse.reply, response._id]
        }
        console.log(commentPostSection)
        const data = await updateCommentbyid(replyId, commentPostSection);
        return response;
    }
    catch (e) {
        throw {
            message: "Something went wrong"
        }
    }
}