import { useEffect, useState } from "react";
import { QueryClient, useQuery } from "react-query";
import { useLocation, useParams } from "react-router";
import getPostDetails from "../../Services/Singlepostdetails";
import GetCommentDetails from "../../Services/CommentDetails";
import CommentService from "../../Services/Commenrservice";
import { CgProfile } from "react-icons/cg";

function CommentSection({ image }) {
    const location = useLocation();
    const Image = location.state?.image;
    const { id } = useParams();
    const [newComment, setNewComment] = useState("");

    const { data: postData, isLoading, isError, refetch: PostRefetch } = useQuery(['Comment', id], () => getPostDetails(id));
    const { data: commentsData, isLoading: commentsLoading, isError: commentsError , refetch:CommentRefetch } = useQuery(
        ['CommentDetails', id],
        async () => {
            const commentPromises = postData?.data?.comments.map(commentId => GetCommentDetails(commentId));
            return Promise.all(commentPromises);
        },
        { enabled: !!postData?.data?.comments }
    );

    async function CommentHandler(e){
        e.preventDefault();
        const response = await CommentService(id , {
            "text":newComment
        });

        if(response){
            setNewComment("");
            await PostRefetch();
            await CommentRefetch(); 

        }
        console.log(response)
        console.log("Done");
    }

    return (
        <div className="h-screen w-full flex bg-black box-border">
            {/* Image Section */}
            <div className="h-full w-1/2 p-20">
                <img src={Image} alt="Post" className="w-full h-full object-cover rounded-xl" />
            </div>

            {/* Comment Section */}
            <div className="h-full w-1/2 border-l border-gray-800 text-white flex flex-col">
                {/* Comments List */}
                <div className="flex-1 p-6 overflow-y-auto">
                    {isLoading || commentsLoading ? (
                        <p className="text-center text-gray-500">Loading...</p>
                    ) : isError || commentsError ? (
                        <p className="text-center text-red-500">Error loading comments</p>
                    ) : (
                        commentsData?.map((comment, i) => (
                            <div key={i} className="flex items-start space-x-4 mb-4 p-4 border-b border-gray-700">
                                {/* Profile Image */}
                                <div className="h-8 w-8 rounded-full flex justify-center items-center">
                                    <CgProfile size={30} />
                                </div>

                                {/* Comment Content */}
                                <div>
                                    <div className="flex items-center space-x-2">
                                        <p className="text-sm font-semibold">{commentsData[i]?.data?.user?.username || "User"}</p>
                                        <span className="text-xs text-gray-400">• {comment?.data?.timestamp || "Just now"}</span>
                                    </div>
                                    <p className="text-sm mt-1 text-gray-300">{comment?.data?.text}</p>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Comment Input Box */}
                <div className="p-4 border-t border-gray-800 flex items-center space-x-4">
                    <input
                        type="text"
                        className="flex-1 p-2 rounded-md bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        placeholder="Add a comment..."
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                    />
                    <button className="text-blue-500 font-semibold hover:text-blue-400" onClick={CommentHandler}>
                        Post
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CommentSection;
