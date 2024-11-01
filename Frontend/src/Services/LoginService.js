import AxiosInstance from "../helpers/Axiosinstance";

async function Loginservice(userLoginObject){
    try {
        const response = await AxiosInstance.post('/user/signin' , userLoginObject);
        return response.data;
    } catch (error) {
        console.log("Something went wrong");
        return null;
    }
}

export default Loginservice