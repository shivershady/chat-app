import {Axios} from './Axios';

export function getChat(payload) {
    const url = `/chat/get_conversiton/${payload.currentId}/${payload.friendId}`;
    return Axios.get(url);
}

export function sendChat(payload) {
    const url = `/chat/send_content`;
    return Axios.get(url,payload);
}

const chatServices = {
    getChat,
    sendChat
};

export default chatServices;