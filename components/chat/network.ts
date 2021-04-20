import express, { Request, Response, NextFunction } from "express";
import HandleResponse from "../../network/response";
import Controller from "./controller";
const router = express.Router();

router.post('/', (req: any, res: Response) => {
    const users = req.body.users;
    Controller.addChat(users)
        .then((data) => {
            HandleResponse.success(req, res, data, 201)
        })
        .catch(e => {
            HandleResponse.error(req, res, 'Internal error', 500, e);
        });
});

router.get('/:userId', (req: any, res: Response ) => {
    const userId = req.params.userId;
    Controller.listChats(userId)
        .then((users) => {
            HandleResponse.success(req, res, users, 200);
        })
        .catch(e => {
            HandleResponse.error(req, res, 'Internal Error', 500, e);
        })
})

export default router;