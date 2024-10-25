import { createPostOnDb, deletePostById, findAllPosts, updatepostbyid } from "../repositories/postRepository.js";


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

export async function deletepostservice(id){
    const response = await deletePostById(id);
    console.log(response);
    return response;
}

export async function updatepostservice(id , object){
    const response = await updatepostbyid(id , object);
    return response;
}