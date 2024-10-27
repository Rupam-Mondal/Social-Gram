import { createCommentService, nestedCommentService } from "../services/commentService.js";

export async function createComment(req , res){

    try {
        const postId = req.params.postId;
        const userId = req.user.id;
        const text = req.body.text;
        const response = await createCommentService({text , postId , userId});
        return res.json({
            success:true,
            message:"Comment added succesfully",
            data: response
        })
    } catch (error) {
        return null;
    }
}

export async function createNestedComment(req , res){
    try{
        const commentId = req.params.commentId;
        const userId = req.user.id;
        const text = req.body.text;
        const response = await nestedCommentService({ text, commentId, userId });
        return res.json({
            success: true,
            message: "Comment added succesfully",
            data: response
        })
    }
    catch(e){
        return res.json({
            success: false,
            message: "Something went wrong",
        })
    }
}