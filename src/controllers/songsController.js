const songsService = require("../services/songsService");

// Change both functions

const getAllSongs = (req, res, next) => {
  const allSongs = songsService.getAllSongs();
  res.send(allSongs).end();
  res.locals.mensaje = "OK";
  next();
};



const getOneSong = (req, res, next) => {
  let nombreSong = req.params.id;
  const Song = songsService.getOneSong(nombreSong);
  res.send(Song).end();
  res.locals.mensaje = "OK";
  next();
};


module.exports.getAllSongs = getAllSongs;
module.exports.getOneSong = getOneSong;
