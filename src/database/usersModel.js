const data = require("./users.json");
const fs = require("fs")
//generamos un id
function maxID(){
    let maxim=0;
    for(let i=0;i<data.users.length;i++){
        if(data.users[i].id>maxim){ maxim=data.users[i].id}
    }
    return maxim;
}
//recuperamos todos los usuarios
const getAllUsers = () => {
    return data;
}
//recuperamos todos los mails
const checkMail= () => {

    let emails=[]
    data.users.forEach(user=>emails.push(user.email));
    emails={"emails":emails}
    console.log(emails)
    return emails;
}
//esta funcion se encangará del login
const checkUser = (email,passwd) => {
  
    const user=data.users.find(user=> user.email==email && user.passwd==passwd); 
    console.log(user);
    return typeof user!="undefined"?String(user.id):"-1";
}
//aqui recuperamos un usuario por su id
const getOneUser = (id) => {
  
    const user=data.users.find(user=> user.id==id); 
    return typeof user!="undefined"?user:"-1";
}
//aqui creamos un usuario
const addNewUser= (email, passwd) =>{
    const newUser={   
                    "id":maxID()+1,
                    "email":email,
                    "passwd":passwd
                }


    data.users.push(newUser);
    fs.writeFileSync(
        "./src/database/users.json",
        JSON.stringify(data,null,2),
        "utf8"
    );
        return newUser;
}

module.exports = {
    getAllUsers,
    checkMail,
    checkUser,
    addNewUser,
    getOneUser
  };