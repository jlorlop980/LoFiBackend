const favoritesModel = require("../database/favoritesModel");
//const { v4: uuid } = require("uuid");

const getAllFavorites = () => {
  const allFavorites = favoritesModel.getAllFavorites();
  return allFavorites;
};

const getOneFavorite = (id) => {
  const favorite = favoritesModel.getOneFavorite(id);
  return favorite;
};

const getUserFavorites = (idUsu) => {
  const favorites = favoritesModel.getUserFavorites(idUsu);
  return favorites;
};

const addNewFavorite = (userid, cancion)=>{
  const newFV= favoritesModel.addNewFavorite(userid,cancion)
  return newFV;
}

const deleteFavorite=(id)=>{
  const delFavo=favoritesModel.deleteFavorite(id);
  return delFavo;
}

module.exports = {
  getAllFavorites,
  getOneFavorite,
  getUserFavorites,
  addNewFavorite,
  deleteFavorite
};