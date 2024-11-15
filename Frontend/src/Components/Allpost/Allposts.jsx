import { getAllImage } from "../../Services/Allimagefetch";
import { useQuery } from "react-query";
import MiniPostCreationSection from "../miniPostCreation/miniPostCreation";
import Imagecard from "../ImageCard/Imagecard";
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useState } from "react";
import useStore from "../../config/Zustandconfig";
import PostBox from "../postBox/PostBox";

function Allposts() {
    const [dataarray, setDataarray] = useState([]);
    const { count, display, offset, postnumber, incoffset, visibility, offsetzero } = useStore();

    const { data, error, isLoading , refetch } = useQuery(['images', offset], () => getAllImage(postnumber, offset), {
        keepPreviousData: true,
    });

    useEffect(() => {
        if(offset == 0){
            setDataarray([])
        }
        if (data) {
            setDataarray((prev) => [...prev, ...data.data.allpost]);
        }
    }, [data]);

    function fetchmoredata() {
        incoffset();
    }

    return (
        <>
            <div id="scrollableDiv" className="h-full w-2/4 border-l-[1px] border-white overflow-y-auto">
                <PostBox refetch={refetch} />
                <InfiniteScroll
                    dataLength={dataarray.length}
                    hasMore={true}
                    loader={<h4>Loading...</h4>}
                    next={fetchmoredata}
                    scrollableTarget="scrollableDiv" // Bind to this specific div
                >
                    {
                        dataarray && dataarray.map((v, i) => (
                            <Imagecard
                                key={i}
                                caption={v.caption}
                                Image={v.image}
                                userId = {v.user.username}
                                postId={v._id}
                                refetch={refetch}
                            />
                        ))
                    }
                </InfiniteScroll>
            </div>
        </>
    );
}


export default Allposts;
