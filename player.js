const { gameboard } = require("./gameboard");

const player = () => {
  return {
    gameBoard: gameboard(),
    isComputer: false,
  };
};

let playerOne = player();
