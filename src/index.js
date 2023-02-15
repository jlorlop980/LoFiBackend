const express = require("express")
const cors = require('cors')

const app = express()
app.use(express.static('src/public'));

const routesv1 = require("./routes/v1/indexRoutes.js")

app.use(cors());
app.use(express.json())
app.use("/api/v1", routesv1.router)

//const path = require('path')
//app.use('/static', express.static(path.join(__dirname, 'public'))) 

app.use((err, req, res, next) => {
  console.log("Esta funcion captura todos los erroes de Express")
  console.log(err.stack)
  res.status(500).end()
})

const PORT = process.env.PORT || 3001
app.listen(PORT, ()=>{
    console.log(
      "\x1b[41m%s\x1b[0m",
      `[start] 🚀 Server listening on port ${PORT} 🚀`
    );
})