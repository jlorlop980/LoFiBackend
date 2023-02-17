const data = require("./playlists.json");
const fs = require("fs")

function maxID(){
    let maxim=0;
    for(let i=0;i<data.playlists.length;i++){
        if(data.playlists[i].id>maxim){ maxim=data.playlists[i].id}
    }
    return maxim;
}

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

const addNewPlaylist= (userid, nombre) =>{
    const newPL={   "id":maxID()+1,
                    "name":nombre,
                    "userId":userid,
                    "songs":[]
                }

    console.log(newPL)
    data.playlists.push(newPL);
    fs.writeFileSync(
        "./src/database/playlists.json",
        JSON.stringify(data,null,2),
        "utf8"
    );
        return newPL;
}

module.exports = {
    getAllPlaylists,
    getOnePlaylist,
    getUserPlaylist,
    addNewPlaylist
  };