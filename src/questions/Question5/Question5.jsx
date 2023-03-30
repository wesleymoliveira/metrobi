export const eggDrop = () => {
		const alreadyCalculated = {};

		const dropEggs = (numberOfEggs, numberOfFloors) => {
			if (numberOfEggs === 1 || numberOfFloors === 1 || numberOfFloors === 0) {
				return numberOfFloors;
			}

			if (`${numberOfEggs}-${numberOfFloors}` in alreadyCalculated) {
				return alreadyCalculated[`${numberOfEggs}-${numberOfFloors}`];
			}

			let minimum = numberOfFloors + 1;
			for (let floor = 1; floor < numberOfFloors; floor++) {
				//max because we want to find the worst case scenario
				const result = Math.max(
					dropEggs(numberOfEggs - 1, floor - 1),
					dropEggs(numberOfEggs, numberOfFloors - floor)
				);
				if (result < minimum) {
					minimum = result;
				}
			}

			alreadyCalculated[`${numberOfEggs}-${numberOfFloors}`] = minimum + 1;
			return minimum + 1;
		};

		const testEggDrop = (eggs, floors) => {
			const result = dropEggs(eggs, floors);
			return result;
		};

		return { testEggDrop };
	};