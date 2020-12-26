class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        chars_dict = {}
        # ウィンドウスライディングで探索させる
        start = 0
        max_count = 0
        for i, char in enumerate(s):
            # startを移動させないといけない時
            if char in chars_dict:
                if chars_dict[char] + 1 > start:
                    start = chars_dict[char] + 1
                chars_dict[char] = i
            else:
                chars_dict[char] = i
            # 汎用的な処理
            now_count = i - start + 1
            if now_count > max_count:
                max_count = now_count
        return max_count
