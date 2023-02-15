const playlistsModel = require("../database/playlistModel");
//const { v4: uuid } = require("uuid");

const getAllPlaylists = () => {
  const allPlaylists = playlistsModel.getAllPlaylists();
  return allPlaylists;
};

const getOnePlaylist = (nombre) => {
  const playlist = playlistsModel.getOnePlaylist(nombre);
  return playlist;
};

const getUserPlaylist = (idUsu) => {
  const playlist = playlistsModel.getUserPlaylist(idUsu);
  return playlist;
};

module.exports = {
  getAllPlaylists,
  getOnePlaylist,
  getUserPlaylist

};