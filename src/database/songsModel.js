const data = require("./songs.json");
const fs = require("fs")
//este modelo esta muy vacio ya que de momento no se hace nada con estos datos solo recuperar todas las canciones y recuperar una por su id

const getAllSongs = () => {
    return data.songs;
}

const getOneSong = (id) => {
    
    const playl=data.songs.find(play=> play.id==id); 
    return playl;
}

module.exports = {
    getAllSongs,
    getOneSong
  };
