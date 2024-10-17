import { getAllImage } from "../../Services/Allimagefetch";
import { useQuery } from "react-query";

function Allposts(){

    const { data, error, isLoading } = useQuery(['images'] , () => getAllImage(10 , 0));

    return (
        <>
            <div className="h-full w-2/4 bg-black border-l-[1px] border-white"></div>
        </>
    )
}

export default Allposts;