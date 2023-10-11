const ship = (type) => {
  const length = (type) => {
    switch (type) {
      case "Carrier":
        return 5;
        break;
      case "Battleship":
        return 4;
        break;
      case "Destroyer":
        return 3;
        break;
      case "Submarine":
        return 3;
        break;
      case "Patrol Boat":
        return 2;
        break;
      default:
        throw new Error("Invalid ship type provided");
        break;
    }
  };

  return {
    name: type,
    length: length(type),
    hits: 0,
    sunk: false,
  };
};

let newShip = ship("Carrier");
console.log(newShip);

module.exports = { ship };
