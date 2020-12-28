use std::cmp::{max, min};

pub fn find_median_sorted_arrays(nums1: Vec<i32>, nums2: Vec<i32>) -> f64 {
    let m = nums1.len();
    let n = nums2.len();

    let mut result: f64;

    let mut index1_min = 0;
    let mut index1_max = m; // 2
    let half_len = (m + n + 1) / 2; // 2
    loop {
        let index1 = (index1_min + index1_max) / 2;
        let index2 = half_len - index1;
        if index1 > 0 && nums1[index1] > nums2[index2 + 1] {
            index1_max = index1 - 1;
        } else if index1 < m - 2 && nums1[index1] < nums2[index2 - 1] {
            index1_min = index1 + 1;
        }else {
            let max_of_left = max(nums1[index1], nums2[index2]);
            // 奇数の場合
            if m + n / 2 == 1 {
                result = max_of_left as f64;
            } else {
                let min_of_right = min(nums1[index1 + 1], nums2[index2 + 1]);
                result = ((max_of_left + min_of_right) / 2) as f64;
            }
            break;
        };
    };

    result

}

fn main() {
    println!("Hello, world!");
}
