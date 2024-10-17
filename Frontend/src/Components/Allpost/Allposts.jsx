import { getAllImage } from "../../Services/Allimagefetch";
import { useQuery } from "react-query";
import MiniPostCreationSection from "../miniPostCreation/miniPostCreation";

function Allposts(){

    const { data, error, isLoading } = useQuery(['images'] , () => getAllImage(10 , 0));

    return (
        <>
            <div className="h-full w-2/4 bg-black border-l-[1px] border-white flex flex-col">
                {/* post section */}
                <MiniPostCreationSection/>
            </div>
        </>
    )
}

export default Allposts;