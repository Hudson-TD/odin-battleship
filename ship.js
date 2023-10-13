const {
  randomNumZeroToNine,
  randomDirection,
  determineSafePath,
} = require("./helpers.js");

const ship = (type) => {
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

  const generateCoordinates = (path, length, start) => {
    let list = [];
    list.push(start);
    console.log(path);
    console.log(length);

    if (path == "left") {
      console.log("going left");
      for (let i = 1; i < length; i++) {
        list.push({ x: start.x - i, y: start.y });
      }
    } else if (path == "right") {
      console.log("going right");
      for (let i = 1; i < length; i++) {
        list.push({ x: start.x + i, y: start.y });
      }
    } else if (path == "up") {
      console.log("going up");
      for (let i = 1; i < length; i++) {
        list.push({ x: start.x, y: start.y - i });
      }
    } else if (path == "down") {
      console.log("going down");
      for (let i = 1; i < length; i++) {
        list.push({ x: start.x, y: start.y + i });
      }
    }
    return list;
  };

  const randomPlacement = (shipLength) => {
    let startingPoint = {
      x: randomNumZeroToNine(),
      y: randomNumZeroToNine(),
    };

    let direction = randomDirection();

    let path = determineSafePath(direction, startingPoint);

    let shipCoordinates = generateCoordinates(path, shipLength, startingPoint);

    return shipCoordinates;
  };

  return {
    name: type,
    length: length(type),
    hits: 0,
    sunk: false,
    location: randomPlacement(length(type)),
    hit() {
      this.hits += 1;
      this.isSunk();
    },
    isSunk() {
      if (this.hits === this.length) {
        this.sunk = true;
      }
    },
  };
};

let newShip = ship("Carrier");
console.log(newShip);

module.exports = { ship };
