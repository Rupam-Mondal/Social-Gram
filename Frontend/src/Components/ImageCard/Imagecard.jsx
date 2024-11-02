import { FiThumbsUp, FiMessageSquare, FiEdit, FiTrash } from 'react-icons/fi';
import PostDelete from '../../Services/PostDeleteService';
import { useNavigate } from 'react-router';

function Imagecard({ caption, Image, userId , postId }) {
    const navigate = useNavigate();
    function CommentSectionHandler(){
        navigate(`/${postId}/comment` , {state:{image:Image}});
    }
    async function deleteHandler(e){
        const response = await PostDelete(postId);
        console.log(response)
    }
    return (
        <div className="relative w-full h-auto border border-gray-700 flex flex-col px-8 py-4 bg-black shadow-lg space-y-4">
            {/* Update and Delete Icons */}
            <div className="absolute top-4 right-4 flex space-x-4">
                <button className="text-gray-500 hover:text-gray-300 transition duration-200">
                    <FiEdit className="text-lg" title="Update" />
                </button>
                <button className="text-gray-500 hover:text-gray-300 transition duration-200" onClick={deleteHandler}>
                    <FiTrash className="text-lg" title="Delete" />
                </button>
            </div>

            {/* User ID Section */}
            <div className="text-gray-500 text-sm font-medium mb-2">User ID: {userId}</div>

            {/* Caption */}
            <div className="text-white text-lg font-semibold">{caption}</div>

            {/* Image */}
            <div className="w-full h-auto overflow-hidden mb-4">
                <img src={Image} alt={caption} className="w-full h-full object-cover" />
            </div>

            {/* Like and Comment Buttons */}
            <div className="flex justify-between items-center mt-4">
                <button className="flex items-center text-gray-500 hover:text-gray-300 transition duration-200">
                    <FiThumbsUp className="mr-2 text-lg" />
                    Like
                </button>
                <button className="flex items-center text-gray-500 hover:text-gray-300 transition duration-200"
                    onClick={CommentSectionHandler}
                >
                    <FiMessageSquare className="mr-2 text-lg" />
                    Comment
                </button>
            </div>
        </div>
    );
}

export default Imagecard;
