import axios from 'axios';
import { BACKEND_API } from './constants';

export const axiosInstance = axios.create({
    baseURL: BACKEND_API,
    timeout: 4000,
})