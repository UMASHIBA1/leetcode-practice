use std::collections::HashMap;

impl Solution {
    pub fn letter_combinations(digits: String) -> Vec<String> {
        let mut digits_table: HashMap<char, Vec<&char>> = HashMap::new();
        let alphabets: Vec<char> = "abcdefghijklmnopqrstuvwxyz".chars().collect();
        for i in 2..10 {
            digits_table.insert(i.to_string().chars()[0], vec![alphabets.get(i * 3).unwrap(), alphabets.get(i * 3 + 1).unwrap(), alphabets.get(i * 3 + 2).unwrap()]);
        }
        let digit_list: Vec<char> = digits.chars().collect();
        let result: Vec<String> = vec![];
        for digit in digit_list {
            let alph = digits_table.get(&digit).unwrap();

        };

    }
}

fn main() {
    println!("Hello, world!");
}
