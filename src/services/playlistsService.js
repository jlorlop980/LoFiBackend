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

const addNewPlaylist = (userid, nombre)=>{
  const newPl= playlistsModel.addNewPlaylist(userid,nombre)
  return newPl;
}

const changeName = (id, newName)=>{
  const pl= playlistsModel.changeName(id,newName)
  return pl;
}

const addSong = (id, cancion)=>{
  const pl= playlistsModel.addSong(id,cancion)
  return pl;
}

const deleteOnePlaylist =(id)=>{
  const pl=playlistsModel.deleteOnePlaylist(id);
  return pl;
}

const deleteSongFromPlaylist= (idPl,idCancion)=>{
  const pl=playlistsModel.deleteSongFromPlaylist(idPl,idCancion);
  return pl
}

module.exports = {
  getAllPlaylists,
  getOnePlaylist,
  getUserPlaylist,
  addNewPlaylist,
  addSong,
  changeName,
  deleteOnePlaylist,
  deleteSongFromPlaylist

};