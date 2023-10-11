const { gameboard } = require("./gameboard");

test("Gameboard creation of 10 X 10 grid (array), length === 100", () => {
  let exampleBoard = gameboard();
  let examplePlayerBoard = exampleBoard.playerBoard.length;
  let exampleEnemyBoard = exampleBoard.playerBoard.length;

  expect(exampleBoard).toHaveProperty("playerBoard");
  expect(examplePlayerBoard).toEqual(100);
  expect(exampleBoard).toHaveProperty("enemyBoard");
  expect(exampleEnemyBoard).toEqual(100);
});
