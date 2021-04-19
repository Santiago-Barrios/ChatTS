import store from "../../components/message/store";

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
            console.log(fullMessage);
            store.add(fullMessage);
            resolve( fullMessage );
        }
    } )
};

const getMessages = () =>{
    return new Promise( (resolve, reject) =>{
        resolve(store.list());
    } );
}

export default {
    addMessage,
    getMessages
}