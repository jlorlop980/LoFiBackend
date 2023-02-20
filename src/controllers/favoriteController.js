const favoritesService = require("../services/favoritesService");

const getAllFavorites = (req, res, next) => {
  const allFavs = favoritesService.getAllFavorites();
  res.send(allFavs).end();
  res.locals.mensaje = "OK";
  next();
};

const addNewFavorite = (req, res, next)=> {
  const {userId, cancion} = req.body;
  const newFV = favoritesService.addNewFavorite(userId,cancion);
  res.send(newFV).end();
  res.locals.mensaje= "Favorito creado con exito"
  next();
}

const getOneFavorite = (req, res, next) => {
  let idFav = req.params.id;
  const fav = favoritesService.getOnePlaylist(idFav);
  res.send(fav).end();
  res.locals.mensaje = "OK";
  next();
};

const getUserFavorites= (req, res, next) => {
  let idUsu = req.params.id;
  const FavsUser = favoritesService.getUserFavorites(idUsu);
  res.send(FavsUser).end();
  res.locals.mensaje = "OK";
  next();
};

const deleteFavorite=(req,res,next)=>{
  const id=req.params.id;
  const delFav= favoritesService.deleteFavorite(id)
  res.send(delFav).end();
  res.locals.mensaje = "OK";
  next();
}

module.exports.getAllFavorites = getAllFavorites;
module.exports.getOneFavorite = getOneFavorite;
module.exports.getUserFavorites = getUserFavorites;
module.exports.addNewFavorite = addNewFavorite;
module.exports.deleteFavorite = deleteFavorite;