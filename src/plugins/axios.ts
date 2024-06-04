import { getToken, removeToken } from "@/token";
import axios from "axios";

export const api = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_URL,
})

api.interceptors.request.use((config) => {
    const token = getToken()
    if (token) {
        config.headers["x-access-token"] = token
    }
    return config
}, (error) => {
    return Promise.reject(error)
})

api.interceptors.response.use((response) => response, (error) => {
    if(error.response) {
        if (error.response.status === 401) {
            removeToken()
            window.location.href = "/login"
        }
    }
    
    return Promise.reject(error);
})