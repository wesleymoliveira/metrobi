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

	const wrongCarrotTypeInputError = 'carrotTypes should be an array of objects with a "kg" and a "price" property';

	const wrongCapacityInputError = 'capacity should be a non-negative integer';

	 it('should throw an error if carrotTypes is not an array of objects with "kg" and "price" properties', () => {
    expect(() => getMaxLoad(null, 10)).toThrow(wrongCarrotTypeInputError);
    expect(() => getMaxLoad([{}], 10)).toThrow(wrongCarrotTypeInputError);
    expect(() => getMaxLoad([{ kg: 1 }], 10)).toThrow(wrongCarrotTypeInputError);
    expect(() => getMaxLoad([{ price: 1 }], 10)).toThrow(wrongCarrotTypeInputError);
    expect(() => getMaxLoad([{ kg: 1, price: 2 }, { kg: 2 }, { price: 3 }], 10)).toThrow(wrongCarrotTypeInputError);
  });

  it('should throw an error if capacity is not a non-negative integer', () => {
    expect(() => getMaxLoad([{ kg: 1, price: 2 }], null)).toThrow(wrongCapacityInputError);
    expect(() => getMaxLoad([{ kg: 1, price: 2 }], '10')).toThrow(wrongCapacityInputError);
    expect(() => getMaxLoad([{ kg: 1, price: 2 }], -1)).toThrow(wrongCapacityInputError);
    expect(() => getMaxLoad([{ kg: 1, price: 2 }], 1.5)).toThrow(wrongCapacityInputError);
  });
});
