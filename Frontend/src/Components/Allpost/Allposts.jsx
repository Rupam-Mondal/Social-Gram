import { getAllImage } from "../../Services/Allimagefetch";
import { useQuery } from "react-query";
import MiniPostCreationSection from "../miniPostCreation/miniPostCreation";
import Imagecard from "../ImageCard/Imagecard";
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useState } from "react";

function Allposts() {
    const [offset, setOffset] = useState(0);
    const [dataarray, setDataarray] = useState([]);
    const [postnumber, setPostnumber] = useState(5);

    const { data, error, isLoading } = useQuery(['images', offset], () => getAllImage(postnumber, offset), {
        keepPreviousData: true,
    });

    useEffect(() => {
        if (data) {
            setDataarray((prev) => [...prev, ...data.data.allpost]);
        }
    }, [data]);

    function fetchmoredata() {
        setOffset(offset + postnumber);
    }

    return (
        <>
            <div id="scrollableDiv" className="h-full w-2/4 border-l-[1px] border-white overflow-y-auto">
                <InfiniteScroll
                    dataLength={dataarray.length}
                    hasMore={true}
                    loader={<h4>Loading...</h4>}
                    next={fetchmoredata}
                    scrollableTarget="scrollableDiv" // Bind to this specific div
                >
                    <MiniPostCreationSection />
                    {
                        dataarray && dataarray.map((v, i) => (
                            <Imagecard
                                key={i}
                                caption={v.caption}
                                Image={v.image}
                            />
                        ))
                    }
                </InfiniteScroll>
            </div>
        </>
    );
}


export default Allposts;
