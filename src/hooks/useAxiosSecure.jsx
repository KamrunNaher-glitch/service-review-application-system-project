import axios from 'axios';
import React from 'react';
const axiosInstance = axios.create({
    baseURL: 'https://service-review-application-system-project-server.vercel.app',
    withCredentials: true
});


const useAxiosSecure = () => {
    return axiosInstance;
};

export default useAxiosSecure;