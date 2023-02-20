const usersModel = require("../database/usersModel");
//const { v4: uuid } = require("uuid");

const getAllUsers = () => {
  const allUsers = usersModel.getAllUsers();
  return allUsers;
};

const checkMail = () => {
  const emails = usersModel.checkMail();
  return emails;
};

const getOneUser = (id) => {
    const user = usersModel.getOneUser(id);
    return user;
};

const addNewUser = (email, passwd)=>{
  const newUser= usersModel.addNewUser(email,passwd)
  return newUser;
}

const checkUser = (email,passwd) => {
    const idUser = usersModel.checkUser(email,passwd);
    return idUser;
};

module.exports = {
    getAllUsers,
    addNewUser,
    checkMail,
    checkUser,
    getOneUser
};