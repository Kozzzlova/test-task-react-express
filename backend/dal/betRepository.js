const Database = require('better-sqlite3');
const db = new Database('./bets.db');

db.prepare(`
  CREATE TABLE IF NOT EXISTS bets (
    betId INTEGER PRIMARY KEY AUTOINCREMENT,
    userId TEXT NOT NULL,
    eventName TEXT NOT NULL,
    amount INTEGER NOT NULL,
    status TEXT NOT NULL
  )
`).run();

const getAllBets = () => {
  return db.prepare('SELECT * FROM bets').all();
};

const getBetById = (betId) => {
  return db.prepare('SELECT * FROM bets WHERE betId = ?').get(betId);
};

const updateBetStatus = (betId, status) => {
  return db.prepare('UPDATE bets SET status = ? WHERE betId = ?').run(status, betId);
};

const seedBets = () => {
  const betCount = db.prepare('SELECT COUNT(*) AS count FROM bets').get().count;
  if (betCount === 0) {
    const insert = db.prepare('INSERT INTO bets (userId, eventName, amount, status) VALUES (?, ?, ?, ?)');
    insert.run('user_0001', 'Football: Team A vs Team B', 75, 'Pending');
    insert.run('user_0002', 'Football: Team C vs Team D', 50, 'Won');
    insert.run('user_0003', 'Tennis: Player E vs Player F', 25, 'Lost');
  }
};

module.exports = {
  getAllBets,
  getBetById,
  updateBetStatus,
  seedBets,
};