const playlistsService = require("../services/playlistsService");

// Change both functions

const getAllPlaylists = (req, res, next) => {
  const allSongs = playlistsService.getAllPlaylists();
  res.send(allSongs).end();
  res.locals.mensaje = "OK";
  next();
};

const addNewPlaylist = (req, res, next)=> {
  const {userId, nombre} = req.body;
  const newPl = playlistsService.addNewPlaylist(userId,nombre);
  res.send(newPl).end();
  res.locals.mensaje= "creada con exito"
  next();
}

const getOnePlaylist = (req, res, next) => {
  let nombreSong = req.params.id;
  const Song = playlistsService.getOnePlaylist(nombreSong);
  res.send(Song).end();
  res.locals.mensaje = "OK";
  next();
};

const getUserPlaylist= (req, res, next) => {
  let idUsu = req.params.id;
  const PlaylistUser = playlistsService.getUserPlaylist(idUsu);
  res.send(PlaylistUser).end();
  res.locals.mensaje = "OK";
  next();
};

module.exports.getAllPlaylists = getAllPlaylists;
module.exports.getOnePlaylist = getOnePlaylist;
module.exports.getUserPlaylist= getUserPlaylist;
module.exports.addNewPlaylist = addNewPlaylist;
