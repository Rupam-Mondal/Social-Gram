import AxiosInstance from "../helpers/Axiosinstance";

async function CommentService(Id , commentObject){
    try {
        const token = localStorage.getItem('token');
        const response = await AxiosInstance.post(`/post/comment/${Id}` , commentObject , {
            headers:{
                "x-access-token":token,
            }
        });
        return response.data;
    } catch (error) {
        console.log("Axios error");
        return null;
    }
}

export default CommentService;