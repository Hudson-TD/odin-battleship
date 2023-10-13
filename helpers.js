const randomNumZeroToNine = () => {
  return Math.floor(Math.random() * 10);
};

const randomDirection = (start) => {
  let direction;
  let coinFlip = randomNumZeroToNine();

  if (coinFlip <= 4) {
    direction = "horizontal";
  } else {
    direction = "vertical";
  }

  return direction;
};

const determineSafeSpace = () => {};

module.exports = { randomNumZeroToNine, randomDirection };
