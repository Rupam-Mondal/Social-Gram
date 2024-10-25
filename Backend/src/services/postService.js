import { createPostOnDb, deletePostById, findAllPosts, findPostById, updatepostbyid } from "../repositories/postRepository.js";


export async function createPostService(object){
    const caption = object.caption;
    const image = object.image;
    const userid = object.userid;

    const post = await createPostOnDb(caption , image , userid)

    return post;
}

export async function allpostservice(limit, offset){
    const allpost = await findAllPosts(limit , offset);
    return {allpost}
}

export async function deletepostservice(id , userid){
    try{
        const post = await findPostById(id);
        if(!post){
            throw {
                message : "Post does not exist"
            }
        }
        console.log(post)
        if (post.user != userid) {
            throw {
                message: "Unauthorised user"
            }
        }
        const response = await deletePostById(id);
        console.log(response);
        return response;
    }
    catch(e){
        throw e;
    }
}

export async function updatepostservice(id , object , userid){
    try{
        const post = await findPostById(id);
        if (!post) {
            throw{
                message : "Post is not there"
            }
        }
        if (post.user != userid) {
            return null;
        }
        const response = await updatepostbyid(id, object);
        return response;
    }
    catch(e){
        return null;
    }
}