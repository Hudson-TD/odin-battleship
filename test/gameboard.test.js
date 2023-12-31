const { gameboard } = require("../src/gameboard");

test("Gameboard creation of 10 X 10 grid (array), length === 100", () => {
  let exampleBoard = gameboard();
  let boardSize = exampleBoard.grid.length;
  expect(boardSize).toEqual(100);
});

test("Test random grid obj to match expected format", () => {
  let exampleBoard = gameboard();
  let randomGridEl = Math.floor(Math.random() * (100 - 1 + 1) + 1);
  let expectedResult = {
    x: expect.any(Number),
    y: expect.any(Number),
    shipName: undefined,
    attacked: false,
  };

  expect(exampleBoard.grid[randomGridEl]).toMatchObject(expectedResult);
});

test("receiveAttack method invoked results in grid[x].attacked === true", () => {
  let exampleBoard = gameboard();
  exampleBoard.receiveAttack(2, 4);
  exampleBoard.grid.forEach((obj) => {
    if (obj.x === 2 && obj.y === 4) {
      expect(obj.attacked === true);
    }
  });
});

test("Invocation of receiveAttack method on non-occupied grid tile results in object being added to missedShots array", () => {
  let exampleBoard = gameboard();
  exampleBoard.receiveAttack(0, 5);
  expect(exampleBoard.missedShots).toStrictEqual([{ x: 0, y: 5 }]);
  exampleBoard.receiveAttack(2, 7);
  expect(exampleBoard.missedShots).toStrictEqual([
    { x: 0, y: 5 },
    { x: 2, y: 7 },
  ]);
  exampleBoard.receiveAttack(9, 9);
  expect(exampleBoard.missedShots).toStrictEqual([
    { x: 0, y: 5 },
    { x: 2, y: 7 },
    { x: 9, y: 9 },
  ]);
});

test("Invocation of ship in gameboard results in grid updating shipName property on appropriate objects", () => {
  let exampleBoard = gameboard();
  let carrierCounter = 0;
  let battleshipCounter = 0;
  let destroyerCounter = 0;
  let submarineCounter = 0;
  let patrolCounter = 0;
  exampleBoard.plotFleet();

  exampleBoard.grid.forEach((obj) => {
    if (obj.shipName === "Carrier") {
      carrierCounter++;
    } else if (obj.shipName === "Battleship") {
      battleshipCounter++;
    } else if (obj.shipName === "Destroyer") {
      destroyerCounter++;
    } else if (obj.shipName === "Submarine") {
      submarineCounter++;
    } else if (obj.shipName === "Patrol Boat") {
      patrolCounter++;
    }
  });

  expect(carrierCounter).toStrictEqual(5);
  expect(battleshipCounter).toStrictEqual(4);
  expect(destroyerCounter).toStrictEqual(3);
  expect(submarineCounter).toStrictEqual(3);
  expect(patrolCounter).toStrictEqual(2);
});

test("receiveAttack method causes corresponding ship obj to invoke hit method", () => {
  let exampleBoard = gameboard();
  let myExampleCarrier = exampleBoard.myFleet[0];
  //setting grid index (coords 0,0) manually for testing
  exampleBoard.grid[0].shipName = "Carrier";
  exampleBoard.receiveAttack(0, 0);

  expect(myExampleCarrier.hits).toEqual(1);
});

test("Ship receives enough attacks to trigger isSunk method and obj property update", () => {
  let exampleBoard = gameboard();
  let myExampleSubmarine = exampleBoard.myFleet[3];
  //Manual placement of submarine's 3 coordinates
  exampleBoard.grid[0].shipName = "Submarine";
  exampleBoard.grid[1].shipName = "Submarine";
  exampleBoard.grid[2].shipName = "Submarine";

  exampleBoard.receiveAttack(0, 0);
  expect(myExampleSubmarine.hits).toBe(1);
  exampleBoard.receiveAttack(0, 1);
  expect(myExampleSubmarine.hits).toBe(2);
  exampleBoard.receiveAttack(0, 2);
  expect(myExampleSubmarine.sunk).toEqual(true);
});

test("Ship receives enough attacks to trigger isSunk method and obj property update", () => {
  let exampleBoard = gameboard();
  let myExampleBattleship = exampleBoard.myFleet[1];
  //Manual placement of submarine's 3 coordinates
  exampleBoard.grid[0].shipName = "Battleship";
  exampleBoard.grid[1].shipName = "Battleship";
  exampleBoard.grid[2].shipName = "Battleship";
  exampleBoard.grid[3].shipName = "Battleship";

  exampleBoard.receiveAttack(0, 0);
  exampleBoard.receiveAttack(0, 1);
  exampleBoard.receiveAttack(0, 2);
  exampleBoard.receiveAttack(0, 3);

  expect(myExampleBattleship.hits).toBe(4);
  expect(myExampleBattleship.sunk).toEqual(true);

  exampleBoard.checkSunkShips();
  expect(exampleBoard.sunkShips).toStrictEqual(["Battleship"]);
});

test("When sunkShips array contains all 5 ships, trigger game over", () => {
  let exampleBoard = gameboard();

  exampleBoard.sunkShips.push(
    "Carrier",
    "Battleship",
    "Destroyer",
    "Submarine",
    "Patrol Boat"
  );

  exampleBoard.checkGameOver();

  expect(exampleBoard.isGameOver).toEqual(true);
});
