import { useQuery } from "react-query";
import { useLocation, useParams } from "react-router";
import getPostDetails from "../../Services/Singlepostdetails";

function CommentSection({image}){
    const location = useLocation();
    const Image = location.state?.image; 
    const { id } = useParams();
    const { data, isLoading, isError } = useQuery(['Comment'], () => getPostDetails(id))
    return (
        <>
            <div className="h-screen w-full flex bg-black box-border">
                {/* image section */}
                <div className="h-full w-1/2 p-20">
                    <img src={Image} alt="" className="w-full h-full object-cover rounded-xl" />
                </div>

                {/* comment section */}
                <div className="h-full w-1/2 border-l-2 text-white" onClick={() => {
                    console.log(data?.data);
                }}>
                    {
                        data?.data?.comments && data.data.comments.map((v , i) => (
                            <div key={i}>{v}</div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default CommentSection;