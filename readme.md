# Lofi

Mi aplicacón consiste en un reproductor de música lofi en el que podemos crear playlists o dar me gusta a nuestras favoritas

En el archivo apilofi.json se encuentra un backup de insomnia  
  
##Instrucciones de ejecución
```bash
git clone https://github.com/jlorlop980/LoFiBackend.git
```
```bash
npm install
```
```bash
npm start
```

## Recursos

A continuacion muestro los recursos que se van a usar en la api:
(la ruta base es ```api/v1``` )
  
---
### Playlists
```playlists/ ```
En este recurso podemos acceder a diferentes metodos para las playlsts,
##### Funcionalidad
Podremos eliminar una playlists, crearla, buscar playlist por id del creador o devolverlas todas incluso modificar el nombre de esta.
##### EntryPoints
+ /
	- GET -> Nos devulve todas las playlists
	- POST -> Añadimos una nueva playlists
+ /:id
	- GET -> Nos devuelve una playlists según su id
	- DELETE -> Nos permite eliminar una playlist según su id
	- PUT -> Nos permite modificar el nombre de una playlist
+ /usersP/:id
	- GET -> Nos devuelve las playlists de un usuario (gracias a su id)
+ /nsong/:id
	-  PUT -> nos permite añadir una cancion a la playlist que corresponda el id
	- DELETE -> no permite eliminar una canción de una playlist
---
### Users
```users/ ```
En este recursos encontramos los usuarios de nuestra base de datos
##### Funcionalidad
Podremos eliminar una playlists, crearla, buscar playlist por id del creador o devolverlas todas incluso modificar el nombre de esta.
##### EntryPoints
+ /
	- GET -> Nos devulve todos los usuarios
	- POST -> Añadimos un nuevo usuario
+ /:id
	- GET -> Nos devuelve un usuario según su id
+ /checkM/
	- GET -> Nos devuelve los mails para luego en el fronto comprobar que no exista ya registrado ese mail
+ /checkUser/
	-  POST -> Usado para comprobar si el usuario y contraseña es correcto
---
### Favorites
```favs/ ```
Aqui guardaremos las canciones que los usuarios han dado añadido a favoritos
##### Funcionalidad
Podremos eliminar una playlists, crearla, buscar playlist por id del creador o devolverlas todas incluso modificar el nombre de esta.
##### EntryPoints
+ /
	- GET -> Nos devulve todos los favoritos
	- POST -> Añadimos un nuevo favoritos
+ /:id
	- GET -> Nos devuelve un favorito según su id
	- DELETE -> Nos permite eliminar un favorito segun el id
+ /usersF/:id
	- GET -> Nos devuelve los favoritos de un usuario (gracias a su id)
---
### Songs
```songs/ ```
Aqui encontramos las canciones que actualmente no tienen mucho uso ya que no se puede modificar eliminar o añadir canciones
##### Funcionalidad
Como he indicado antes en esta ruta no encontramos gran cosa ya que de momento no se podra añadror eliminar o editar canciones
##### EntryPoints
+ /
	- GET -> Nos devulve todos los favoritos
+ /:id
	- GET -> Nos devuelve un favorito según su id
---