import express from "express";
import bodyParser from "body-parser";
import db from "./db";
import router from "./network/routes";

const uri = 'mongodb+srv://gunny:960506barrios..@telegrom-platzi-ts.e6ifa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
db(uri);

let app = express();
app.use(bodyParser.json());
router(app);

app.use("/app", express.static("public"));

app.listen(3000);
console.log("La aplicación esta escuchando en http://localhost:3000");
