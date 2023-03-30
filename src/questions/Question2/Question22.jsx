import { act, waitFor } from '@testing-library/react';
import { printArrayValuesWithDoubleIntervals } from './Question2';
import { freeze } from '../../../utils/testUtils';

//jest.setTimeout(20000);
jest.useFakeTimers(); // Mocks the setTimeout function

describe('<Question2 />', () => {
	/* beforeEach(() => {
	});
	
  afterEach(() => {
		jest.useRealTimers(); // Restores the original setTimeout function
  });
	 */
	//avoid timeout error setting the maximum time for the test according to the expected intervals
	it('should print array values with double intervals', async (done) => {
		const consoleSpy = jest.spyOn(console, 'log');
    const array = ['a', 'b', 'c', 'd',/*  'e', 'f', 'g', 'h', 'i', 'j' */];

    const expectedLogs = [
      `startTime ${new Date().toLocaleTimeString()}`,
      `a ${new Date().toLocaleTimeString()}`,
      `b ${new Date().toLocaleTimeString()}`,
      `c ${new Date().toLocaleTimeString()}`,
			`d ${new Date().toLocaleTimeString()}`,
			/* `e ${new Date().toLocaleTimeString()}`,
			`f ${new Date().toLocaleTimeString()}`,
			`g ${new Date().toLocaleTimeString()}`,
			`h ${new Date().toLocaleTimeString()}`,
			`i ${new Date().toLocaleTimeString()}`,
			`j ${new Date().toLocaleTimeString()}`, */
    ];
    const expectedIntervals = [1000, 2000, 4000, 8000, /* 16000, 32000, 64000, 128000, 256000, 512000 */];


		/* await act(async () => {
			await printArrayValuesWithDoubleIntervals(array);
		}); */

		printArrayValuesWithDoubleIntervals(array);
	
		//done();
		/* const result = await printArrayValuesWithDoubleIntervals(array);
		
		console.log('result', result);
		done(); */

		//await act(async () => await freeze(2000))
		
		jest.runAllTimers();

		await waitFor(() => {
			// check if console.log was called the correct number of times
			expect(consoleSpy).toHaveBeenCalledTimes(array.length + 1);

			
			for (let i = 0; i < array.length; i++) {
				//expect(consoleSpy).toHaveBeenNthCalledWith(i + 2, expectedLogs[i+1]);
			}
			
			// check if setTimeout was called according to the expected intervals
			for (let i = 0; i < array.length; i++) {
				//expect(setTimeout).toHaveBeenNthCalledWith(i + 1, expectedIntervals[i]);
			}
	});
		
  }, /* 10000 */);
});
