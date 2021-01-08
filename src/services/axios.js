import axios from 'axios';

export const BASE_CCC_API_URL = "http://localhost:5000/api";

const axiosInstance = axios.create({
    baseURL: BASE_CCC_API_URL
});


export default axiosInstance;