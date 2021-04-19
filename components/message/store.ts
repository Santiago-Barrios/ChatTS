import Model from "./model";


const addMessage = (message) => {
    const myMessage = new Model(message);
    myMessage.save();
};

const getMessages = async (filterUSer) => {
    let filter = {}; 
    if(filterUSer){
        filter = { user: new RegExp (filterUSer, "i") } //expresión regular
    }
    const messages = await Model.find(filter);
    return messages;
};

const updateText = async (id: any, message: string) =>{

    const messageFind = await Model.findOne({ _id : id });
    messageFind.message = message;
    const newMessage = await messageFind.save();
    return newMessage;

};

const removeMessage = async (id) => {
   return  Model.deleteOne({ _id : id });
}

export default {
    add: addMessage,
    list: getMessages,
    updateText,
    remove: removeMessage
}