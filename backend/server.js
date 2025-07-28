const express = require('express');
const axios = require('axios');
const app = express();
const port = 5000;

app.use(express.json());

// Mock Redstone API
app.get('/market-data', (req, res) => {
  res.json({ apy: 3.5, interest: 5.0, stakeYield: 2.0 });
});

// Mock Blocksense API
app.get('/transactions', (req, res) => {
  res.json([
    { description: 'Lent 0.5 BTC', amount: 0.5 },
    { description: 'Borrowed 0.2 BTC', amount: 0.2 },
  ]);
});

// Mock Stork messaging
app.post('/notify', (req, res) => {
  console.log('Notification sent:', req.body.message);
  res.json({ status: 'sent' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});