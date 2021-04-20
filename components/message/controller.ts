import store from "./store";

const addMessage = ( chat: string, user: string, message: string, file:any ) => {
    return new Promise( (resolve, reject) =>{
        if( !chat || !user || !message){
            console.error('[messagesController] No hay usuario o mensaje')
            reject('Los datos son incorrectos');
            return false;
        }else{
            let fileUrl = '';
            if(file){
               fileUrl = "http://localhost:3000/app/files/" + file.filename; 
            }
            const fullMessage = {
                chat,
                user,
                message,
                date: new Date(),
                file: fileUrl,
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