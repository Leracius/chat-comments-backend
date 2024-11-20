import { Router } from "express";
import { createComment, getComments } from "../controllers/msg.controller";
import { handleInputErrors } from "../middlewares";
import { body } from "express-validator";

const msgRoute = Router();

msgRoute.get("/", handleInputErrors, getComments);

msgRoute.post(
  "/",
  body("name").notEmpty().withMessage("name field cannot be empty"),
  body("profileImg").notEmpty().withMessage("name field cannot be empty"),
  handleInputErrors,
  createComment
);

export default msgRoute;
