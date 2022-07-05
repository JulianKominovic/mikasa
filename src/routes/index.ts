import express, { Request, Response } from "express";
import systemController from "../controllers/system";
const router = express.Router();
const routes = () => {
  router.use("system", systemController());

  return router;
};

export default routes;
