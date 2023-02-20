const express = require("express");
const router = express.Router();
const favoritesController = require("../../controllers/favoriteController")

//RUTA DE ENTRADA HASTA ESTE MÓDULO: /api/v1/playlists/
router.route("/")
  .get(favoritesController.getAllFavorites)
  .post(favoritesController.addNewFavorite)

router.route("/:id")
  .get(favoritesController.getOneFavorite)
  .delete(favoritesController.deleteFavorite);

router.route("/userF/:id")
  .get(favoritesController.getUserFavorites)

module.exports = router;