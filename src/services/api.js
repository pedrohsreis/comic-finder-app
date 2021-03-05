import axios from 'axios';
import md5 from 'md5';

const PUBLIC_KEY = "362de6dd695a538c18fcfb8bc2b1243d";
const PRIVATE_KEY = "e360fc6f8383bf827479516ef9187b86b51787fd";
const timestamp = new Date().getTime();




const api = axios.create({
    baseURL: "https://gateway.marvel.com/",
    params: {
        "apikey": "362de6dd695a538c18fcfb8bc2b1243d",
        "ts": timestamp,
        "hash": md5(timestamp + PRIVATE_KEY + PUBLIC_KEY)
    }
})

export default api;