function printValueWithInterval(value, interval) {
  return new Promise(resolve => setTimeout(() => {
    console.log(value, new Date().toLocaleTimeString());
    resolve();
  }, interval * 1000));
}

export function printArrayValuesWithDoubleIntervals(arr) {
	console.log('startTime', new Date().toLocaleTimeString());
	let interval = 1;
	for (let i = 0; i < arr.length; i++) {
		try {
			printValueWithInterval(arr[i], interval);
			interval *= 2;
		} catch (error) {
			console.log(error);
		}
	}
}