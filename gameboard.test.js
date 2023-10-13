const { gameboard } = require("./gameboard");

test("Gameboard creation of 10 X 10 grid (array), length === 100", () => {
  let exampleBoard = gameboard();
  let boardSize = exampleBoard.grid.length;

  expect(exampleBoard).toHaveProperty("grid");
  expect(boardSize).toEqual(100);
});
