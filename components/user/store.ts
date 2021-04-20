import Model from "./model";

const addUser = (user) => {
    const myUser = new Model(user);
    return myUser.save();
};

const getUsers = async (filterUSer) => {
    let filter = {}; 
    if(filterUSer){
        filter = { name: new RegExp (filterUSer, "i") } //expresión regular
    }
    const messages = await Model.find(filter);
    return messages;
};

const updateName = async (id: any, name: string) =>{

    const userFind = await Model.findOne({ _id : id });
    userFind.name = name;
    const newUser = await userFind.save();
    return newUser;

};

const removeUser = async (id) => {
    return  Model.deleteOne({ _id : id });
 }

export default {
    add: addUser,
    list: getUsers,
    updateName,
    remove: removeUser
}