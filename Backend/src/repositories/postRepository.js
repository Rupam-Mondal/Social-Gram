import Post from "../schema/post";


export async function createPost(caption , img , user){
    try {
        const newPost = Post.create({caption , img , user});
        return newPost;


    } catch (error) {
        console.log("Something went wrong");
    }
}

export const findAllPosts = async () => {
    try {
        const posts = await Post.find();
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