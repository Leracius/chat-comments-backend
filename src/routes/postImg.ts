import { Router } from "express";
import { postImg } from "../controllers/upload.controller";

const otherRoute = Router();

otherRoute.post(
  "/",

  postImg
);

export default otherRoute;
