import store from "./store";

const addMessage = ( user: string, message: string ) => {
    return new Promise( (resolve, reject) =>{
        if( !user || !message){
            console.error('[messagesController] No hay usuario o mensaje')
            reject('Los datos son incorrectos');
            return false;
        }else{
            const fullMessage = {
                user,
                message,
                date: new Date(),
            };
            store.add(fullMessage);
            resolve( fullMessage );
        }
    } )
};

const getMessages = (filterUSer) =>{
    return new Promise( (resolve, reject) =>{
        resolve(store.list(filterUSer));
    } );
}

const updateMessage = (id, message) =>{

    return new Promise( async (resolve, reject) =>{
        if(!id || !message){
            reject('Invalid data');
            return false;
        }else{
            const result = await store.updateText(id, message);
            resolve(result);
        }
    } )

};

const deleteMessage = (id) => {

    return new Promise( async (resolve, reject) => {
        if(!id){
            reject('Invalid data');
            return false;
        } else{
            store.remove(id)
                .then( () => {
                    resolve('ok');
                } )
                .catch( e => {
                    reject(e)
                } )
        }
    } )
}

export default {
    addMessage,
    getMessages,
    updateMessage,
    deleteMessage
}