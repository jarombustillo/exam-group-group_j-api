const express = require('express');
const router = express.Router();

// Hardcoded list of exams (acting as an in-memory database)
let exams = [
    { id: 1, name: "Math Exam", date: "2025-04-10" },
    { id: 2, name: "Physics Exam", date: "2025-04-15" },
    { id: 3, name: "Chemistry Exam", date: "2025-04-20" }
];

// GET /exams - Return list of exams
router.get('/', (req, res) => {
    res.json(exams);
});

// POST /exams - Add a new exam
router.post('/', (req, res) => {
    const { name, date } = req.body;

    if (!name || !date) {
        return res.status(400).json({ error: "Name and date are required." });
    }

    const newExam = {
        id: exams.length + 1,
        name,
        date
    };

    exams.push(newExam);
    res.status(201).json(newExam);
});

module.exports = router;
