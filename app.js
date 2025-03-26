const express = require('express');
const app = express();
const port = 3000;

const examGroupRoutes = require('./routes/ExamGroup');

app.use('/exam-group', examGroupRoutes);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
