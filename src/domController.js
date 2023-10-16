function renderPlayerCreationEl() {
  let body = document.querySelector("body");
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

module.exports = { renderPlayerCreationEl };
