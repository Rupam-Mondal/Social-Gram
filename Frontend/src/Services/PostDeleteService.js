import AxiosInstance from "../helpers/Axiosinstance";

async function PostDelete(postId){
    try {
        const token = localStorage.getItem("token");
        console.log(token)
        const response = await AxiosInstance.delete(`/post/${postId}`, {
            headers: {
                "x-access-token": token
            }
        })
        return response.data;
    } catch (error) {
        console.log("Something went wrong");
        return null;
    }
}

export default PostDelete;