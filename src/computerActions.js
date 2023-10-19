const { removeMatchingObjects } = require("./helpers");

function computerLegalAttack(player) {
  let illegalMoves = [];
  let attackOptions = [];
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      attackOptions.push({
        x: i,
        y: j,
      });
    }
  }

  player.board.missedShots.forEach((obj) => {
    illegalMoves.push(obj);
  });

  player.board.hits.forEach((obj) => {
    illegalMoves.push(obj);
  });

  let legalAttacks = removeMatchingObjects(attackOptions, illegalMoves);

  let randomLegalAttack =
    legalAttacks[Math.floor(Math.random() * legalAttacks.length)];

  return randomLegalAttack;
}

module.exports = { computerLegalAttack };
