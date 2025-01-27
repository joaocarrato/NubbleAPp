import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer MQ.HtYQnw4fgbzgQM9-a3Rct_zUFwmewPBGowwedutNdfBq57tODHwy_WMD3BJv',
  },
});
