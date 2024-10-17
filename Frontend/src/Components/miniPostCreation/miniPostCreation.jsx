import { FaImage, FaSmile, FaListUl, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

function MiniPostCreationSection() {
    return (
        <div className="bg-black p-4 w-full text-gray-400 border-b-[1px] border-white">
            <textarea
                placeholder="What is happening?!"
                className="w-full bg-transparent outline-none resize-none text-lg placeholder-gray-500 text-white"
                rows="2"
            />
            <div className="flex justify-between items-center mt-2">
                <div className="flex space-x-4 text-blue-500 text-lg">
                    <FaImage className="cursor-pointer" />
                    {/* <FaGif className="cursor-pointer" /> */}
                    <FaListUl className="cursor-pointer" />
                    <FaSmile className="cursor-pointer" />
                    <FaClock className="cursor-pointer" />
                    <FaMapMarkerAlt className="cursor-pointer" />
                </div>
                <button className="bg-blue-600 text-white rounded-full px-4 py-1 text-sm hover:bg-blue-700">
                    Post
                </button>
            </div>
        </div>
    );
}

export default MiniPostCreationSection;
