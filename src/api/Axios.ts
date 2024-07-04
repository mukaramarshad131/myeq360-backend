import axios from "axios";

const Axios = axios.create({
    baseURL: import.meta.env.VITE_API_URL
});

Axios.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`
    return config;
});

Axios.interceptors.response.use((response) => response, (error) => {
    const { response } = error;
    if (response.status === 401) {
        localStorage.removeItem("token");
        window.location.href = '/login';
    }

    throw error;
});

export default Axios