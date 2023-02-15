const express = require("express");
const router = express.Router();
const songsController = require("../../controllers/songsController")

//RUTA DE ENTRADA HASTA ESTE MÓDULO: /api/v1/songs/
router.route("/")
  .get(songsController.getAllSongs);

router.route("/:id")
  .get(songsController.getOneSong);

module.exports = router;