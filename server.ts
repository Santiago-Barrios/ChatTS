import express from "express";
const app = express();
const server = require('http').Server(app);


import bodyParser from "body-parser";
import socket from './socket';
import db from "./db";
import router from "./network/routes";

const uri = 'mongodb+srv://gunny:960506barrios..@telegrom-platzi-ts.e6ifa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
db(uri);

app.use(bodyParser.json());

socket.connect(server);
router(app);

app.use("/app", express.static("public"));

server.listen(3000, () => {
    console.log("La aplicación esta escuchando en http://localhost:3000");
});
