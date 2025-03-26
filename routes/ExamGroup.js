const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: "Group Group J API" });
});

module.exports = router;
