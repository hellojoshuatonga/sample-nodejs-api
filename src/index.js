const express = require('express');
const memer = require('random-jokes-api');

const app = express();
const PORT = 3000;

app.get('/healthcheck', (req, res) => {
  // Check if system is health, db connections, etc
  return res.json({ status: 'healthy' });
})

app.get('/api/jokes', (req, res) => {
  res.json({
    text: memer.joke(),
  });
});

const server = app.listen(PORT, () => {
  console.log(`API listening on port ${PORT}`);
});

const closeGracefully = (signal) => {
  console.log(`Received signal to terminate: ${signal}`);
  server.close((err) => {
    if (err) {
      console.log('Error closing connections', err);
      return;
    }

    console.log('HTTP server closed');
  })
}

process.once('SIGINT', closeGracefully);
process.once('SIGTERM', closeGracefully);
