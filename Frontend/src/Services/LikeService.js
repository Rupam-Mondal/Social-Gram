import AxiosInstance from "../helpers/Axiosinstance";

async function Likeservice(postId){
    try {
        const token = localStorage.getItem('token');
        const response = await AxiosInstance.post(`/post/comment/${ postId }` , {
            headers: {
                "x-access-token": token,
            }
        });
        console.log(response)
        return response.data
    } catch (error) {
        console.log("Something went wrong");
        return null;
    }
}

export default Likeservice;