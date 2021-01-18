function letterCombinations(digits: string): string[] {
	const digitList = digits.split("");
	let digitsTable: {[key: string]: string} = {
		"2": "abc",
		"3": "def",
		"4": "ghi",
		"5": "jkl",
		"6": "mno",
		"7": "pqrs",
		"8": "tuv",
		"9": "wxyz"
	}

	let result: string[] = [];

	while (digitList.length > 0) {
		const oneDigit = digitList.shift();
		const thisDigits = digitsTable[oneDigit];
		const first = thisDigits[0];
		const second = thisDigits[1];
		const third = thisDigits[2];
		const fourth = thisDigits[3];
		if (result.length === 0) {
			result = [first, second, third];
			if(fourth) {
				result.push(fourth);
			}
		} else {
			const newResult: string[] = [];
			for (const combi of result) {
				newResult.push(combi + first);
				newResult.push(combi + second);
				newResult.push(combi + third);
				if(fourth) {
					newResult.push(combi + fourth);
				}
			}
			result = newResult;
		}
	}
	return result;
};

// console.log(letterCombinations("8"));