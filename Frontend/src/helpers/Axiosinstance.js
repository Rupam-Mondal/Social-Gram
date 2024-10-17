import axios from 'axios'
import { baseurl } from './Contatns'

const AxiosInstance = axios.create({
    baseURL: baseurl,
});

export default AxiosInstance;