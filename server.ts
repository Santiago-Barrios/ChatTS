import express from "express";
import bodyParser from "body-parser";
import router from "./network/routes";

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.json());
router(app);

app.use("/app", express.static("public"));

app.listen(3000);
console.log("La aplicación esta escuchando en http://localhost:3000");
