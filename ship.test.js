const { ship } = require("./ship");

test("Ship factory returns Carrier object with properties name (string), length (int), hits (int), sunk (bool)", () => {
  expect(ship("Carrier")).toStrictEqual({
    name: "Carrier",
    length: 5,
    hits: 0,
    sunk: false,
  });
});

test("Ship factory returns Battleship object with properties name (string), length (int), hits (int), sunk (bool)", () => {
  expect(ship("Battleship")).toStrictEqual({
    name: "Battleship",
    length: 4,
    hits: 0,
    sunk: false,
  });
});

test("Ship factory returns Destroyer object with properties name (string), length (int), hits (int), sunk (bool)", () => {
  expect(ship("Destroyer")).toStrictEqual({
    name: "Destroyer",
    length: 3,
    hits: 0,
    sunk: false,
  });
});

test("Ship factory returns Submarine object with properties name (string), length (int), hits (int), sunk (bool)", () => {
  expect(ship("Submarine")).toStrictEqual({
    name: "Submarine",
    length: 3,
    hits: 0,
    sunk: false,
  });
});

test("Ship factory returns Patrol Boat object with properties name (string), length (int), hits (int), sunk (bool)", () => {
  expect(ship("Patrol Boat")).toStrictEqual({
    name: "Patrol Boat",
    length: 2,
    hits: 0,
    sunk: false,
  });
});

test("Ship hit method increments hit count by 1", () => {
  let PB = ship("Patrol Boat");
  expect(PB).toStrictEqual({
    name: "Patrol Boat",
    length: 2,
    hits: 0,
    sunk: false,
  });

  expect(PB.hit()).toStrictEqual({
    name: "Patrol Boat",
    length: 2,
    hits: 1,
    sunk: false,
  });
});
