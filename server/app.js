const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;
const API_URL = process.env.API_URL;
const SENTRY_DSN = process.env.SENTRY_DSN;
const APOLLO_KEY = process.env.APOLLO_KEY;

app.use(express.static(path.join(__dirname, 'build')));

/**
 * Health endpoint to check status of server
 */
app.get('/health', function (req, res) {
    return res.json({
        status: "OK",
        message: "All Good!"
    }).status(200);
});

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT);