const { plotMaps } = require("./shipPlotting");

const ship = (type, randomSet) => {
  const length = (type) => {
    switch (type) {
      case "Carrier":
        return Number(5);
        break;
      case "Battleship":
        return Number(4);
        break;
      case "Destroyer":
        return Number(3);
        break;
      case "Submarine":
        return Number(3);
        break;
      case "Patrol Boat":
        return Number(2);
        break;
      default:
        throw new Error("Invalid ship type provided");
        break;
    }
  };

  function randomPlacement(shipType, set) {
    switch (shipType) {
      case "Carrier":
        return plotMaps[set][0];
        break;
      case "Battleship":
        return plotMaps[set][1];
        break;
      case "Destroyer":
        return plotMaps[set][2];
        break;
      case "Submarine":
        return plotMaps[set][3];
        break;
      case "Patrol Boat":
        return plotMaps[set][4];
        break;
      default:
        throw new Error("Error generating coordinates");
        break;
    }
  }

  return {
    name: type,
    length: length(type),
    hits: 0,
    sunk: false,
    location: randomPlacement(type, randomSet),
    hit: function () {
      this.hits += 1;
      this.isSunk();
    },
    isSunk: function () {
      if (this.hits === this.length) {
        this.sunk = true;
      }
    },
  };
};

module.exports = { ship };
