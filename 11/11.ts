function maxArea(height: number[]): number {
	let maxCapacity = 0;
	let startIndex = 0;
	let endIndex = height.length - 1;
	for (let i = 0; i < height.length; i++) {
		const h1 = height[startIndex];
		const h2 = height[endIndex];
		const capacity = Math.min(h1, h2) * (endIndex - startIndex);
		if (capacity > maxCapacity) {
			maxCapacity = capacity;
		}
		if(h1 > h2) {
			endIndex--;
		}else {
			startIndex++;
		}
	}
	return maxCapacity;
};

const heights = [1,1];

console.log(maxArea(heights));