const data = require("./songs.json");
const fs = require("fs")


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
