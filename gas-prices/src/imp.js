import express from "express";
import client from './server';

const router = express.Router();

// router.get("/imp", async (request, response, next) => {
//   const { img_link } = request.query;
//   if (!img_link) return response.status(200).json({ 'Error': 'Image not linked' })
//   const [result] = await client.textDetection(fileName);
//   const detections = result.textAnnotations;
//   response.status(200).json(detections);
// });

router.post("/imp", async (request, response, next) => {
  const { img_link } = request.query;
  if (!img_link) return response.status(200).json({ 'Error': 'Image not linked' })
  const [result] = await client.textDetection(fileName);
  const detections = result.textAnnotations;
  response.status(200).json(detections);
});

export default router;
