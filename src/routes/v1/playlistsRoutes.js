const express = require("express");
const router = express.Router();
const playlistsController = require("../../controllers/playlistController")

//RUTA DE ENTRADA HASTA ESTE MÓDULO: /api/v1/playlists/
router.route("/")
  .get(playlistsController.getAllPlaylists)
  .post(playlistsController.addNewPlaylist)

router.route("/:id")
  .get(playlistsController.getOnePlaylist)
  .delete(playlistsController.deleteOnePlaylist)
  .put(playlistsController.changeName);

router.route("/userP/:id")
  .get(playlistsController.getUserPlaylist)

router.route("/nsong/:id")
  .put(playlistsController.addSong)
  .delete(playlistsController.deleteSongFromPlaylist)

module.exports = router;