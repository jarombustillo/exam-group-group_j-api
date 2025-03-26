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

// PUT /exams/:id - Update an existing exam
router.put('/:id', (req, res) => {
    const examId = parseInt(req.params.id);
    const { name, date } = req.body;

    // Find the exam by ID
    const examIndex = exams.findIndex((exam) => exam.id === examId);

    if (examIndex === -1) {
        return res.status(404).json({ error: "Exam not found." });
    }

    // Update the exam details
    if (name) exams[examIndex].name = name;
    if (date) exams[examIndex].date = date;

    res.json(exams[examIndex]);
});

module.exports = router;
