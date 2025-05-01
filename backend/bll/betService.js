const betRepo = require('../dal/betRepository');

const getBets = () => {
  return betRepo.getAllBets();
};

const updateBet = (betId, status) => {
  const bet = betRepo.getBetById(betId);
  if (!bet) {
    throw new Error('NOT_FOUND');
  }
  betRepo.updateBetStatus(betId, status);
  return betId;
};

module.exports = {
  getBets,
  updateBet,
};
