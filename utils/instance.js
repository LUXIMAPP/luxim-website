import axios from "axios";

// Axios Interceptor Instance
const instance = axios.create({
    baseURL: "https://rustic-lamp.pipeops-superb-twig.pipeops.co/api/v1/"
});

export default instance;
