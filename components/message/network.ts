import express, { Request, Response, NextFunction } from "express";
import HandleResponse from "../../network/response";
import Controller from "../message/controller";
const router = express.Router();

router.get("/", (req: any, res: Response) => {
  // console.log(req.headers);
  res.header({
    "custom-header": "Nuestro Valor personalizado",
  });
  HandleResponse.success(req, res, "lista de mensajes", 201);
});

router.post("/", (req: any, res: Response) => {

  const body = req.body;
  Controller.addMessage(body.user, body.message)
    .then( (fullMessage) => {
      HandleResponse.success(req, res, fullMessage , 201);
    })
    .catch( (e) =>{
      HandleResponse.error(req, res, 'Información invalida', 400, 'Error para logear usuario');
    });

});

export default router;
