test("Gameboard creation of 10 X 10 grid (array), length === 100", () => {
  let playerBoard = gameboard();

  expect(playerBoard.length).toEqual(100);
});
