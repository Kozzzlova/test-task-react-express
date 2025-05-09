const betRepo = require('../dal/betRepository');

const getBets = ({status, sortBy, sortOrder}) => {
  return betRepo.getAllBets({status, sortBy, sortOrder});
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
