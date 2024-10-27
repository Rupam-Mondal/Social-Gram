import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
    text:{
        type : String,
        required:true
    },
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Post",
        required: true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required: true
    },
    reply:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Comments"
        }
    ]
})

const Comment = mongoose.model("Comments" , CommentSchema);

export default Comment;