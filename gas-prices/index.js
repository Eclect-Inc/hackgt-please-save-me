var express = require("express");
var app = express();
const vision = require('@google-cloud/vision');
const client = new vision.ImageAnnotatorClient();

async function quickstart(fileName) {
    // Imports the Google Cloud client library
    // const fileName = 'https://s3-external-1.amazonaws.com/media.twiliocdn.com/ACef992ed48ff1c4ce327ae89b7965a51c/355c97ad482ee4f6d98c8f9ba6c20b7e';
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