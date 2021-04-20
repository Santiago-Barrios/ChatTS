import express, { Request, Response, NextFunction } from "express";
import HandleResponse from "../../network/response";
import Controller from "./controller";

const router = express.Router();

router.post('/', (req: any, res: Response) => {
    const name = req.body.name;
    Controller.addUser(name)
        .then( (user) => {
            HandleResponse.success(req, res, user, 201);
        })
        .catch( e =>{
            HandleResponse.error(req, res, 'Error interno', 500, e);
        })
});

router.get("/", (req: any, res: Response) => {

    const fliterUser = req.query.name || null;
  
    Controller.getUsers(fliterUser)
      .then( (userList) => {
        HandleResponse.success(req, res, userList, 200);
      } )
      .catch( e => {
        HandleResponse.error(req, res, 'Unexpected Error', 500, e );
      } )
  });

  router.post('/:id', (req: any, res: Response) => {

    const id = req.params.id;
    const newName = req.body.name;
  
    Controller.updateUser(id, newName)
      .then( (data) => {
        HandleResponse.success(req, res, data, 200);
      })
      .catch( (e) => {
        HandleResponse.error(req, res, 'Error interno', 500, e);
      })
  });

  router.delete( '/:id', (req: any, res: Response) => {
  
    const id = req.params.id;
    
    Controller.deleteUser(id)
      .then( () => {
        HandleResponse.success(req, res, `Usuario ${req.params.id} eliminado`, 200);
      })
      .catch( (e) => {
        HandleResponse.error(req, res, 'Error interno', 500, e);
      })
  } );

export default router;