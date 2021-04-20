import store from "./store";

const addChat = (users) => {
    if(!users || !Array.isArray(users)){
        return Promise.reject('Invalid user list')
    }
    const chat = {
        users: users
    };
    return store.add(chat);
};

const listChats = (userId) => {
    return store.list(userId);
}


export default {
    addChat,
    listChats
}