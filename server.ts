import express from "express";
import bodyParser from "body-parser";

const router = express.Router();

let app = express();
app.use(bodyParser.json());
app.use(router);

router.get('/message', (req, res) =>{
    console.log(req.body);
    console.log(req.query);
    res.status(201).json({error: '', body: 'creado Correctamente'});
} )

router.post('/message', (req, res) => {
    res.send('Mensaje ' + req.body.text  + ' añadido');
});

app.listen(3000);
console.log('La aplicación esta escuchando en http://localhost:3000');
