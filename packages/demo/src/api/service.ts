import axios, { AxiosInstance, AxiosRequestConfig, InternalAxiosRequestConfig } from "axios";
import useUserStore from "@/store/modules/user"
const userStore = useUserStore();
export function createService(options: AxiosRequestConfig):AxiosInstance {
    let service = axios.create(options);
    initInterceptors(service);
    return service;
};
type extraInternalAxiosRequestConfig = InternalAxiosRequestConfig & {
    loading: boolean
}
function initInterceptors(service: AxiosInstance) {
    service.interceptors.request.use((config: extraInternalAxiosRequestConfig) => {
        config.headers.Authorization = userStore.token;
        return config;
    }, (err) => {
        console.log("执行埋点操作");
        return Promise.reject(err);
    });

    service.interceptors.response.use((res) => {
        const { code } = res.data;
        if(code === 200) {
            return res.data;
        }
        console.log("执行错误处理");
        return Promise.reject(res.data)
    }, (err) => {
        console.log("执行错误处理");
        return Promise.reject(err);
    })
}

const baseConfig = {
    timeout: 10000,
    baseUrl: "",
    withCredentials: true,
};
export default createService(baseConfig);