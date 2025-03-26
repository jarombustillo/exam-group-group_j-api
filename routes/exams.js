const express = require('express');
const router = express.Router();

const exams = [
    { id: 1, name: "Math Exam", date: "2025-04-10" },
    { id: 2, name: "Physics Exam", date: "2025-04-15" },
    { id: 3, name: "Chemistry Exam", date: "2025-04-20" }
];

router.get('/', (req, res) => {
    res.json(exams);
});

module.exports = router;
