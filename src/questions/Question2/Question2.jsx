 async function printValueWithInterval(value, interval) {
	await new Promise(resolve => setTimeout(resolve, interval * 1000));
	console.log(value, new Date().toLocaleTimeString());
}

export async function printArrayValuesWithDoubleIntervals(arr) {
	console.log('startTime', new Date().toLocaleTimeString());
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