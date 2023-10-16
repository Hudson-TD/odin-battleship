const { gameboard } = require("./gameboard.js");

const player = (name) => {
  return {
    name: name,
    isTurn: false,
    board: gameboard(),
  };
};

module.exports = { player };
