const randomNumZeroToNine = () => {
  return Math.floor(Math.random() * 10);
};

const randomDirection = () => {
  let direction;
  let coinFlip = randomNumZeroToNine();

  if (coinFlip <= 4) {
    direction = "horizontal";
  } else {
    direction = "vertical";
  }

  return direction;
};

const determineSafePath = (direction, start) => {
  let path;

  if (direction === "horizontal") {
    if (start.x <= 4) {
      path = "right";
    } else {
      path = "left";
    }
  } else if (direction === "vertical") {
    if (start.y <= 4) {
      path = "down";
    } else {
      path = "up";
    }
  }
  return path;
};

module.exports = { randomNumZeroToNine, randomDirection, determineSafePath };
