const { gameboard } = require("./gameboard");

const player = () => {
  return {
    gameBoard: gameboard(),
    isComputer: false,
  };
};

module.exports = { player };
