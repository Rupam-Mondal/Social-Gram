import { useEffect } from "react";
import Allposts from "../Allpost/Allposts";
import Leftbar from "../Leftbar/Leftbar";
import PostBox from "../postBox/PostBox";
import Rightbar from "../Rightbar/rightbar";

function Home(){
    return (
        <>
            <div className='h-screen w-full flex '>
                <Leftbar />
                <Allposts/>
                <Rightbar/>
                <PostBox/>
            </div>
        </>
    )
}

export default Home