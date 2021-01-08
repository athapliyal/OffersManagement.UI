import axios from './axios';

import { LoginModel } from '../models/LoginModel';

const login = async (credentials: LoginModel) => {   

    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
        },
        withCredentials: true
    };

    const res = await axios.post('/authorize/login', credentials, axiosConfig)

    return res;
}

export const loginService = {
    login
}