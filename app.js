const express = require('express');
const app = express();
const port = 3000;

const examGroupRoutes = require('./routes/examGroup');
const examsRoutes = require('./routes/exams');

app.use(express.json()); // Enable JSON parsing
app.use('/exam-group', examGroupRoutes);
app.use('/exams', examsRoutes); // Registering exams routes

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
