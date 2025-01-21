import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer MQ.1p0b7dlilj_FfpUIx7ISrfpB7166M9yVNzQDgpl4XG_jQCi3L8kN9v-nho2m',
  },
});
