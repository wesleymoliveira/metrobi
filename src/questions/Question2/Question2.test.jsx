import { printArrayValuesWithDoubleIntervals } from "./Question2";

describe('printArrayValuesWithDoubleIntervals', () => {
   beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
  });

  it('should print array values with double intervals', async () => {
    const arr= ['a','b','c','d'];
    const consoleSpy = jest.spyOn(console, 'log');
    let interval = 1;

    printArrayValuesWithDoubleIntervals(arr);

    // Check that each array value is printed with the correct interval
    for (let i = 0; i < arr.length; i++) {
      jest.advanceTimersByTime(interval * 1000);
      await Promise.resolve();
      expect(consoleSpy).toHaveBeenCalledWith(`${arr[i]}, ${new Date().toLocaleTimeString()}`);
      interval *= 2;
    }
    expect(consoleSpy).toHaveBeenCalledTimes(arr.length);
  });


});