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

const changeName=(id,newName)=>{
    const index= data.playlists.findIndex(pl=>pl.id==id);
    console.log(index)
    data.playlists[index].name=newName
    fs.writeFileSync(
        "./src/database/playlists.json",
        JSON.stringify(data,null,2),
        "utf8"
    );
    return  data.playlists[index]
}

const addSong=(id,cancion)=>{
    const index= data.playlists.findIndex(pl=>pl.id==id);
    data.playlists[index].songs.push(cancion)
    fs.writeFileSync(
        "./src/database/playlists.json",
        JSON.stringify(data,null,2),
        "utf8"
    );
    return  data.playlists[index]
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


const deleteOnePlaylist= (id)=>{
    const index = data.playlists.findIndex(pl => pl.id === id)
    // Borramos la playlist
    const deletedPl = data.playlists.splice(index, 1);
    // Escribimos los nuevos datos en el fichero JSON
    fs.writeFileSync(
    "./src/database/playlists.json",
    JSON.stringify(data, null, 2),
    "utf8"
    );
    return deletedPl;
}

const deleteSongFromPlaylist= (idPl,idCancion)=>{
    console.log(idPl,idCancion)
    const indexPl = data.playlists.findIndex(pl => pl.id == idPl)
    console.log("indexPl: ",indexPl)
    console.log(data.playlists[indexPl])
    const indexSong = data.playlists[indexPl].songs.findIndex(song => song.id == idCancion)
    // Borramos la playlist
    const deletedSong = data.playlists[indexPl].songs.splice(indexSong, 1);

    // Escribimos los nuevos datos en el fichero JSON
    fs.writeFileSync(
    "./src/database/playlists.json",
    JSON.stringify(data, null, 2),
    "utf8"
    );

    return data.playlists[indexPl];

}


module.exports = {
    getAllPlaylists,
    getOnePlaylist,
    getUserPlaylist,
    addNewPlaylist,
    deleteOnePlaylist,
    changeName,
    addSong,
    deleteSongFromPlaylist
  };