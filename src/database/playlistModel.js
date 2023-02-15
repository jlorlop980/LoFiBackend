const data = require("./playlists.json");
const fs = require("fs")


const getAllPlaylists = () => {
    return data;
}

const getOnePlaylist = (nombre) => {
  
    const playl=data.playlists.find(play=> play.id==nombre); 
    return playl;
}

const getUserPlaylist = (idUsu) => {
  
    const playl=data.playlists.filter(playL=> playL.userId==idUsu); 
    return playl;
}

module.exports = {
    getAllPlaylists,
    getOnePlaylist,
    getUserPlaylist
  };