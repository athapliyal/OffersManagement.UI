import axios from 'axios';

export const BASE_CCC_API_URL = process.env.REACT_APP_BASE_CCC_API_URL;

const axiosInstance = axios.create({
    baseURL: BASE_CCC_API_URL
});

// Response interceptor for API calls
axiosInstance.interceptors.response.use((response) => {
    // For demo purposes
    console.log('Response intercepted - use refresh token here for 401');
    return response;
}, error => {
    if (error?.response?.status === 401) {
        // Either log out the user here or use the refresh token to make another call and get a new token
        localStorage.removeItem("isAuthenticated");
    }

    // return Error object with Promise
    return Promise.reject(error);
});

export default axiosInstance;