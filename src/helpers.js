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

function removeMatchingObjects(arrOne, arrTwo) {
  return arrOne.filter(
    (objOne) =>
      !arrTwo.some((objTwo) => objOne.x === objTwo.x && objOne.y === objTwo.y)
  );
}

module.exports = {
  randomNumZeroToNine,
  randomDirection,
  determineSafePath,
  removeMatchingObjects,
};
