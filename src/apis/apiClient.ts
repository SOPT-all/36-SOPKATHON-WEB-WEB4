import axios from 'axios';

const api = axios.create({
  baseURL: 'https://54.180.116.83.nip.io',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
