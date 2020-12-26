function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  // クイックソートの実装

  const calcArray = (numArray: number[]) => {
    // 中央で分割する関数作成
    const len = numArray.length;
    if (len > 1) {
      const before = calcArray(numArray.slice(0, len / 2));
      const after = calcArray(numArray.slice(len / 2));

      const sortedLst: number[] = [];

      let beforeIndex = 0;
      let afterIndex = 0;

      // 値をソートした状態で結合する
      for (let i = 0; i < len; i++) {
        const beforeNum = before[beforeIndex];
        const afterNum = after[afterIndex];
        if (beforeNum <= afterNum) {
          sortedLst.push(beforeNum);
          if (beforeIndex < before.length - 1) {
            beforeIndex++;
          } else {
            beforeIndex++;
            before[beforeIndex] = Number.MAX_VALUE;
          }
        } else {
          sortedLst.push(afterNum);
          if (afterIndex < after.length - 1) {
            afterIndex++;
          } else {
            afterIndex++;
            after[afterIndex] = Number.MAX_VALUE;
          }
        }
      }

      return sortedLst;
    } else {
      return numArray;
    }
  };

  // 中央の値の取得
  const sortedLst = calcArray([...nums1, ...nums2]);

  const len = sortedLst.length;
  if (len % 2 === 0) {
    return (sortedLst[Math.floor(len / 2) - 1] + sortedLst[Math.floor(len / 2)]) / 2;
  } else {
    return sortedLst[Math.floor(len / 2)];
  }
}
