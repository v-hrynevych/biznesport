import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { config } from "dotenv";
import messageRoutes from "./routes/message.js";

// Initialize environment variables
config();
const app = express();
app.use(cors());
const { Message } = require("../models");

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
// Middleware
app.use(bodyParser.json());

app.use("/api/messages", messageRoutes);

// Global Error Handling Middleware
app.use((error, req, res, next) => {
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data;

    res.status(status).json({ success: false, message: message, data: data });
});
