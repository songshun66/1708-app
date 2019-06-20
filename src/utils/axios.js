import axios from 'axios';
// import { message } from 'antd'
import { Toast } from 'antd-mobile';

import qs from 'qs'
// 1. axios的默认配置
axios.defaults.baseURL = "http://152.136.126.144:8080"
axios.defaults.headers["Content-Type"] = "application/x-www-form-urlencoded";


// 2. 拦截器配置
axios.interceptors.request.use((config) => {
  if (config.method === "post"||config.method === "put"||config.method === "delete") {
    config.data = qs.stringify(config.data, { arrayFormat: 'repeat'});
  }
  return config;
})

axios.interceptors.response.use((response) => {
  let { data } = response;
  response.status = data.status;
  response.statusText = data.message;
  response.data = data.data;
  if(response.status!==200){
    Toast.fail(data.message)
    return Promise.resolve(response);
  }
  return response;
}, (error) => {
  Toast.fail("服务端异常")
  return Promise.reject(error);
})

export default axios;