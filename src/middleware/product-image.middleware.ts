import slugify from "slugify";
import { config } from "../config";
import { Request, Response, NextFunction } from "express";
import fs from "fs";

export function productImageMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const files = (req.files?.images as Array<any>) ?? undefined;
  const fileNames: string[] = [];

  if (files?.length) {
    files.forEach((file) => {
      const fileName = `${new Date().getTime()}-${slugify(file.name)}`;
      fileNames.push(fileName);
      fs.writeFileSync(`${config.filePath}/${fileName}`, file.data);
    });
    req.body.images = fileNames;
    return next();
  }

  if (files) {
    const file = files as any;
    const fileName = `${new Date().getTime()}-${slugify(file.name)}`;
    fileNames.push(fileName);
    fs.writeFileSync(`${config.filePath}/${fileName}`, file.data);
    req.body.images = fileNames;
    return next();
  }
  next();
}
