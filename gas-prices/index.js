var express = require("express");
var app = express();
const vision = require('@google-cloud/vision');
const client = new vision.ImageAnnotatorClient();

async function quickstart() {
    // Imports the Google Cloud client library
    const fileName = './resources/wakeupcat.jpg';
    // Creates a client
    const [result] = await client.textDetection(fileName);
    const detections = result.textAnnotations;
    console.log(detections);
    return detections;
}

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

app.get("/url", async (req, res, next) => {
    const a = await quickstart();
    res.json(a);
});