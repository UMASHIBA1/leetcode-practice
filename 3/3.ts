function lengthOfLongestSubstring(s: string): number {
	const alphbetsDict:{
		[i in string]: number;
	} = {};


	if(s === "") {
		return 0;
	}

	let max_diff = 1;
	let start = 0;

	alphbetsDict[s[0]] = 0;


	for (let end = 1; end < s.length; end++) {

		// startの位置移動
		if (s[end] in alphbetsDict) {
			const willStart = alphbetsDict[s[end]] + 1;
			if(willStart > start) {
				start = willStart;
			}
		}

		// 最大になっていないかの確認
		const now_diff = end - start + 1;
		if(now_diff > max_diff) {
			max_diff = now_diff;
		}
		// startに関する状態の保存
		alphbetsDict[s[end]]= end;
	}

	return max_diff;

};

// スライディングウィンドウの方法まとめ
// 必要なのはstart, end, max_diff
// 毎回、今が最大になっているか判定する
// もしstartを移動させる必要があるなら移動する