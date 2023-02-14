const express = require("express");
const router = express.Router();
const playlistsController = require("../../controllers/playlistController")

//RUTA DE ENTRADA HASTA ESTE MÓDULO: /api/v1/productos/
router.route("/")
  .get(playlistsController.getAllPlaylists);

router.route("/:id")
  .get(playlistsController.getOnePlaylist);

module.exports = router;