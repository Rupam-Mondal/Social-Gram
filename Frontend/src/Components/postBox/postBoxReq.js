import { useState } from "react";
import AxiosInstance from "../../helpers/Axiosinstance";
import useStore from "../../config/Zustandconfig";

async function PostBoxReq(e , captionPost , imagePost){
    e.preventDefault();
    const formData = new FormData();
    const token = localStorage.getItem("token");
    formData.append("caption" , captionPost);
    formData.append("image" , imagePost);
    try {
        const response = await AxiosInstance.post('/post' , formData , {
            headers:{
                "x-access-token": token
            }
        })
        console.log(response.data);
    } catch (error) {
        console.log("Something went wrong");
    }
}

export default PostBoxReq;