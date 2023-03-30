import { printArrayValuesWithDoubleIntervals } from "./Question2";

describe('printArrayValuesWithDoubleIntervals', () => {
  beforeEach(() => {
    jest.useFakeTimers(); // Mocks the setTimeout function
  });

  afterEach(() => {
    jest.useRealTimers(); // Restores the original setTimeout function
  });

  test('should print array values with double intervals', async () => {
    const consoleSpy = jest.spyOn(console, 'log'); // Mocks the console.log method
    const arr = [1, 2, 3, 4, 5];
    await printArrayValuesWithDoubleIntervals(arr);

    expect(consoleSpy).toHaveBeenCalledTimes(5);

    jest.advanceTimersByTime(1000);
    expect(consoleSpy).toHaveBeenNthCalledWith(1, 1, expect.any(String));

    jest.advanceTimersByTime(2000);
    expect(consoleSpy).toHaveBeenNthCalledWith(2, 2, expect.any(String));

    jest.advanceTimersByTime(4000);
    expect(consoleSpy).toHaveBeenNthCalledWith(3, 3, expect.any(String));

    jest.advanceTimersByTime(8000);
    expect(consoleSpy).toHaveBeenNthCalledWith(4, 4, expect.any(String));

    jest.advanceTimersByTime(16000);
    expect(consoleSpy).toHaveBeenNthCalledWith(5, 5, expect.any(String));
  });
});