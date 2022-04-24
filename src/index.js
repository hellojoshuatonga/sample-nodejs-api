const express = require('express');
const memer = require('random-jokes-api');

const app = express();
const PORT = 3000;

app.get('/api/jokes', (req, res) => {
  res.json({
    text: memer.joke(),
  });
});

app.listen(PORT, () => {
  console.log(`API listening on port ${PORT}`);
});
