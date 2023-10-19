function removeMatchingObjects(arrOne, arrTwo) {
  return arrOne.filter(
    (objOne) =>
      !arrTwo.some((objTwo) => objOne.x === objTwo.x && objOne.y === objTwo.y)
  );
}

function randomNumGen() {
  return Math.floor(Math.random() * 5) + 1;
}

module.exports = {
  removeMatchingObjects,
  randomNumGen,
};
