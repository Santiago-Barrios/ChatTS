import Model from "./model";

const addChat = (chat) => {
    const myChat = new Model (chat);
    return myChat.save();
};

const getChats = (userId) => {
    return new Promise( (resolve, reject) => {
        let filter = {};
        if(userId){
            filter = {users: userId }
        }
        Model.find(filter)
            .populate('users')
            .exec( (err, populated) => {
                if( err ){
                    reject(err);
                    return false;
                }
                resolve(populated);
            } )

    } )
}

export default {
    add: addChat,
    list: getChats

}