import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer MQ.Khs2iveqInCPlnCLYYy0_uclmyQD5AzFwSZ3GodC5O6s2u9ZGx_zKV2YKXcY',
  },
});
