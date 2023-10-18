function renderPlayerCreationEl() {
  const body = document.querySelector("body");
  let containerEl = document.createElement("div");
  containerEl.classList.add("player-creation-container");

  let overviewText = document.createElement("p");

  overviewText.innerText = `You are about to enter unfamiliar waters in an effort to neutralize enemy ships. Due to thick fog our strategy is simple, fire artillery and observe any contact. Intel suggests the enemy fleet contains 5 ships of varying sizes...
  
  Instructions:
  
  Using arial reconnaissance order fire on mapped coordinates. Hits will be recorded with an explosion marker, while misses will be indicated with a water marker.`;

  let formEl = document.createElement("form");
  formEl.setAttribute("name", "player-creation-form");
  formEl.setAttribute("class", "player-creation-form");

  let inputEl = document.createElement("input");
  inputEl.setAttribute("id", "playerName");
  inputEl.setAttribute("type", "text");
  inputEl.setAttribute("min", "1");
  inputEl.required = true;
  inputEl.setAttribute("max", "25");
  inputEl.setAttribute("placeholder", "Enter Player Name");

  let btnEl = document.createElement("button");
  btnEl.setAttribute("id", "playerSubmit");
  btnEl.setAttribute("type", "submit");
  btnEl.setAttribute("for", "player-creation-form");
  btnEl.innerText = "Launch Fleet";

  body.appendChild(containerEl);
  containerEl.appendChild(formEl);
  formEl.appendChild(overviewText);
  formEl.appendChild(inputEl);
  formEl.appendChild(btnEl);
}

function generateGameboardEl(player) {
  const dataArray = [...player.board.grid];
  const mainContainer = document.querySelector(".main-content-container");
  const tableContainer = document.createElement("div");
  const table = document.createElement("table");
  table.setAttribute("class", "gameboard-table");
  const playerHeading = document.createElement("th");
  playerHeading.innerText = `${player.name}'s Fleet`;
  tableContainer.appendChild(playerHeading);

  for (let i = 0; i < 10; i++) {
    const row = document.createElement("tr");
    row.setAttribute("class", "gameboard-row");

    for (let j = 0; j < 10; j++) {
      const dataIndex = i * 10 + j;

      if (dataIndex < dataArray.length) {
        const cell = document.createElement("td");
        row.appendChild(cell);
        cell.setAttribute("data-x", `${dataArray[dataIndex].x}`);
        cell.setAttribute("data-y", `${dataArray[dataIndex].y}`);
        cell.setAttribute("data-attacked", `${dataArray[dataIndex].attacked}`);
        cell.setAttribute("data-ship", `${dataArray[dataIndex].shipName}`);
        cell.setAttribute("class", "gameboard-tile");
        // Only add event listeners to enemy gameboard
        if (player.name === "Computer") {
          cell.classList.add("enemy-tile");
        } else if (player.name !== "Computer") {
          cell.classList.add("player-tile");
        }
      }
    }
    table.appendChild(row);
  }
  tableContainer.appendChild(table);
  mainContainer.appendChild(tableContainer);
}

function handleHitsAndMisses() {
  const allGridItems = document.querySelectorAll(".gameboard-tile");
  allGridItems.forEach((tile) => {
    let status = tile.getAttribute("data-attacked");
    let name = tile.getAttribute("data-ship");
    if (status === "true" && name === "undefined") {
      tile.classList.remove("enemy-tile");
      tile.classList.add("missed");
    }

    if (status === "true" && name !== "undefined") {
      tile.classList.remove("enemy-tile");
      tile.classList.add("hit");
    }
  });
}

function handlePlayerGrid() {
  const allPlayerTies = document.querySelectorAll(".player-tile");
  allPlayerTies.forEach((tile) => {
    let name = tile.getAttribute("data-ship");
    if (name !== "undefined") {
      tile.classList.add("occupied");
    }
  });
}

module.exports = {
  renderPlayerCreationEl,
  generateGameboardEl,
  handleHitsAndMisses,
  handlePlayerGrid,
};
