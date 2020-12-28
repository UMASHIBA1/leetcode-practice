use std::cmp::{max, min};

pub fn find_median_sorted_arrays(mut nums1: Vec<i32>, mut nums2: Vec<i32>) -> f64 {
    let mut m = nums1.len();
    let mut n = nums2.len();

    // nums1の方を確実に短くする
    if m > n {
        let tmp = nums1;
        nums1 = nums2;
        nums2 = tmp;
        m = nums1.len();
        n = nums2.len();
    }

    let mut index1_min = 0;
    let mut index1_max = m;
    let half_len = (n + m + 1) / 2; // 奇数だった場合、左の方に中央値が来るようにしてる

    let mut result: f64 = 0.0;

    while index1_min <= index1_max {
        let index1 = (index1_min + index1_max) / 2;
        let index2 = half_len - index1;
        if index1 < index1_max && nums2[index2 - 1] > nums1[index1]  {
            index1_min = index1 + 1;
        } else if index1 > index1_min && nums1[index1 - 1] > nums2[index2] {
            index1_max = index1 - 1;
        } else {
            let mut max_of_left: i32;

            if index1 == 0 {
                max_of_left = nums2[index2 - 1];
            } else if index2 == 0 {
                max_of_left = nums1[index1 - 1];
            } else {
                max_of_left = max(nums1[index1 - 1], nums2[index2 - 1]);
            }

            let is_odd = (m + n) % 2 == 1;
            if is_odd {
                result = max_of_left as f64;
                break;
            }

            let mut min_of_right: i32;

            if index1 == m {
                min_of_right = nums2[index2];
            } else if index2 == n {
                min_of_right = nums1[index1];
            } else {
                min_of_right = min(nums1[index1], nums2[index2]);
            }

            result = ((max_of_left + min_of_right) as f64 / 2.0);

            break;
        };
    };
    result
}

fn main() {
    let nums1 = vec![1, 3];
    let nums2 = vec![2];
    let result = find_median_sorted_arrays(nums1, nums2);
    println!("{}", result);
}
