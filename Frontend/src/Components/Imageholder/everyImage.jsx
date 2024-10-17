import { getAllImage } from "../../Services/Allimagefetch";
import { useQuery } from "react-query";
import Imagecard from "../ImageCard/Imagecard";

function EveryImage(){

    const { data, error, isLoading } = useQuery(['images'] , () => getAllImage(10 , 0));

    return (
        <>
            
        </>
    )
}

export default EveryImage;