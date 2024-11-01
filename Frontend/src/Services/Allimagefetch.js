import AxiosInstance from "../helpers/Axiosinstance";

export async function getAllImage(limit , offset){
    try {
        const response = await AxiosInstance.get(`/post/?limit=${limit}&offset=${offset}`)
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
}