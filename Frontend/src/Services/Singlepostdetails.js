import AxiosInstance from "../helpers/Axiosinstance";

async function getPostDetails(postId){
    try {
        const token = localStorage.getItem('token');
        const response = await AxiosInstance.post(`/post/${postId}` , {} ,  {
            headers: {
                "x-access-token": token
            }
        });
        return response.data;
    } catch (error) {
        console.log("Something went wrong");
        return null;
    }
}

export default getPostDetails