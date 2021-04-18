import {  NextFunction, Request, Response } from "express";

const success = (req: Request, res: Response, message: any, status: number) => {
    res.status(status || 200).send({
        error: '', 
        body: message
    }); 
}

const error = (req: Request, res: Response, message: any, status: number, details: string) => {
    console.error( '[response error] ' + details )
    res.status(status || 500).send({
        error: message,
        body: '',
    });
}

export default { success, error }