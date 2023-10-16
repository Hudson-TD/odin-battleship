const domController = () => {
  return {
    init: function () {
      const playerCreation = document.querySelector(
        ".player-creation-container"
      );
      const playerBoard = document.querySelector(".player-gameboard-container");
      const computerBoard = document.querySelector(
        ".computer-gameboard-container"
      );
    },
  };
};

module.exports = { domController };
