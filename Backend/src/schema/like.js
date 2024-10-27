import mongoose from 'mongoose'

const LikesSchema = new mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post"
    },
    comment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comments"
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }

} , {timestamps:true});

const Likes = mongoose.model("Likes" , LikesSchema);
export default Likes;