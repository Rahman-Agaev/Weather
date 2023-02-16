import axios from "axios";

const client = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/',
    params: {
        appid: '80723d00f8ab7b5837fb88aa8046ef8c',
        units: 'metric',
    }
})

export default client;