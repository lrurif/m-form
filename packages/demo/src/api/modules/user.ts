import service from "../service";
export interface LoginReq {
    username: string;
    password: string;
}
export interface LoginRes {
    token: string;
}
export function login(data: LoginReq) {
    return service.post<LoginRes>("/login", data);
}
