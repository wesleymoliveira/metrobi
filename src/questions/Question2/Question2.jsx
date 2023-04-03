function printValueWithInterval(value, interval) {
  return new Promise(resolve => setTimeout(() => {
    console.log(`${value}, ${new Date().toLocaleTimeString()}`);
    resolve();
  }, interval * 1000));
}

export async function printArrayValuesWithDoubleIntervals(arr) {
	let interval = 1;
	for (let i = 0; i < arr.length; i++) {
		try {
			await printValueWithInterval(arr[i], interval);
			interval *= 2;
		} catch (error) {
			console.log(error);
		}
	}
}