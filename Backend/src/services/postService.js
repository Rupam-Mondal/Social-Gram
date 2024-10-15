import { createPostOnDb } from "../repositories/postRepository.js";


export async function createPostService(object){
    const caption = object.caption;
    const image = object.image;

    const post = await createPostOnDb(caption , image)

    return post;
}