import Comment from "../schema/comment.js";

export async function creatCommentOnDb(text , post , user){
    try{
        const comment = await Comment.create({text , post , user});
        return comment;
    }
    catch(e){
        throw {
            msg:"Something went wrong"
        }
    }
}

export async function nestedCommentOnDb(text, reply, user) {
    try {
        const comment = await Comment.create({ text, reply, user });
        return comment;
    }
    catch (e) {
        throw {
            msg: "Something went wrong"
        }
    }
}

export const findcommentById = async (id) => {
    try {
        const post = await Comment.findById(id).populate('user');
        return post;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function updateCommentbyid(id, object) {
    console.log(id, object)
    try {
        const post = await Comment.findByIdAndUpdate(id, object, { new: true });
        console.log(post)
        return post;
    }
    catch (e) {
        throw e;
    }
}