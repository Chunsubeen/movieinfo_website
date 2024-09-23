import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

if (!API_KEY) {
    console.error("API Key is missing. Please add REACT_APP_API_KEY to your .env file.");
    throw new Error("API Key is missing");
}

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${API_KEY}`
    }
});

export default api;
