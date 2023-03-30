export function getMaxLoad(carrotTypes, capacity) {
	const knownLoadValues = {};
	const carrotWeights = carrotTypes.map((carrot) => Number(carrot['kg']));
	const minWeight = Math.min(...carrotWeights);

	if (minWeight > capacity) {
		return 0;
	} 		

	for (let weight = 0; weight <= capacity; weight++) {
  	knownLoadValues[weight] = 0;
	}
	
	 for (let weight = 0; weight <= capacity; weight++) {
		for (let carrot of carrotTypes) {
			const carrotWeight = Number(carrot['kg']);
			const carrotPrice = Number(carrot['price']);

			if (carrotWeight <= weight && knownLoadValues[weight - carrotWeight] + carrotPrice > knownLoadValues[weight]) {
  			knownLoadValues[weight] = knownLoadValues[weight - carrotWeight] + carrotPrice;
			}
		}
	} 
	return knownLoadValues[capacity];
}
	
