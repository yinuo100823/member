import axios from 'axios'
const BASE_URL='http://mengxuegu.com:7300/mock/5f6d51558d90085e5b584c9e/'
const request = axios.create(
    {
        baseURL: BASE_URL,
        timeout: 5000//请求超时时间5000毫秒
    }
);

request.interceptors.request.use(config => {
    // 请求拦截
    return config
}, error => {
    // 出现异常
    return Promise.reject(error);
});

request.interceptors.response.use(resp => {
    // 相应拦截
    return resp
}, error => {
    // 出现异常
    return Promise.reject(error);
});
export default request;