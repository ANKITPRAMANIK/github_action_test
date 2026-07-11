import express from "express";
import dotenv from "dotenv";
import cors from "cors";


dotenv.config();
const port = Number(process.env.PORT || 3000);
const host = process.env.HOST || "0.0.0.0";

const app = express();
app.use(cors());

app.get("/", (req, res) => {
    res.status(200).send("server is running successfully...");
});

app.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});