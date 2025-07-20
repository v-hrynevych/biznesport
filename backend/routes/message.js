import express from "express";
const router = express.Router();
import { Message } from "../models/messege";
// CREATE
router.post("/", async (req, res) => {
    const { text, author } = req.body;
    const message = await Message.create({ text, author });
    res.status(201).json(message);
});

// READ all
router.get("/get", async (req, res) => {
    const messages = await Message.findAll();
    res.json(messages);
});

// UPDATE
router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const { text } = req.body;
    const message = await Message.findByPk(id);
    if (!message) return res.status(404).json({ error: "Not found" });

    message.text = text;
    await message.save();
    res.json(message);
});

// DELETE
router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const message = await Message.findByPk(id);
    if (!message) return res.status(404).json({ error: "Not found" });

    await message.destroy();
    res.json({ message: "Deleted" });
});

export default router;
