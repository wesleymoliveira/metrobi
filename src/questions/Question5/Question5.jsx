export const eggDrop = () => {
		const alreadyCalculated = {};

		const dropEggs = (numberOfEggs, numberOfFloors) => {
    if (numberOfEggs === 1 || numberOfFloors === 1 || numberOfFloors === 0) {
      return numberOfFloors;
    }

    if (`${numberOfEggs}-${numberOfFloors}` in alreadyCalculated) {
      return alreadyCalculated[`${numberOfEggs}-${numberOfFloors}`];
    }

    let minimumAttempts = numberOfFloors + 1;
    let start = 1;
    let end = numberOfFloors;

    while (start <= end) {
      const middleFloor = Math.floor((start + end) / 2);
      const eggsBrokenFromBelow = dropEggs(numberOfEggs - 1, middleFloor - 1);
      const eggsBrokenFromAbove = dropEggs(numberOfEggs, numberOfFloors - middleFloor);

      if (eggsBrokenFromBelow < eggsBrokenFromAbove) {
        start = middleFloor + 1;
        minimumAttempts = Math.min(minimumAttempts, eggsBrokenFromAbove + 1);
      } else {
        end = middleFloor - 1;
        minimumAttempts = Math.min(minimumAttempts, eggsBrokenFromBelow + 1);
      }
    }

    alreadyCalculated[`${numberOfEggs}-${numberOfFloors}`] = minimumAttempts;
    return minimumAttempts;
  };

		const testEggDrop = (eggs, floors) => {
			const result = dropEggs(eggs, floors);
			return result;
		};

		return { testEggDrop };
	};