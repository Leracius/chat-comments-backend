import { Request, Response } from "express";

export const postImg = async (req: Request, res: Response) => {
  const file = req.body;
  // const data = await handleUpload(file);
  res.json({
    imgPath: file,
  });
};
