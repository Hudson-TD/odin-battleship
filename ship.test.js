const { ship } = require("./ship");

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
  };
  let newDestroyer = ship("Destroyer");
  let expectedDestroyer = {
    name: "Destroyer",
    length: 3,
    hits: 0,
    sunk: false,
  };
  let newSubmarine = ship("Submarine");
  let expectedSubmarine = {
    name: "Submarine",
    length: 3,
    hits: 0,
    sunk: false,
  };
  let newPatrol = ship("Patrol Boat");
  let expectedPatrol = {
    name: "Patrol Boat",
    length: 2,
    hits: 0,
    sunk: false,
  };
  expect(newCarrier).toStrictEqual(expectedCarrier);
  expect(newBattleship).toStrictEqual(expectedBattleship);
  expect(newDestroyer).toStrictEqual(expectedDestroyer);
  expect(newSubmarine).toStrictEqual(expectedSubmarine);
  expect(newPatrol).toStrictEqual(expectedPatrol);
});
