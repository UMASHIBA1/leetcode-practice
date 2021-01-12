function maxArea(height: number[]): number {
	let maxCapacity = 0;
	for (let i1 = 0; i1 < height.length; i1++) {
		const h1 = height[i1];
		for (let i2 = 0; i2 < height.length; i2++) {
			const h2 = height[i2];
			const capacity = Math.min(h1,h2) * Math.abs(i1 - i2);
			if (capacity > maxCapacity) {
				maxCapacity = capacity;
			}
		}
	}
	return maxCapacity;
};

const heights = [1,1];

console.log(maxArea(heights));