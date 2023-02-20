const usersService = require("../services/usersService");

// Change both functions

const getAllUsers= (req, res, next) => {
  const allUsers = usersService.getAllUsers();
  res.send(allUsers).end();
  res.locals.mensaje = "OK";
  next();
};

const getOneUser = (req, res, next) => {
    let id = req.params.id;
    const user = usersService.getOneUser(id);
    console.log(user)
    res.send(user).end()
    res.locals.mensaje = "OK";
    next();
};

const addNewUser = (req, res, next)=> {
  const {email, passwd} = req.body;
  const newUser = usersService.addNewUser(email,passwd);
  res.send(newUser).end();
  res.locals.mensaje= "creado con exito"
  next();
}

const checkMail = (req, res, next) => {
  const mails = usersService.checkMail();
  res.send(mails).end();
  res.locals.mensaje = "OK";

};

const checkUser= (req, res, next) => {
  let {email,passwd} = req.body;
  const idUser = usersService.checkUser(email,passwd);
  res.send(idUser).end();
  res.locals.mensaje = "OK";
  next();
};

module.exports.getAllUsers = getAllUsers;
module.exports.addNewUser = addNewUser;
module.exports.checkMail= checkMail;
module.exports.checkUser = checkUser;
module.exports.getOneUser = getOneUser;