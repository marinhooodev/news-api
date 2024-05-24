import axios from "axios";

export const api = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_URL,
    headers: {
        'x-access-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Impvc2VndWlsaGVybWVzb3Jpb0BnbWFpbC5jb20iLCJpYXQiOjE3MTY0MjEyOTMsImV4cCI6MTcxNjUwNzY5M30.D44uBUb3Oc30pZgO0EKJg1MiQPy4UMegAylrRssicwU"
    }
})