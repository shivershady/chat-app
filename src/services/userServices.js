import {Axios} from './Axios';

export function getAllUser(){
    const url = '/chat/get_all';
    return Axios.get(url);
}

export function getUser(){
    const url = '/user/get_current_user';
    return Axios.get(url);
}


const userServices = {
    getAllUser,
    getUser
};

export default userServices;