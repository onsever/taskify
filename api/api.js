import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { BASE_URI } from './uri';

export const api = axios.create({
  baseURL: BASE_URI
});

// api.interceptors.request.use(
//   async (config) => {
//     config.headers['requestsource'] = 'localhost';
//     if (!config.headers['source'])
//       config.headers['source'] = 'mobile';
//     config.headers['clientcode'] = '^9[h`P&]5+SB';
//     const token = await AsyncStorage.getItem(`@token`);;
//     if (token)
//       config.headers['Authorization'] = `Bearer ${token}`;
//     return config;
//   },
//   (err) => {
//     return Promise.reject();
//   }
// );
