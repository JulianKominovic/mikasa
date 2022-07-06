import express, { Request, Response } from "express";
import streamingController from "../controllers/streaming";

const router = express.Router();
const routes = () => {
  router.use("/streaming", streamingController());

  return router;
};

export default routes;
