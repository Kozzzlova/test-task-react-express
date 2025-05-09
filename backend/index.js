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
  const { status, sortBy, sortOrder } = req.query

  const validStatus = ['Won', 'Lost', 'Pending'];
  const validFields = ['status', 'amount', 'betId'];
  const validOrders = ['asc', 'desc'];

  const errors = []
  
  if (status && !validStatus.includes(status)) {
    errors.push(`Invalid value of status ${status}`)
  }
  if (sortBy && !validFields.includes(sortBy)) {
    errors.push(`Invalid value of sortBy ${sortBy}`)
  }
  if (sortOrder && !validOrders.includes(sortOrder)) {
    errors.push(`Invalid value of sortOrder ${sortOrder}`)
  }

  if (errors.length > 0) {
    return res.status(400).json({ message: 'Invalid query parameters', errors });
  }
  try {
    const bets = betService.getBets({status, sortBy, sortOrder});
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
