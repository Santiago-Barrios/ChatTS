import store from "./store";

const addUser = (name: string) => {

    return new Promise ( (resolve, reject) => {
        if( !name ){
            reject('Inavalid data');
        }else{
            const user = {
                name
            }
            store.add(user);
            resolve(user);
        }
    })

};

const getUsers = (filterUSer) =>{
    return new Promise( (resolve, reject) =>{
        resolve(store.list(filterUSer));
    } );
};

const updateUser = (id, newName) =>{

    return new Promise( async (resolve, reject) =>{
        if(!id || !newName){
            reject('Invalid data');
            return false;
        }else{
            const result = await store.updateName(id, newName);
            resolve(result);
        }
    } )

};

const deleteUser = (id) => {

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
    addUser,
    getUsers,
    updateUser,
    deleteUser
}