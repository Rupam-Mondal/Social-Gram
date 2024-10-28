import { FaHome, FaSearch, FaBell, FaEnvelope, FaUsers, FaUser, FaEllipsisH } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useStore from "../../config/Zustandconfig";
function Leftbar() {
    const navigate = useNavigate()
    const { count, display, inc, visibility } = useStore();
    function Explore(){
        navigate('/Explore')
    }
    function Notification() {
        navigate('/Notifications')
    }
    return (
        <>
            <div className="w-1/4 h-full bg-black text-white flex flex-col gap-2 p-4">
                <div className="w-36 text-xl font-semibold cursor-pointer h-12 flex items-center gap-3 pl-4 hover:bg-gray-800 rounded-md transition-all duration-200">
                    <FaHome className="text-white" />
                    <div>Home</div>
                </div>
                <div onClick={Explore} className="w-36 h-12 text-xl font-semibold cursor-pointer flex items-center gap-3 pl-4 hover:bg-gray-800 rounded-md transition-all duration-200">
                    <FaSearch className="text-white" />
                    <div>Explore</div>
                </div>
                <div onClick={Notification} className="w-56 h-12 text-xl font-semibold cursor-pointer flex items-center gap-3 pl-4 hover:bg-gray-800 rounded-md transition-all duration-200">
                    <FaBell className="text-white" />
                    <div>Notifications</div>
                </div>
                <div onClick={Explore} className="w-48 h-12 text-xl font-semibold cursor-pointer flex items-center gap-3 pl-4 hover:bg-gray-800 rounded-md transition-all duration-200">
                    <FaEnvelope className="text-white" />
                    <div>Messages</div>
                </div>
                <div onClick={Explore} className="w-56 h-12 text-xl font-semibold cursor-pointer flex items-center gap-3 pl-4 hover:bg-gray-800 rounded-md transition-all duration-200">
                    <FaUsers className="text-white" />
                    <div>Communities</div>
                </div>
                <div onClick={Explore} className="w-36 h-12 text-xl font-semibold cursor-pointer flex items-center gap-3 pl-4 hover:bg-gray-800 rounded-md transition-all duration-200">
                    <FaUser className="text-white" />
                    <div>Profile</div>
                </div>
                <div onClick={Explore} className="w-36 h-12 text-xl font-semibold cursor-pointer flex items-center gap-3 pl-4 hover:bg-gray-800 rounded-md transition-all duration-200">
                    <FaEllipsisH className="text-white" />
                    <div>More</div>
                </div>

                <div className="w-full flex justify-center mt-10">
                    <div className="h-11 w-28 bg-blue-600 cursor-pointer rounded-xl flex justify-center items-center text-xl" onClick={() => {
                        console.log(display)
                        visibility();
                    }}>Post</div>
                </div>
            </div>
        </>
    )
}

export default Leftbar;
