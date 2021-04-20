import Model from "./model";


const addMessage = (message) => {
    const myMessage = new Model(message);
    myMessage.save();
};

const getMessages = (filterUSer) => {

    return new Promise( (resolve, reject) =>{
        let filter = {}; 
        if(filterUSer){
            filter = { user: new RegExp (filterUSer, "i") } //expresión regular
        }
        Model.find(filter)
            .populate('user')
            .exec((error, populated) => {
                if(error){
                    reject(error)
                    return false;
                }
                resolve(populated);
            })
    })
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