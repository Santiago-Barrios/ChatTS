import express from "express";
import message from "../components/message/network";
import user from "../components/user/network";

const routes = function (server: any) {
  server.use("/message", message);
  server.use("/user", user)
};

export default routes;
