export function isStringBracketsProperlyOpenedAndClosed(inputString) {
	const inputLength = inputString.length;
	const allowedBracketsPairsSet = {'{': '}', '(': ')', '[': ']'};
	const unpairedClosingBrackets = [];
	
	if (inputLength % 2 !== 0 || inputLength === 0) {
		return false;
	}

	for (const bracket of inputString) {
		// is it a opening char?
		if (bracket in allowedBracketsPairsSet) {

			//then add the expected closing char to the unpairedClosingChars array
      unpairedClosingBrackets.push(allowedBracketsPairsSet[bracket]);
    } else {
      const expectedClosingChar = unpairedClosingBrackets.pop();

			//the current char is expected to be a closing char that matches the last opening char
      if (expectedClosingChar !== bracket) {
        return false;
      }
    }
	}
  return !unpairedClosingBrackets.length;
}

