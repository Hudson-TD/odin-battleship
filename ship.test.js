test("Ship factory returns Carrier object with properties name (string), length (int), hits (int), sunk (bool)", () => {
  expect(ship("Carrier")).toBe({
    name: "Carrier",
    length: 5,
    hits: 0,
    sunk: false,
  });
});
