const data = require("./playlists.json");
const fs = require("fs")


const getAllPlaylists = () => {
    return data.playlists;
}

const getOnePlaylist = (nombre) => {
  
    const playl=data.playlists.find(play=> play.id==nombre); 
    return playl;
}

module.exports = {
    getAllPlaylists,
    getOnePlaylist
  };