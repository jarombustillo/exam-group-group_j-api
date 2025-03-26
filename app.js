const express = require('express');
const app = express();
const port = 3000;

const examGroupRoutes = require('./routes/examGroup');
const examsRoutes = require('./routes/exams'); // Import new route

app.use('/exam-group', examGroupRoutes);
app.use('/exams', examsRoutes); // Register new route

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
