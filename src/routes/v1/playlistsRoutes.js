const express = require("express");
const router = express.Router();
const playlistsController = require("../../controllers/playlistController")

//RUTA DE ENTRADA HASTA ESTE MÓDULO: /api/v1/playlists/
router.route("/")
  .get(playlistsController.getAllPlaylists)
  .post(playlistsController.addNewPlaylist)

router.route("/:id")
  .get(playlistsController.getOnePlaylist);

router.route("/userP/:id")
  .get(playlistsController.getUserPlaylist)

module.exports = router;