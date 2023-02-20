const data = require("./favorites.json");
const fs = require("fs")

//Esta función la utilizo para generar un id secuencial
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

//aqui cogemos un favorito según su id
const getOneFavorite = (id) => {
  
    const playl=data.playlists.find(play=> play.id==id); 
    return playl;
}

//aqui cogemos todos los favoritos de un usuario
const getUserFavorites = (idUsu) => {
  
    const favs=data.favorites.filter(fav=> fav.userId==idUsu); 
    return favs;
}

//aquí añadimos un favorito agregandole el id que nosotros generamos mas los datos del usuario
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
//aqui buscamos el indice del favorito a eliminar con ese id y lo eliminamos con splice
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