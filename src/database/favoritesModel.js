const data = require("./favorites.json");
const fs = require("fs")

function maxID(){
    let maxim=0;
    for(let i=0;i<data.favorites.length;i++){
        if(data.favorites[i].id>maxim){ maxim=data.favorites[i].id}
    }
    return maxim;
}

const getAllFavorites = () => {
    return data;
}

const getOneFavorite = (id) => {
  
    const playl=data.playlists.find(play=> play.id==id); 
    return playl;
}

const getUserFavorites = (idUsu) => {
  
    const favs=data.favorites.filter(fav=> fav.userId==idUsu); 
    return favs;
}

const addNewFavorite= (userid, cancion) =>{
    const newFV={   "id":maxID()+1,
                    "userId":userid,
                    "song":cancion
                }

    console.log(newFV)
    data.favorites.push(newFV);
    fs.writeFileSync(
        "./src/database/favorites.json",
        JSON.stringify(data,null,2),
        "utf8"
    );
        return newFV;
}

const deleteFavorite=(id)=>{
    const index = data.favorites.findIndex(fav => fav.id === id)
    // Borramos la playlist
    const deletedFav = data.favorites.splice(index, 1);
    // Escribimos los nuevos datos en el fichero JSON
    fs.writeFileSync(
    "./src/database/favorites.json",
    JSON.stringify(data, null, 2),
    "utf8"
    );
    return deletedFav;
}


module.exports = {
    getAllFavorites,
    getOneFavorite,
    getUserFavorites,
    addNewFavorite,
    deleteFavorite
};