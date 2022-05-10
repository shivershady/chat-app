import {Axios} from './Axios';

export function signup(payload){
    const url = '/regis';
    return Axios.post(url,payload);
}

export function login(payload){
    const url = '/login';
    return Axios.post(url,payload);
}

export function logout(payload){
    const url = '/logout';
    return Axios.post(url,payload);
}

const authServices = {
    signup,
    login,
    logout
};

export default authServices;