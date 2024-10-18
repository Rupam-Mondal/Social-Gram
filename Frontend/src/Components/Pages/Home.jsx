import Allposts from "../Allpost/Allposts";
import Leftbar from "../Leftbar/Leftbar";
import Rightbar from "../Rightbar/rightbar";

function Home(){
    return (
        <>
            <div className='h-screen w-full flex '>
                <Leftbar />
                <Allposts/>
                <Rightbar/>
            </div>
        </>
    )
}

export default Home