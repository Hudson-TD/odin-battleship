const { gameboard } = require("./gameboard");

test("Gameboard creation of 10 X 10 grid (array), length === 100", () => {
  let exampleBoard = gameboard();
  let boardSize = exampleBoard.grid.length;
  expect(boardSize).toEqual(100);
});

test("Test random grid obj to match expected format", () => {
  let exampleBoard = gameboard();
  let randomGridEl = Math.floor(Math.random() * (100 - 1 + 1) + 1);
  let expectedResult = {
    coordinate: expect.any(Number),
    shipName: undefined,
    attacked: false,
  };

  expect(exampleBoard.grid[randomGridEl]).toMatchObject(expectedResult);
});

test("receiveAttack() method invoked results in grid[x].attacked === true", () => {
  let exampleBoard = gameboard();
  exampleBoard.receiveAttack(5);
  expect(exampleBoard.grid[4].attacked).toEqual(true);
});
