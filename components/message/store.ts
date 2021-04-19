import db from "mongoose";
import Model from "./model";

const uri = 'mongodb+srv://gunny:960506barrios..@telegrom-platzi-ts.e6ifa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

db.Promise = global.Promise;

db.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then( () => {
        console.log('[db] Conectada con éxito');
    })
    .catch( e =>{
        console.error( "[db connection] Conecction failed", e.message );
    });

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