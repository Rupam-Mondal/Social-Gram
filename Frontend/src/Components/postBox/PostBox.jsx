import useStore from "../../config/Zustandconfig";

function PostBox() {
    const { count, display, inc, visibility } = useStore();

    return (
        <div
            className={`${display} fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center bg-gray-900 shadow-2xl rounded-xl p-8 max-w-lg mx-auto my-4 z-50 border border-gray-700`}
        >
            <form action="Post" className="w-full space-y-6">
                
                <h2 className="text-2xl font-semibold text-gray-100 text-center">Create a Post</h2>

                
                <input
                    type="text"
                    placeholder="Write a caption..."
                    className="w-full p-3 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-200 placeholder-gray-500"
                />

                
                <label className="block text-gray-400 font-medium">Upload an Image</label>
                <div className="relative w-full">
                    <input
                        type="file"
                        className="w-full p-3 bg-gray-800 text-gray-200 border border-gray-600 rounded-md cursor-pointer focus:outline-none file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700"
                    />
                </div>

                
                <button
                    type="submit"
                    className="w-full py-3 mt-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200"
                >
                    Post
                </button>
            </form>
        </div>
    );
}

export default PostBox;
