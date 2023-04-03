export function findDuplicates(array) {
  const seenDictionary = new Set();
  const duplicates = new Set();

	array.forEach((item) => {
  if (item === null || item === undefined) return;
  const itemAsString = (typeof item === 'object') ? JSON.stringify(item) : item;
  if (seenDictionary.has(itemAsString)) {
    duplicates.add(item);
  } else {
    seenDictionary.add(itemAsString);
  }
});

	return Array.from(duplicates);
}

