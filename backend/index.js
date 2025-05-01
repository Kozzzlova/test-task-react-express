const express = require('express')
const cors = require('cors')
const Database = require('better-sqlite3');
const app = express()
const port = 5000

app.use(express.json());
app.use(cors());

const db = new Database('./bets.db');

db.prepare(`
  CREATE TABLE IF NOT EXISTS bets (
    betId INTEGER PRIMARY KEY AUTOINCREMENT,
    userId TEXT NOT NULL,
    eventName TEXT NOT NUll,
    amount INTEGER NOT NULL,
    status TEXT NOT NULL
  )
`).run();

const betCount = db.prepare('SELECT COUNT(*) AS count FROM bets').get().count;
if (betCount === 0) {
  const insert = db.prepare('INSERT INTO bets (userId, eventName, amount, status) VALUES (?, ?, ?, ?)');
  insert.run('user_0001', 'Football: Team A vs Team B', 75, 'Pending');
  insert.run('user_0002', 'Football: Team C vs Team D', 50, 'Won');
  insert.run('user_0003', 'Tennis: Player E vs Player F', 25, 'Lost');
}

app.get('/bets', (req, res) => {
  try {
    const bets = db.prepare('SELECT * FROM bets').all();
    res.json(bets);
  } catch (error) {
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
    const bet = db.prepare('SELECT * FROM bets WHERE betId = ?').get(betId);

    if (!bet) {
      return res.status(404).json({ message: 'ID doesn`t exist' });
    }

    db.prepare('UPDATE bets SET status = ? WHERE betId = ?').run(status, betId);

    res.json({ message: 'Bet updated successfully', updatedId: betId });
  } catch (error) {
    res.status(500).json({ message: 'Server failed' });
  }
});



app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
