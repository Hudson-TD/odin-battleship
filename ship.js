const ship = (type) => {
  switch (type) {
    case "Carrier":
      return {
        name: type,
        length: 5,
        hits: 0,
        sunk: false,
      };
      break;
    case "Battleship":
      return {
        name: type,
        length: 4,
        hits: 0,
        sunk: false,
      };
      break;
    case "Destroyer":
      return {
        name: type,
        length: 3,
        hits: 0,
        sunk: false,
      };
      break;
    case "Submarine":
      return {
        name: type,
        length: 3,
        hits: 0,
        sunk: false,
      };
      break;
    case "Patrol Boat":
      return {
        name: type,
        length: 2,
        hits: 0,
        sunk: false,
      };
      break;

    default:
      throw new Error(
        "Please enter one of the following ship types: Carrier, Battleship, Destroyer, Submarine, or Patrol Boat"
      );
  }
};

module.exports = { ship };
