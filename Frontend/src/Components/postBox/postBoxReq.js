import { useState } from "react";
import AxiosInstance from "../../helpers/Axiosinstance";
import useStore from "../../config/Zustandconfig";

async function PostBoxReq(e , captionPost , imagePost){
    e.preventDefault();
    const formData = new FormData();

    formData.append("caption" , captionPost);
    formData.append("image" , imagePost);
    try {
        const response = await AxiosInstance.post('/post' , formData , {
            headers:{
                "x-access-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJ1cGFtbW9uZGFhYWFsNjY0NGVlZTU2NjQ1NWZncnp6emN2Z2Z2Z3N0aGdAZ21haWwuY29tIiwidXNlcm5hbWUiOiJydXBhbTEyMzR0dHR0eWRmZWVlYXNycnJyenp6IiwiaWQiOiI2NzFlMTY3Yjg0MjQ4ZDBmNjVhZGQ3N2YiLCJpYXQiOjE3MzAyNTg2MDUsImV4cCI6MTczMDM0NTAwNX0.LymyiGBSGCclrxlSWkIdsJH0sBlt_NNDvn7NquQCQmg"
            }
        })
        console.log(response.data);
    } catch (error) {
        console.log("Something went wrong");
    }
}

export default PostBoxReq;