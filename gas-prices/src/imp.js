import express from "express";

const router = express.Router();

router.get("/test", (request, response, next) => {
  console.log(request);
  response.status(200).json(request.query);
});

router.post("/imp", (request, response, next) => {
  console.log(request);
  response.status(200).json(request.query);
});

export default router;
