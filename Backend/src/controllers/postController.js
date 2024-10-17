import { allpostservice, createPostService } from "../services/postService.js";

export async function createPost(req , res){

    const post = await createPostService({
        caption: req.body.caption,
        image: req.file.path 
    })

    return res.status(201).json({
        success: true,
        message: "Post created successfully",
        data: post
    })
}

export async function getAllpost(req , res){
    const limit = req.query.limit || 10;
    const offset = req.query.offset || 0;

    const paginatedpost = await allpostservice(limit , offset);

    return res.status(200).json({
        success: true,
        message: "Posts fetched successfully",
        data: paginatedpost
    })
}