import express, { Request, Response, NextFunction } from "express";
import HandleResponse from "../../network/response";
import Controller from "../message/controller";
const router = express.Router();

router.get("/", (req: any, res: Response) => {
  Controller.getMessages()
    .then( (messageList) => {
      HandleResponse.success(req, res, messageList, 200);
    } )
    .catch( e => {
      HandleResponse.error(req, res, 'Unexpected Error', 500, e );
    } )
});

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

export default router;
