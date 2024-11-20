import { Request, Response } from "express";
import Comment from "../models/Coment.model";

export const getComments = async (req: Request, res: Response) => {
  try {
    const comments = await Comment.findAll();
    res.json({ data: comments });
  } catch (error) {
    console.log(error);
  }
};

export const createComment = async (req: Request, res: Response) => {
  try {
    const comment = await Comment.create(req.body);
  } catch (error) {
    console.log(error);
  }

  res.json({
    msg: "comentario posteado",
  });
};
