//import express from "express";

////para dirname
//import path from "path";
//import { fileURLToPath } from "url";
//const __dirname = path.dirname(fileURLToPath(import.meta.url));
//
//
//
//
//
////servidor
//const app = express();
//app.set("port", 4000);
//app.listen(app.get("port"))
//console.log("Servidor correindo en el puerto", app.get("port"))
//
////configuracion
//
//app.use(express.static(__dirname + "/Css"));
//app.use(express.static(__dirname + "/js"));
//
////rutas
//app.get("/",(req,res)=>res.sendFile(__dirname + "/Pagina_Validacion.html"))


const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const loginRouter = require('./login');

const app = express();

app.use(bodyParser.json());

app.use(loginRouter);

const server = http.createServer(app);

server.listen(4000, () => {
    console.log('Servidor escuchando en el puerto 8080');
});
