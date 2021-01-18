function letterCombinations(digits) {
    var digitList = digits.split("");
    var digitsTable = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
    };
    var result = [];
    while (digitList.length > 0) {
        var oneDigit = digitList.shift();
        var thisDigits = digitsTable[oneDigit];
        var first = thisDigits[0];
        var second = thisDigits[1];
        var third = thisDigits[2];
        var fourth = thisDigits[3];
        if (result.length === 0) {
            result = [first, second, third];
            if (fourth) {
                result.push(fourth);
            }
        }
        else {
            var newResult = [];
            for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
                var combi = result_1[_i];
                newResult.push(combi + first);
                newResult.push(combi + second);
                newResult.push(combi + third);
                if (fourth) {
                    newResult.push(combi + fourth);
                }
            }
            result = newResult;
        }
    }
    return result;
}
;
console.log(letterCombinations("8"));
