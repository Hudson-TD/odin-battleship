// const {
//   randomNumZeroToNine,
//   randomDirection,
//   determineSafePath,
// } = require("./helpers.js");

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

  // const generateCoordinates = (path, length, start) => {
  //   let list = [];
  //   list.push(start);

  //   if (path == "left") {
  //     for (let i = 1; i < length; i++) {
  //       list.push({ x: start.x - i, y: start.y });
  //     }
  //   } else if (path == "right") {
  //     for (let i = 1; i < length; i++) {
  //       list.push({ x: start.x + i, y: start.y });
  //     }
  //   } else if (path == "up") {
  //     for (let i = 1; i < length; i++) {
  //       list.push({ x: start.x, y: start.y - i });
  //     }
  //   } else if (path == "down") {
  //     for (let i = 1; i < length; i++) {
  //       list.push({ x: start.x, y: start.y + i });
  //     }
  //   }
  //   return list;
  // };

  // const randomPlacement = (shipLength) => {
  //   let shipCoordinates = [];
  //   let startingPoint = {
  //     x: randomNumZeroToNine(),
  //     y: randomNumZeroToNine(),
  //   };

  //   let direction = randomDirection();

  //   let path = determineSafePath(direction, startingPoint);

  //   shipCoordinates = generateCoordinates(path, shipLength, startingPoint);

  //   return shipCoordinates;
  // };

  function randomPlacement(shipType) {
    switch (shipType) {
      case "Carrier":
        return [
          {
            x: 0,
            y: 0,
          },
          {
            x: 0,
            y: 1,
          },
          {
            x: 0,
            y: 2,
          },
          {
            x: 0,
            y: 3,
          },
          {
            x: 0,
            y: 4,
          },
        ];
        break;
      case "Battleship":
        return [
          {
            x: 9,
            y: 2,
          },
          {
            x: 9,
            y: 3,
          },
          {
            x: 9,
            y: 4,
          },
          {
            x: 9,
            y: 5,
          },
        ];
        break;
      case "Destroyer":
        return [
          {
            x: 5,
            y: 4,
          },
          {
            x: 6,
            y: 4,
          },
          {
            x: 7,
            y: 4,
          },
        ];
        break;
      case "Submarine":
        return [
          {
            x: 8,
            y: 0,
          },
          {
            x: 8,
            y: 1,
          },
          {
            x: 8,
            y: 2,
          },
        ];
        break;
      case "Patrol Boat":
        return [
          {
            x: 5,
            y: 7,
          },
          {
            x: 6,
            y: 7,
          },
        ];
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
    location: randomPlacement(type),
    hit: function () {
      this.hits += 1;
      console.log("Hit detected!");
      this.isSunk();
    },
    isSunk: function () {
      if (this.hits === this.length) {
        this.sunk = true;
        console.log(`${this.name} has been sunk`);
      }
    },
  };
};

module.exports = { ship };
