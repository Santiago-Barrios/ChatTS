const list = [];

const addMessage = (message) => {
    list.push(message);
};

const getMessages = () => {
    return list;
};

export default {
    add: addMessage,
    list: getMessages,
    // get
    // update
    // delete
}