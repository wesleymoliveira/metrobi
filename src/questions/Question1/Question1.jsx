export function findDuplicates(array) {
  const seenDictionary = new Set();
  const duplicates = new Set();

  array.forEach((item) => {
		if (item !== null && item !== undefined) {
			if (typeof item === 'object') {
				const itemAsString = JSON.stringify(item);
				if (seenDictionary.has(itemAsString)) {
					duplicates.add(item);
				} else {
					seenDictionary.add(itemAsString);
				}
			} else {
				if (seenDictionary.has(item)) {
					duplicates.add(item);
				} else {
					seenDictionary.add(item);
				}
			}
		}
  });

	return Array.from(duplicates);
}