const songsModel = require("../database/songsModel");
//const { v4: uuid } = require("uuid");

const getAllSongs = () => {
  const allSongs = songsModel.getAllSongs();
  return allSongs;
};

const getOneSong = (nombre) => {
  const song = songsModel.getOneSong(nombre);
  return song;
};


module.exports = {
  getAllSongs,
  getOneSong,

};