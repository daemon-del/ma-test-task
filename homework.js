// Create a function that receives an array of goods and returns cost that should be paid for all these goods.

// Your code should:
// - Print to the console the total quantity of pairs of socks (`Socks - ${quantity}`);
// - Print to the console the total quantity of the hats of red color (`Red Hats - ${quantity}`);
// - Print to the console the cost of the goods by colors (`Red - ${costRed}, Green - ${costGreen}, Blue - ${costBlue}`);
// - Print to the console the result of the execution of this function.

const arr = [
  { type: 'socks', color: 'red', quantity: 10, priceForPair: '$3' },
  { type: 'socks', color: 'green', quantity: 5, priceForPair: '$10' },
  { type: 'socks', color: 'blue', quantity: 8, priceForPair: '$6' },
  { type: 'hat', color: 'red', quantity: 7, price: '$5' },
  { type: 'hat', color: 'green', quantity: 0, price: '$6' },
  { type: 'socks', color: 'blue', priceForPair: '$6' },
  { type: 'socks', color: 'red', quantity: 10, priceForPair: '$3' },
  { type: 'socks', color: 'white', quantity: 3, priceForPair: '$4' },
  { type: 'socks', color: 'green', priceForPair: '$10' },
  { type: 'socks', color: 'blue', quantity: 2, priceForPair: '$6' },
  { type: 'hat', color: 'green', quantity: 3, price: '$5' },
  { type: 'hat', color: 'red', quantity: 1, price: '$6' },
  { type: 'socks', color: 'blue', priceForPair: '$6' },
];

function goodsCounter(array) {

  let socksQuantity = 0;

  array.forEach((element) => {
    if (element.type === 'socks' && element.quantity) {
      socksQuantity += element.quantity;
    }
  });

  let redHatQuantity = 0;
  array.forEach((element) => {
    if (element.type === 'hat' && element.color === 'red' && element.quantity) {
      redHatQuantity += element.quantity;
    }
  });

  let redCost = 0;
  let greenCost = 0;
  let blueCost = 0;

  array.forEach((element) => {
    if (element.color === 'red' && element.priceForPair) {
      redCost += +(element.priceForPair.split('$')[1]);
    }
    if (element.color === 'red' && element.price) {
      redCost += +(element.price.split('$')[1]);
    }

    if (element.color === 'green' && element.priceForPair) {
      greenCost += +(element.priceForPair.split('$')[1]);
    }
    if (element.color === 'green' && element.price) {
      greenCost += +(element.price.split('$')[1]);
    }

    if (element.color === 'blue' && element.priceForPair) {
      blueCost += +(element.priceForPair.split('$')[1]);
    }
    if (element.color === 'blue' && element.price) {
      blueCost += +(element.price.split('$')[1]);
    }
  });

  console.log({
    socksQuantity,
    redHatQuantity,
    redCost,
    greenCost,
    blueCost,
  });
}

goodsCounter(arr);
