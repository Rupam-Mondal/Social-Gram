import mongoose from 'mongoose'

const postSchema = new mongoose.Schema({
    caption:{
        type:String,
        required:true,
        minlength:5
    },
    image:{
        type:String,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
    }],
    likes:{
        type: Number,
        default:0,
    }
});

const Post = mongoose.model("Post" , postSchema);


export default Post;