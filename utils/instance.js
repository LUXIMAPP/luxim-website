import axios from "axios";

// Axios Interceptor Instance
const instance = axios.create({
    baseURL: "https://api.luximapp.com/api/v1/"
});

export default instance;
