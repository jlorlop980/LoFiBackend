const songsService = require("../services/songsService");
const path = require('path');
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
  console.log(Song)
  console.log(path.join(__dirname,"..", Song.route))
  res.sendFile(path.join(__dirname,"..", Song.route));
  res.locals.mensaje = "OK";
  next();
};


module.exports.getAllSongs = getAllSongs;
module.exports.getOneSong = getOneSong;
