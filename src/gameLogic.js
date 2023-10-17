const {
  renderPlayerCreationEl,
  generateGameboardEl,
  updateDisplay,
} = require("./domController");
const { player } = require("./player");

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
      this.startAttackListening();
    },
    startAttackListening: function () {
      const cells = document.querySelectorAll(".enemy-tile");
      cells.forEach((cell) => {
        cell.addEventListener("click", (e) => {
          e.preventDefault();
          e.target.setAttribute("data-attacked", "true");
          let x = e.target.getAttribute("data-x");
          let y = e.target.getAttribute("data-y");
          this.PlayerTwo.board.receiveAttack(x, y);
          updateDisplay();
        });
      });
    },
    handlePlotting: function () {
      this.playerOne.board.plotFleet();
      this.PlayerTwo.board.plotFleet();
    },
  };
};

module.exports = { game };
