import { getAllImage } from "../../Services/Allimagefetch";
import { useQuery } from "react-query";

function EveryImage(){

    const { data, error, isLoading } = useQuery(['images'] , () => getAllImage(10 , 0));

    return (
        <>
            <div className="h-full w-full flex flex-col items-center">
                {
                    data && data.data.allpost.map((v , i) => (
                        <div className="h-28 w-28"><img src={v.image} alt="" className="h-full w-full" /></div>
                    ))
                }
            </div>
        </>
    )
}

export default EveryImage;