import axios from 'axios';

const api = axios.create({
  baseURL: 'http://ec2-54-180-116-83.ap-northeast-2.compute.amazonaws.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
