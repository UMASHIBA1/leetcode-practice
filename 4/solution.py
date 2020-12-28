def median(A, B):
    m, n = len(A), len(B)
    if m > n:
        # Bの方が必ず長くなる
        A, B, m, n = B, A, n, m
    if n == 0:
        raise ValueError
    # A: min, m: min, B: big, n: big

    # iを中心としてちょうどいい条件にあるまでバイナリーサーチ
    imin, imax, half_len = 0, m, (m + n + 1) / 2
    while imin <= imax:
        i = (imin + imax) / 2
        j = half_len - i  # leftとrightの長さが同じでないといけないからiが増えたらjが減るようにしてる
        if i < m and B[j - 1] > A[i]:
            # i is too small, must increase it
            imin = i + 1
        elif i > 0 and A[i - 1] > B[j]:
            # i is too big, must decrease it
            imax = i - 1
        else:
            # i is perfect
            # 最終的に求めたいモノ: 左の最大値 or 左の最大値と右の最小値

            # 奇数の場合
            if i == 0:
                max_of_left = B[j - 1]
            elif j == 0:
                max_of_left = A[i - 1]
            else:
                max_of_left = max(A[i - 1], B[j - 1])

            if (m + n) % 2 == 1:
                return max_of_left

            # 偶数の場合
            if i == m:
                min_of_right = B[j]
            elif j == n:
                min_of_right = A[i]
            else:
                min_of_right = min(A[i], B[j])

            return (max_of_left + min_of_right) / 2.0
