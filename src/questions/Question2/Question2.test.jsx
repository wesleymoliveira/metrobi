import { printArrayValuesWithDoubleIntervals } from "./Question2";

describe('printArrayValuesWithDoubleIntervals', () => {
  it('should print array values with double intervals', async () => {
    jest.useFakeTimers(); // Mocks the setTimeout function
    const consoleSpy = jest.spyOn(console, 'log'); 
    const arr= ['a','b','c','d'];
    
    let expectedLogs = [];
    
    let interval = 1;
    const startTime = new Date().toLocaleTimeString();
    expectedLogs.push(['startTime', startTime]);
    for (let i = 0; i < arr.length; i++) {
      const expectedDate = new Date(Date.now() + interval * 1000).toLocaleTimeString();
      expectedLogs.push([arr[i], expectedDate]);
      interval *= 2;
    }
    printArrayValuesWithDoubleIntervals(arr);

    jest.advanceTimersByTime(20000);
    
    // +1 because of the startTime log
    expect(consoleSpy).toHaveBeenCalledTimes(arr.length + 1);

    for (let i = 0; i < arr.length; i++) {
      expect(consoleSpy.mock.calls[i]).toEqual(expectedLogs[i]);
    }
  });
});