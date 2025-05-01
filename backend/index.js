require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT;

const betService = require('./bll/betService');
const { seedBets } = require('./dal/betRepository');

app.use(express.json());
app.use(cors());

seedBets();

app.get('/bets', (req, res) => {
  try {
    const bets = betService.getBets();
    res.json(bets);
  } catch {
    res.status(500).json({ message: 'Server failed' });
  }
});

app.put('/bets/:betId', (req, res) => {
  const betId = parseInt(req.params.betId);
  const { status } = req.body;

  if (!status) {
    return res.status(400).json({ message: 'Status is required' });
  }

  try {
    const updatedId = betService.updateBet(betId, status);
    res.json({ message: 'Bet updated successfully', updatedId });
  } catch (err) {
    if (err.message === 'NOT_FOUND') {
      res.status(404).json({ message: 'ID doesn’t exist' });
    } else {
      res.status(500).json({ message: 'Server failed' });
    }
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
