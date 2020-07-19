// Redux를 사용하지 않는 Request 전용 API
import axios from 'axios';
// import {errorLog, onAuthError} from 'commons/lib/ErrorHandler';
// import {setTokenToConfig} from 'commons/util/AuthUtil';

const ENDPOINT = 'http://3.34.190.9';
const request = axios.create({
  baseURL: ENDPOINT,
});

// 인터셉터가 필요할 경우 추가
// service.interceptors.request.use(
//   (config) => setTokenToConfig(config),
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// service.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     errorLog(error);
//     return onAuthError(error);
//   }
// );

export default request;
