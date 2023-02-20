const express = require("express");
const router = express.Router();
const userController = require("../../controllers/userController")

//RUTA DE ENTRADA HASTA ESTE MÓDULO: /api/v1/users/
router.route("/")
  .get(userController.getAllUsers)
  .post(userController.addNewUser)



router.route("/checkM")
  .get(userController.checkMail);
  
router.route("/checkUser")
  .post(userController.checkUser)

router.route("/:id")
  .get(userController.getOneUser);

module.exports = router;