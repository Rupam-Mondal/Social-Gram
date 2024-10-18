import { getAllImage } from "../../Services/Allimagefetch";
import { useQuery } from "react-query";
import MiniPostCreationSection from "../miniPostCreation/miniPostCreation";
import Imagecard from "../ImageCard/Imagecard";

function Allposts(){

    const { data, error, isLoading } = useQuery(['images'] , () => getAllImage(5 , 0));

    return (
        <>
            <div className="h-full w-2/4 bg-black border-l-[1px] border-white overflow-y-auto">
                {/* post section */}
                <MiniPostCreationSection/>
                {
                    data && data.data.allpost.map((v , i) => (
                        <Imagecard
                            key={i}
                            caption={v.caption}
                            Image={v.image}
                        />
                    ))
                }
            </div>
        </>
    )
}

export default Allposts;