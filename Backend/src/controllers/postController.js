import { allpostservice, createPostService, deletepostservice, updatepostservice } from "../services/postService.js";

export async function createPost(req , res){
    const userDetails = req.user;
    console.log(userDetails)

    console.log(req.body)
    const post = await createPostService({
        caption: req.body.caption,
        image: req.file.path,
        userid: userDetails.id
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

export async function deletepost(req , res){
    try{
        const postId = req.params.id;

        const responsecontroller = await deletepostservice(postId, req.user.id);

        if (!responsecontroller) {
            return res.status(404).json({
                success: false,
                message: "No post is there",
            })
        }

        return res.status(200).json({
            success: true,
            message: "Posts deleted successfully",
            data: responsecontroller
        })
    }
    catch(e){
        return res.status(404).json({
            success: false,
            message: "No post is there",
        })
    }
}

export async function updatepost(req , res){
    const postid = req.params.id;
    const updatedobject = req.body;
    if(req.file){
        updatedobject.image = req.file.path;
    }
    console.log(updatedobject);
    const response = await updatepostservice(postid , updatedobject);
    if(!response){
        return res.status(404).json({
            success: false,
            message: "Some error occurred",
            data: response
        })
    }
    return res.status(200).json({
        success:true,
        message:"Post updated succesfully",
        data:response
    })
}