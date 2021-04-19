import express, { Request, Response, NextFunction } from "express";
import HandleResponse from "../../network/response";
import Controller from "../message/controller";
const router = express.Router();
// consulta mensaje
router.get("/", (req: any, res: Response) => {

  const fliterMessages = req.query.user || null;

  Controller.getMessages(fliterMessages)
    .then( (messageList) => {
      HandleResponse.success(req, res, messageList, 200);
    } )
    .catch( e => {
      HandleResponse.error(req, res, 'Unexpected Error', 500, e );
    } )
});
// agrega mensajes
router.post("/", (req: any, res: Response) => {

  const body = req.body;
  Controller.addMessage(body.user, body.message)
    .then( (fullMessage) => {
      HandleResponse.success(req, res, fullMessage , 201);
    })
    .catch( (e) => {
      HandleResponse.error(req, res, 'Información invalida', 400, 'Error para logear usuario');
    });

});
// actualiza mensaje de usuario según el id
router.post('/:id', (req: any, res: Response) => {

  const id = req.params.id;
  const text = req.body.message;

  Controller.updateMessage(id, text)
    .then( (data) => {
      HandleResponse.success(req, res, data, 200);
    })
    .catch( (e) => {
      HandleResponse.error(req, res, 'Error interno', 500, e);
    })
});
export default router;
