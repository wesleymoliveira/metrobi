import {  isStringBracketsProperlyOpenedAndClosed } from './Question4';

describe('<Question4 />', () => {
	it('should return false for an empty string', () => {
    expect(isStringBracketsProperlyOpenedAndClosed('')).toBe(false);
  });

  it('should return false for an odd length string', () => {
    expect(isStringBracketsProperlyOpenedAndClosed('{[()]}(')).toBe(false);
  });

  it('should return false for a string with unpaired opening brackets', () => {
    expect(isStringBracketsProperlyOpenedAndClosed('{[()]}[')).toBe(false);
  });

  it('should return false for a string with unpaired closing brackets', () => {
    expect(isStringBracketsProperlyOpenedAndClosed('{[()]}}')).toBe(false);
  });

  it('should return true for a string with properly paired brackets', () => {
    expect(isStringBracketsProperlyOpenedAndClosed('{[()]}')).toBe(true);
  });
});
