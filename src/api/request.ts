import { RequestOptions } from '@/interfaces/request-options';
import service from "./interceptor";

function request(method: string, url: string, params: object = {}, options: RequestOptions = { loading: false, }) {
    if (options.loading) {
        // loading view
    }
    return new Promise((resolve, reject) => {
        let data = {};
        if (method === 'get') {
            data = { params };
        } else if (method === 'post') {
            data = { data: params };
        } else if (method === 'somemethod') {
            // data = something(data)
        }

        service({
            method,
            url,
            ...data
        })
            .then(res => {
                if (res.status === 200) {
                    resolve(res.data);
                } else {
                    // handle error
                    reject(res);
                }
            })
            .catch(err => {
                console.log(`请求错误，${err}`);
            });
    })
}

function get(url: string, params?: object, options?: RequestOptions) {
    return request('get', url, params, options);
}

function post(url: string, params: object, options: RequestOptions) {
    return request('post', url, params, options);
}

export default {
    get, post,
}