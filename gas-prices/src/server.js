import "dotenv/config";
import cors from "cors";
import logger from "morgan";
import bodyParser from "body-parser";
import express from "express";
const vision = require('@google-cloud/vision');
const client = new vision.ImageAnnotatorClient();
// import route from "./route";
import imp from "./imp";

const app = express();
const production = process.env.NODE_ENV === "production";
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(logger(production ? "combined" : "dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(imp);
// app.use(route);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});

export default client