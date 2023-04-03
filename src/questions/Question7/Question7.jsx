export function getMaxLoad(carrotTypes, capacity) {

	if (!Array.isArray(carrotTypes) || !carrotTypes.every(c => typeof c === 'object' && 'kg' in c && 'price' in c)) {
    throw new Error('carrotTypes should be an array of objects with a "kg" and a "price" property');
  }

  if (typeof capacity !== 'number' || capacity < 0 || !Number.isInteger(capacity)) {
    throw new Error('capacity should be a non-negative integer');
  }

	const knownLoadValues = new Array(capacity + 1).fill(0);

  for (const carrot of carrotTypes) {
    const { kg: carrotWeight, price: carrotPrice } = carrot;

    for (let weight = carrotWeight; weight <= capacity; weight++) {
      const potentialLoad = knownLoadValues[weight - carrotWeight] + carrotPrice;
      if (potentialLoad > knownLoadValues[weight]) {
        knownLoadValues[weight] = potentialLoad;
      }
    }
  }

  return knownLoadValues[capacity];
}