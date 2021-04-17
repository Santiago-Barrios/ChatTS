import express, { Request, Response, NextFunction,} from "express";
import bodyParser from "body-parser";
import HandleResponse from "./network/response";

const router = express.Router();

let app = express();
app.use(bodyParser.json());
app.use(router);

router.get('/message', (req: any, res: Response) =>{
    // console.log(req.headers);
    // res.header({
    //     "custom-header": "Nuestro Valor personalizado"
    // });
    HandleResponse.success(req, res, 'lista de mensajes', 201);
} )

router.post('/message', (req: Request, res: Response) => {
    console.log(req.query);
    if( req.query.error === "ok" ){
        HandleResponse.error(req, res, 'Error Simulado', 401);
    } else{
        HandleResponse.success(req, res, 'Creado correctamente', 201);
    }
});

app.use('/app', express.static('public'));

app.listen(3000);
console.log('La aplicación esta escuchando en http://localhost:3000');
