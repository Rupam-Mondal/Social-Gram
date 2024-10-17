import Post from "../schema/post.js";


export async function createPostOnDb(caption , image , user){
    try {
        const newPost = await Post.create({caption , image , user});
        return newPost;


    } catch (error) {
        console.log("Something went wrong");
    }
}

export const findAllPosts = async (limit , offset) => {
    try {
        const posts = await Post.find().skip(offset).limit(limit);
        return posts;
    } catch (error) {
        console.log(error);
    }
}

export const findPostById = async (id) => {
    try {
        const post = await Post.findById(id);
        return post;
    } catch (error) {
        console.log(error);
    }
}

export const deletePostById = async (id) => {
    try {
        const post = await Post.findByIdAndDelete(id);
        return post;
    } catch (error) {
        console.log(error);
    }
}

export async function updatepostbyid(id, object){
    console.log(id, object)
    const post = await Post.findByIdAndUpdate(id , object , {new:true});
    console.log(post)
    return post;
}