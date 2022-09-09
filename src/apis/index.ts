import axios, { AxiosRequestConfig } from 'axios';

const axiosConfig: AxiosRequestConfig = {
  baseURL: 'https://api-rest.elice.io/org/academy/course/list/',
}

const axiosInstance = axios.create(axiosConfig);
export default axiosInstance;
