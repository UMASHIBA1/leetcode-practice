var createKey = function (i1, i2) {
    return i1 + ":" + i2;
};
function maxArea(height) {
    var maxCapacity = 0;
    var calcTable = {};
    for (var i1 = 0; i1 < height.length; i1++) {
        var h1 = height[i1];
        for (var i2 = 0; i2 < height.length; i2++) {
            var h2 = height[i2];
            if (calcTable[createKey(i1, i2)] === undefined && calcTable[createKey(i2, i1)] === undefined) {
                var capacity = Math.min(h1, h2) * Math.abs(i1 - i2);
                if (capacity > maxCapacity) {
                    maxCapacity = capacity;
                }
                calcTable[createKey(i1, i2)] = "calced";
                calcTable[createKey(i2, i1)] = "calced";
            }
        }
    }
    return maxCapacity;
}
;
var heights = [1, 1];
console.log(maxArea(heights));
