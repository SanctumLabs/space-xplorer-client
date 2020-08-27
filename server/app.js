const express = require('express');
const path = require('path');
const rateLimit = require('express-rate-limit');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 8080;
const API_URL = process.env.API_URL;
const SENTRY_DSN = process.env.SENTRY_DSN;
const APOLLO_KEY = process.env.APOLLO_KEY;

app.use(express.static(path.join(__dirname, 'build')));

// https://www.npmjs.com/package/express-rate-limit
const rateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
});

/**
 * Health endpoint to check status of server
 */
app.get('/health', function (req, res) {
  return res
    .json({
      status: 'OK',
      message: 'All Good!',
    })
    .status(200);
});

// this allows the dynamic passing of environment variables to the static running application
function updateEnv() {
  try {
    const env = `window._env_= {API_URL: '${API_URL}', SENTRY_DSN: '${SENTRY_DSN}', APOLLO_KEY: '${APOLLO_KEY}'}`;

    const envFile = path.join(__dirname, 'build', 'env-config.js');

    fs.writeFile(envFile, env, function (err) {
      if (err) console.error(`Failed to update env ${err}`);
    });
  } catch (error) {
    console.error(`Failed to update env ${error}`);
  }
}

app.get('/*', rateLimiter, function (req, res) {
  // update env before serving application
  updateEnv();
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT);
