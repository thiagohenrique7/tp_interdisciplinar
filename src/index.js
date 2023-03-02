port = 3003
const express = require('express')
const app = express()
const database = require('./database/db')
var cors = require('cors')


database.sync(() => console.log("BANCO DE DADOS CONECTADO"));

app.use(cors())

const routers = require("./routes/router")

app.listen(port, () => {
    console.log(`Servido iniciado na porta :${port}`)
})

app.use(routers)


