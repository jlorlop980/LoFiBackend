const express = require("express")
const router = express.Router()
const songs = require("./songRoutes")
const playlists = require("./playlistsRoutes")

//RUTA DE ENTRADA HASTA ESTE MÓDULO: /api/v1

router.route("/")
    .get((req, res, next)=>{
        res.send("<h1>Hola Mundo</h1>").end();
        res.locals.mensaje = "OK"
        next()
    });
router.use("/songs", songs);
router.use("/playlists", playlists);

    

module.exports.router = router;