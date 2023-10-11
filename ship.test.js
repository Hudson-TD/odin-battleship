const { ship } = require("./ship");

test("Ship factory returns all ship objects with properties name (string), length (int), hits (int), sunk (bool)", () => {
  let newCarrier = ship("Carrier");
  let newBattleship = ship("Battleship");
  let newDestroyer = ship("Destroyer");
  let newSubmarine = ship("Submarine");
  let newPatrol = ship("Patrol Boat");
  expect(newCarrier).toMatchObject({ ...newCarrier });
  expect(newBattleship).toMatchObject({ ...newBattleship });
  expect(newDestroyer).toMatchObject({ ...newDestroyer });
  expect(newSubmarine).toMatchObject({ ...newSubmarine });
  expect(newPatrol).toMatchObject({ ...newPatrol });
});
