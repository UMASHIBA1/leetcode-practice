use std::iter::FromIterator;

// impl Solution {
    pub fn longest_palindrome(s: String) -> String {
        let mut two_previous_char: char = '/';
        let mut one_previous_char = s.chars().nth(0).unwrap(); // b
        let mut result = one_previous_char.clone().to_string(); // a
        let chars = Vec::from_iter(s.chars()); //abba

        for index in 1..chars.len() { // index = 2
            let now_char = chars.get(index).unwrap(); // b

            if  now_char.eq(&one_previous_char) {
                let mut palindromic_str = format!("{}{}", one_previous_char, now_char); // bb

                if index > 1 && index < chars.len() - 1 {
                    let mut before_index = index - 2;
                    let mut after_index = index + 1;

                    while chars.get(before_index).unwrap().eq(&chars.get(after_index).unwrap()) {
                        // 一緒だったらpalindromic_strに加える
                        let mut next_palindromic_str = chars.get(before_index).unwrap().to_string();
                        next_palindromic_str += palindromic_str.as_str();
                        next_palindromic_str.push(chars.get(after_index).unwrap().clone());
                        palindromic_str = next_palindromic_str;
                        if before_index == 0 || after_index >= chars.len() - 1 {
                            break;
                        }
                        before_index -= 1;
                        after_index += 1;
                    };
                };

                // 場合によってresultを変える
                if palindromic_str.len() > result.len() {
                    result = palindromic_str.to_string();
                };
            }
            // 二個前と同じだった場合
            if two_previous_char.len_utf8() != 0 && now_char.eq(&two_previous_char) {
                let mut palindromic_str = format!("{}{}{}", two_previous_char, one_previous_char, now_char); // bb

                if index > 2 && index < chars.len() - 1 {
                    let mut before_index = index - 3;
                    let mut after_index = index + 1;

                    while chars.get(before_index).unwrap().eq(&chars.get(after_index).unwrap()) {
                        // 一緒だったらpalindromic_strに加える
                        let mut next_palindromic_str = chars.get(before_index).unwrap().to_string();
                        next_palindromic_str += palindromic_str.as_str();
                        next_palindromic_str.push(chars.get(after_index).unwrap().clone());
                        palindromic_str = next_palindromic_str;
                        if before_index == 0 || after_index >= chars.len() - 1 {
                            break;
                        }
                        before_index -= 1;
                        after_index += 1;
                    };
                };

                // 場合によってresultを変える
                if palindromic_str.len() > result.len() {
                    result = palindromic_str.to_string();
                };
            };

            two_previous_char = one_previous_char;
            one_previous_char = now_char.clone();

        }

        result.to_string()
    }
// }

fn main() {

    println!("{}", longest_palindrome("cccc".to_string()));
}
