import express, { Request, Response } from "express";
import Path from "path";
import fs from "fs";

const router = express.Router();
const streamingController = () => {
  router.get("/", (req: Request, res: Response) => {
    console.log("location");

    const { location } = req.query;
    console.log(location);
    if (!location) {
      res.status(500).send("no hay path");
    } else {
      const path = Path.resolve("/home/julian", "Downloads", location as any);
      const stat = fs.statSync(path);
      const fileSize = stat.size;
      const range = req.headers.range;

      if (range) {
        const parts = range.replace(/bytes=/, "").split("-");
        const start = parseInt(parts[0], 10);
        const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
        const chunksize = end - start + 1;
        const file = fs.createReadStream(path, { start, end });
        const head = {
          "Content-Range": `bytes ${start}-${end}/${fileSize}`,
          "Accept-Ranges": "bytes",
          "Content-Length": chunksize,
          "Content-Type": "video/mp4",
        };
        res.writeHead(206, head);
        file.pipe(res);
      } else {
        const head = {
          "Content-Length": fileSize,
          "Content-Type": "video/mp4",
        };
        res.writeHead(200, head);
        fs.createReadStream(path).pipe(res);
      }
    }
  });

  return router;
};

export default streamingController;
