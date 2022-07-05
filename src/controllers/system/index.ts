import express, { Request, Response } from "express";
const router = express.Router();
const systemController = () => {
  router.get("/");

  return router;
};

export default systemController;
