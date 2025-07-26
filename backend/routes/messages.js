import express from "express";
const router = express.Router();
import db from "../models/index.js";
const { Messages } = db;

// CREATE
router.post("/send", async (req, res) => {
    const { text, id } = req.body;
    const message = await Messages.create({ text, id });
    res.status(201).json(message);
});

// READ all
router.get("/get", async (req, res) => {
    try {
        const messages = await Messages.findAll();
        res.json(messages);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
});

// UPDATE
router.put("/edit", async (req, res) => {
    const { id } = req.params;
    const { text } = req.body;
    const message = await Messages.findByPk(id);
    if (!message) return res.status(404).json({ error: "Not found" });

    message.text = text;
    await message.save();
    res.json(message);
});

// DELETE
router.delete("/remove/:id", async (req, res) => {
    const { id } = req.params;
    const message = await Messages.findByPk(id);
    if (!message) return res.status(404).json({ error: "Not found" });

    await message.destroy();
    res.json({ message: "Deleted" });
});

export default router;
