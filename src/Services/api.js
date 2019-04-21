import axios from 'axios';

const api = axios.create({
  baseUrl: 'https://opentdb.com',
});

export default api;
