import { Route, Routes } from "react-router-dom";
import Home from "../Components/Pages/Home";
import Explore from "../Components/Pages/Explorepage";
import Auth from "../Components/Login/Login";
import Signup from "../Components/Signup/Signup";

export function Routing(){
    return (
        <>
            <Routes>
                <Route path="/" element={<Auth/>}></Route>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/signup" element={<Signup/>}></Route>
                <Route path="/Explore" element={<Explore />}></Route>
                <Route path="/Notification" element={<Explore />}></Route>
                <Route path="/Messages" element={<Explore />}></Route>
                <Route path="/Communities" element={<Explore />}></Route>
                <Route path="/Profile" element={<Explore />}></Route>
            </Routes>
        </>
    )
}