import { createPostOnDb, findAllPosts } from "../repositories/postRepository.js";


export async function createPostService(object){
    const caption = object.caption;
    const image = object.image;

    const post = await createPostOnDb(caption , image)

    return post;
}

export async function allpostservice(limit, offset){
    const allpost = await findAllPosts(limit , offset);
    return {allpost}
}