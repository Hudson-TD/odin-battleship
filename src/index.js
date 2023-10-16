const { renderPlayerCreationEl } = require("./domController");
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
      console.log(this.playerOne);
      console.log(this.PlayerTwo);
    },
  };
};

let newGame = game();
newGame.init();
