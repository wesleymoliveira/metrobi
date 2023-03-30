export function isStringBracketsProperlyOpenedAndClosed(string) {
	const stringLength = string.length;
	const allowedCharPairsSet = {'{': '}', '(': ')', '[': ']'};
	const unpairedClosingChars = [];
	
	if (stringLength % 2 !== 0 || stringLength === 0) {
		return false;
	}

	for (const char of string) {
		// is it a opening char?
		if (char in allowedCharPairsSet) {

			//then add the expected closing char to the unpairedClosingChars array
      unpairedClosingChars.push(allowedCharPairsSet[char]);
    } else {
      const expectedChar = unpairedClosingChars.pop();

			//the current char is expected to be a closing char that matches the last opening char
      if (expectedChar !== char) {
        return false;
      }
    }
	}
  return !unpairedClosingChars.length;
}

