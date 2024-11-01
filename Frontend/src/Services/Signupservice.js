import AxiosInstance from "../helpers/Axiosinstance";

async function Signupservice(userobject){
    try {
        const response = await AxiosInstance.post('/user/signup' , userobject)
        return response.data;
    } catch (error) {
        console.log("Something went wrong");
        return null;
    }
}

export default Signupservice;