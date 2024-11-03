import AxiosInstance from "../helpers/Axiosinstance";

async function GetCommentDetails(commentID){
    try {
        const token = localStorage.getItem('token')
        const response = await AxiosInstance.post(`/post/comment/commentdetails/${commentID}` , {
            Headers:{
                "x-access-token": token
            }
        })
        return response.data;
    } catch (error) {
        console.log("Something went wrong");
        return null;
    }
}

export default GetCommentDetails;