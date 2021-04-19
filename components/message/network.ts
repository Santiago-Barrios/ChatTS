import express, { Request, Response, NextFunction } from "express";
import HandleResponse from "../../network/response";
const router = express.Router();

router.get("/", (req: any, res: Response) => {
  // console.log(req.headers);
  res.header({
    "custom-header": "Nuestro Valor personalizado",
  });
  HandleResponse.success(req, res, "lista de mensajes", 201);
});

router.post("/", (req: Request, res: Response) => {
  console.log(req.query);
  if (req.query.error === "ok") {
    HandleResponse.error(req, res, "Error Simulado", 401, "prueba del error");
  } else {
    HandleResponse.success(req, res, "Creado correctamente", 201);
  }
});

export default router;
