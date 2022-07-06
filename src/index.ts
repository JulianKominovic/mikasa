import express from "express";
import routes from "./routes";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const host = "localhost";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log("HOLA");

app.use(routes());
app.use(express.static(path.resolve(__dirname, "../static")));

app.listen(
  (process.env as any).PORT || port,
  (process.env as any).HOST || host,
  () => {
    console.log(`Example app listening on port ${port}`);
  }
);
