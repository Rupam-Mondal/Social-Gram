import Comment from "../schema/comment.js";

export async function creatCommentOnDb(text , post , user){
    try{
        const comment = await Comment.create({text , post , user});
        return comment;
    }
    catch(e){
        throw {
            msg:"Something went wrong"
        }
    }
}