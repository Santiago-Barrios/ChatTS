import express from "express";
import message from "../components/message/network";

const routes = function (server: any) {
  server.use("/message", message);
};

export default routes;
