import {  getMaxLoad } from './Question7';

describe('<Question7 />', () => {
	const carrotTypes = [
		{ kg: 2, price: 10 },
		{ kg: 3, price: 20 },
		{ kg: 5, price: 25 }];

  it('should return 0 when the capacity is less than the minimum weight of the carrot types', () => {
    const capacity = 1;
    expect(getMaxLoad(carrotTypes, capacity)).toBe(0);
  });

	it('should return the maximum value', () => {
		const capacity = 10;
		const carrotTypes = [
			{ kg: 2, price: 10 },
			{ kg: 5, price: 25 },
			{ kg: 1, price: 5 },
			{ kg: 1, price: 10 },
			{ kg: 3, price: 35 },
		];
		//best result to capacity = 10kg and carrot above
		// 3kg * 3 = 105
		// 1kg * 1 = 10
		//________________
		// 10kg     = 115


		expect(getMaxLoad(carrotTypes, capacity)).toBe(115);
	});


  it('should calculate the maximum value for the given carrot types and capacity', () => {
    const capacity = 8;

		//best result to capacity 8kg = 50
		// 3kg * 2 = 40
		// 2kg * 1 = 10
		//________________
		// 8kg     = 50

    expect(getMaxLoad(carrotTypes, capacity)).toBe(50);
  });

  it('should return 0 when the carrot types array is empty', () => {
    const capacity = 10;
    expect(getMaxLoad([], capacity)).toBe(0);
  });

  it('should handle duplicate carrot weights in the carrot types choosing the one with higher price', () => {
    const duplicateCarrots =
		[
			{ kg: 3, price: 15 },
			{ kg: 3, price: 10 },
			{ kg: 4, price: 20 }
		];
    const capacity = 6;
    expect(getMaxLoad(duplicateCarrots, capacity)).toBe(30);
  });
});
