const playlistsService = require("../services/playlistsService");


const getAllPlaylists = (req, res, next) => {
  const allSongs = playlistsService.getAllPlaylists();
  res.send(allSongs).end();
  res.locals.mensaje = "OK";
  next();
};

const addNewPlaylist = (req, res, next)=> {
  const {userId, nombre} = req.body;
  const newPl = playlistsService.addNewPlaylist(userId,nombre);
  res.send(newPl).end();
  res.locals.mensaje= "creada con exito"
  next();
}

const getOnePlaylist = (req, res, next) => {
  let nombreSong = req.params.id;
  const Song = playlistsService.getOnePlaylist(nombreSong);
  res.send(Song).end();
  res.locals.mensaje = "OK";
  next();
};

const getUserPlaylist= (req, res, next) => {
  let idUsu = req.params.id;
  const PlaylistUser = playlistsService.getUserPlaylist(idUsu);
  res.send(PlaylistUser).end();
  res.locals.mensaje = "OK";
  next();
};

const addSong = (req, res, next) => {
  let id = req.params.id;
  const cancion={
                "id":req.body.id,
                "name":req.body.name,
                "artist":req.body.artist,
                "route":req.body.route,
              }
  const pl = playlistsService.addSong(id,cancion);
  res.send(pl).end();
  res.locals.mensaje = "OK";
  next();
};

const changeName = (req, res, next) => {
  let id = req.params.id;
  const name = req.body.name;
  console.log(name)
  const pl = playlistsService.changeName(id,name);
  res.send(pl).end();
  res.locals.mensaje = "OK";
  next();
};

const deleteOnePlaylist= (req, res, next) => {
  let id = req.params.id;
  const deletedPl = playlistsService.deleteOnePlaylist(id);
  res.send(deletedPl).end();
  res.locals.mensaje = "OK";
  next();
};

const deleteSongFromPlaylist=(req,res,next)=>{
  let idPl= req.params.id;
  let idCancion=req.body.id;
  const pl= playlistsService.deleteSongFromPlaylist(idPl,idCancion);
  res.send(pl).end();
  res.locals.mensaje ="ok"
}


module.exports.getAllPlaylists = getAllPlaylists;
module.exports.getOnePlaylist = getOnePlaylist;
module.exports.getUserPlaylist= getUserPlaylist;
module.exports.addNewPlaylist = addNewPlaylist;
module.exports.changeName = changeName;
module.exports.addSong = addSong;
module.exports.deleteOnePlaylist = deleteOnePlaylist;
module.exports.deleteSongFromPlaylist = deleteSongFromPlaylist;


