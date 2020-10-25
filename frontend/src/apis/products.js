import axios from 'axios';
import { API_BASE_URL, ACCESS_TOKEN } from '../constants';

const instance = axios.create({
    baseURL: API_BASE_URL
});

instance.interceptors.request.use(function (config) {
    const token = localStorage.getItem(ACCESS_TOKEN);
    config.headers.Authorization =  'Bearer ' + token;

    return config;
});

export default instance;