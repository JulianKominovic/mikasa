import express from "express";
import routes from "./routes";
import path from "path";

const app = express();
const port = 3000;
const host = "localhost";
app.use(express.static(path.resolve(__dirname, "../static")));
app.use(routes());

app.listen(
  (process.env as any).PORT || port,
  (process.env as any).HOST || host,
  () => {
    console.log(`Example app listening on port ${port}`);
  }
);
