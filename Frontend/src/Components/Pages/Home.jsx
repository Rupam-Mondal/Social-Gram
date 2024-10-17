import Allposts from "../Allpost/Allposts";
import Leftbar from "../Leftbar/Leftbar";

function Home(){
    return (
        <>
            <div className='h-screen w-full flex '>
                <Leftbar />
                <Allposts/>
            </div>
        </>
    )
}

export default Home