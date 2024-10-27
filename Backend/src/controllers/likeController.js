import { likePostService } from "../services/likePostService.js";

export async function likePostController(req , res){
    try {
        const userId = req.user.id;
        const postId = req.params.id;
        const response = await likePostService(userId , postId);
        return res.json({
            success:true,
            message:"Post liked successfully",
            data:response
        })
    } catch (error) {
        return res.json({
            success: false,
            message: "something went wrong",
        })
    }
}