import axios from "axios";

const service = axios.create({
    timeout: 10000,
    headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
    },
    withCredentials: false,
});

// service.interceptors.request.use(config => {
//     // config.headers.token = 'token';
//     return config;
// });

// service.interceptors.response.use(response => {
//     const res = response.data;
//     if (res.code === 0) {
//         return res;
//     } /*else if(res.code === 10000 状态码) {  
//         // do something
//         return res;
//     }*/
// }, error => {
//     console.log(`响应错误，${error}`);
// });

export default service;