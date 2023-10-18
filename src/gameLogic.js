const {
  renderPlayerCreationEl,
  generateGameboardEl,
  handleHitsAndMisses,
  handlePlayerGrid,
  checkGameOver,
} = require("./domController");
const { player } = require("./player");
const { computerLegalAttack } = require("./computerActions");

const game = () => {
  return {
    playerOneName: undefined,
    playerTwoName: "Computer",
    playerOne: undefined,
    PlayerTwo: undefined,
    init: function () {
      renderPlayerCreationEl();
      this.cacheDom();
      this.startEventListening();
    },
    cacheDom: function () {
      this.formContainer = document.querySelector(".player-creation-container");
      this.formSubmitBtn = document.getElementById("playerSubmit");
      this.formInput = document.getElementById("playerName");
    },
    startEventListening: function () {
      this.formSubmitBtn.addEventListener("click", (e) => {
        e.preventDefault();
        this.playerOneName = this.formInput.value;
        this.formContainer.classList.add("hidden");
        this.handleGameSetup();
      });
    },
    handleGameSetup: function () {
      this.playerOne = player(this.playerOneName);
      this.PlayerTwo = player(this.playerTwoName);
      this.handlePlotting();
      generateGameboardEl(this.playerOne);
      generateGameboardEl(this.PlayerTwo);
      handlePlayerGrid();
      this.startAttackListening();
    },
    startAttackListening: function () {
      const cells = document.querySelectorAll(".enemy-tile");
      cells.forEach((cell) => {
        cell.addEventListener(
          "click",
          (e) => {
            e.target.setAttribute("data-attacked", "true");
            let enemyX = e.target.getAttribute("data-x");
            let enemyY = e.target.getAttribute("data-y");
            this.PlayerTwo.board.receiveAttack(enemyX, enemyY);
            let computerAttack = computerLegalAttack(this.playerOne);
            this.playerOne.board.receiveAttack(
              computerAttack.x,
              computerAttack.y
            );
            const playerOneTiles = document.querySelectorAll(".player-tile");
            playerOneTiles.forEach((tile) => {
              let playerX = tile.getAttribute("data-x");
              let playerY = tile.getAttribute("data-y");
              if (
                playerX === String(computerAttack.x) &&
                playerY === String(computerAttack.y)
              ) {
                tile.setAttribute("data-attacked", "true");
              }
            });
            handleHitsAndMisses();
            checkGameOver(this.playerOne, this.PlayerTwo);
          },
          { once: true }
        );
      });
    },
    handlePlotting: function () {
      this.playerOne.board.plotFleet();
      this.PlayerTwo.board.plotFleet();
    },
  };
};

module.exports = { game };
