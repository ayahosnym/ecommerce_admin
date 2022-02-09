import axios from 'axios';

export const AxiosInstance = axios.create({
    baseURL:"https://products-tohw.herokuapp.com/",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
    
});

