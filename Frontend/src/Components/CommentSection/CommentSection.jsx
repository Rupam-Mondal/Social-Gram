import { useLocation } from "react-router";

function CommentSection({image}){
    const location = useLocation();
    const Image = location.state?.image; 
    return (
        <>
            <div className="h-screen w-full flex bg-black box-border">
                {/* image section */}
                <div className="h-full w-1/2 p-20">
                    <img src={Image} alt="" className="w-full h-full object-cover rounded-xl" />
                </div>

                {/* comment section */}
                <div className="h-full w-1/2 border-l-2">

                </div>
            </div>
        </>
    )
}

export default CommentSection;