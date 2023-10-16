const { ship } = require("../src/ship");

test("Ship factory returns all ship objects with properties name (string), length (int), hits (int), sunk (bool)", () => {
  let newCarrier = ship("Carrier");
  let expectedCarrier = {
    name: "Carrier",
    length: 5,
    hits: 0,
    sunk: false,
  };
  let newBattleship = ship("Battleship");
  let expectedBattleship = {
    name: "Battleship",
    length: 4,
    hits: 0,
    sunk: false,
    hit: expect.any(Function),
    isSunk: expect.any(Function),
  };
  let newDestroyer = ship("Destroyer");
  let expectedDestroyer = {
    name: "Destroyer",
    length: 3,
    hits: 0,
    sunk: false,
    hit: expect.any(Function),
    isSunk: expect.any(Function),
  };
  let newSubmarine = ship("Submarine");
  let expectedSubmarine = {
    name: "Submarine",
    length: 3,
    hits: 0,
    sunk: false,
    hit: expect.any(Function),
    isSunk: expect.any(Function),
  };
  let newPatrol = ship("Patrol Boat");
  let expectedPatrol = {
    name: "Patrol Boat",
    length: 2,
    hits: 0,
    sunk: false,
    hit: expect.any(Function),
    isSunk: expect.any(Function),
  };
  expect(newCarrier).toMatchObject(expectedCarrier);
  expect(newBattleship).toMatchObject(expectedBattleship);
  expect(newDestroyer).toMatchObject(expectedDestroyer);
  expect(newSubmarine).toMatchObject(expectedSubmarine);
  expect(newPatrol).toMatchObject(expectedPatrol);
});

test("Ship hit method increments obj.hits by 1 on each invocation", () => {
  let newShip = ship("Battleship");
  newShip.hit();
  let expectedHitsOne = {
    name: "Battleship",
    length: 4,
    hits: 1,
    sunk: false,
    hit: expect.any(Function),
    isSunk: expect.any(Function),
  };
  expect(newShip).toMatchObject(expectedHitsOne);
  newShip.hit();
  newShip.hit();
  let expectedHitsThree = {
    name: "Battleship",
    length: 4,
    hits: 3,
    sunk: false,
    hit: expect.any(Function),
    isSunk: expect.any(Function),
  };
  expect(newShip).toMatchObject(expectedHitsThree);
});

test("Ship status updates from false to true when hits === length", () => {
  let newShip = ship("Submarine");
  expect(newShip.sunk).toBe(false);
  newShip.hit();
  expect(newShip.sunk).toBe(false);
  newShip.hit();
  expect(newShip.sunk).toBe(false);
  newShip.hit();
  expect(newShip.sunk).toBe(true);
});

test("Return array of objects with x/y coordinates matching ship length", () => {
  let newShip = ship("Carrier");
  expect(newShip.length).toBe(5);

  expect(newShip.location).toEqual([
    { x: expect.any(Number), y: expect.any(Number) },
    { x: expect.any(Number), y: expect.any(Number) },
    { x: expect.any(Number), y: expect.any(Number) },
    { x: expect.any(Number), y: expect.any(Number) },
    { x: expect.any(Number), y: expect.any(Number) },
  ]);
});
