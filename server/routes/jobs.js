const express = require("express");
const Job = require("../models/Job");
const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const job = new Job(req.body);
        await job.save();
        res.status(201).json(job);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get("/", async (req, res) => {
    try {
        const jobs = await Job.find();
        res.status(200).json(jobs);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
