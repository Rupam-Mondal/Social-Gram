import { createCommentService } from "../services/commentService.js";

export async function createComment(req , res){

    try {
        const postId = req.params.postId;
        const userId = req.params.userId;
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