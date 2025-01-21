import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer NQ.-MB9kIoSDlsUw57bbmuLoNqa_gcu0HvTP3rLFt2d2_uoutBqePSbbllPIf7v',
  },
});
