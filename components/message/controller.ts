
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
            resolve( fullMessage );
        }
    } )
}

export default {
    addMessage,
}