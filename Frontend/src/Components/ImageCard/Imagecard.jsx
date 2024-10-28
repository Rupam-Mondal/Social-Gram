import { FiThumbsUp, FiMessageSquare } from 'react-icons/fi';

function Imagecard({ caption, Image, userId }) {
    return (
        <div className="w-full h-auto border border-gray-700 flex flex-col px-8 py-4 bg-black shadow-lg space-y-4">
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
                <button className="flex items-center text-gray-500 hover:text-gray-300 transition duration-200">
                    <FiMessageSquare className="mr-2 text-lg" />
                    Comment
                </button>
            </div>
        </div>
    );
}

export default Imagecard;

