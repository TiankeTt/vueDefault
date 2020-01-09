import axios from 'axios';
import qs from 'qs';
import env from '@/config/env';

/**
 * 自定义Axios实例
 */
const AJAX = axios.create({
    baseURL: env.baseUrl,
    timeout: 30000,
    withCredentials: env.credential
});
// 添加请求拦截器
AJAX.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    // if (process.env.NODE_ENV === 'development') {
    //     config.url = `http://${location.host}` + config.url; // 自定义反向代理，可以在demo阶段打开看下请求效果
    // }
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
AJAX.interceptors.response.use(function (response) {
    if (!response.data.success) {
        alert(response.data.message)
    }
    // 对响应数据做点什么
    return response.data;
}, function (error) {
    // 对响应错误做点什么，比如400、401、402等等
    if (error && error.response) {
        alert('远程服务异常，请重试')
    }
    return Promise.reject(error);
});

// 定义对外Get、Post、File请求
export default {
    get(url, param = {}, headers = {}) {
        return AJAX.get(url, {
            params: param,
            headers
        })
    },
    post(url, param = null, headers = {}) {
        param = qs.stringify(param)
        return AJAX.post(url, param, {
            headers
        })
        // application/x-www-form-urlencoded  默认post
    },
    postJson(url, param = null, headers = {}) {
        return AJAX.post(url, param, {
            headers: Object.assign({
                'Content-Type': 'application/json'
            }, headers)
        })
        // Content-Type: application/json  json
    },
    put(url, param = null, headers = {}) {
        return AJAX.put(url, param, {
            headers
        })
    },
    file(url, param = null, headers = {}) {
        return AJAX.post(url, param, {
            headers: Object.assign({
                'Content-Type': 'multipart/form-data'
            }, headers)
        })
        // Content-Type: multipart/form-data
    },
    delete(url, param = null, headers = {}) {
        return AJAX.delete(url, {
            param,
            headers: Object.assign({
                'Content-Type': 'multipart/form-data'
            }, headers)
        })
    }
}
