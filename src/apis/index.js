import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api-rest.elice.io/org/academy/course/list/',
});

export default axiosInstance;
