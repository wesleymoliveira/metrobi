import { findDuplicates } from './Question1';

describe('<Question1 />', () => {
	 it('should return duplicates in array', () => {
		 const array = [1, 2, 3, 2, 4, 5, 3, 6];
    const duplicates = findDuplicates(array);
    expect(duplicates).toEqual([2, 3]);
	});

	it('should return duplicates in array of objects', () => {
		const array = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 2 }, { id: 4 }, { id: 5 }, { id: 3 }, { id: 6 }];
		const duplicates = findDuplicates(array);
		expect(duplicates).toEqual([{ id: 2 }, { id: 3 }]);
	});

	it('should return duplicates in array of objects with nested objects', () => {
		const array = [{ id: 1, nested: { id: 1 } }, { id: 2, nested: { id: 2 } }, { id: 3, nested: { id: 3 } }, { id: 2, nested: { id: 2 } }, { id: 4, nested: { id: 4 } }, { id: 5, nested: { id: 5 } }, { id: 3, nested: { id: 3 } }, { id: 6, nested: { id: 6 } }];
		const duplicates = findDuplicates(array);
		expect(duplicates).toEqual([{ id: 2, nested: { id: 2 } }, { id: 3, nested: { id: 3 } }]);
	});

	it('should return duplicates in array that contains non primitive types', () => {
		const array = [1, 2, 3, 2, 4, 5, 3, 6, null, undefined];
		const duplicates = findDuplicates(array);
		expect(duplicates).toEqual([2, 3]);
	});


});
