// Definition for singly-linked list.
#[derive(PartialEq, Eq, Clone, Debug)]
pub struct ListNode {
    pub val: i32,
    pub next: Option<Box<ListNode>>
}

impl ListNode {
    #[inline]
    fn new(val: i32) -> Self {
        ListNode {
            next: None,
            val
        }
    }
}


// impl Solution {
    pub fn add_two_numbers(mut l1: Option<Box<ListNode>>, mut l2: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
        // それぞれの値を取り出す
        let mut num1:u128 = 0;
        let mut num2:u128 = 0;
        let mut mul_ratio:u128 = 1;
        loop {
            match l1 {
                Some(this_num) => {
                    num1 += this_num.val as u128 * &mul_ratio;
                    mul_ratio *= 10;
                    l1 = this_num.next;
                },
                _ => {break;}
            }
        }
        mul_ratio = 1;
        loop {
            match l2 {
                Some(this_num) => {
                    // println!("{}", this_num.val);
                    num2 += this_num.val as u128 * &mul_ratio;
                    mul_ratio *= 10;
                    l2 = this_num.next;
                },
                _ => {break;}
            }
        }
        // 足す
        let sum1 = num1 + num2;
        // println!("{}, {}, {}", num1, num2, sum1);
        // 合計の値をLinkedListに正しい形で入れる
        let str_sum1 = sum1.to_string();
        let str_sum1_list: Vec<char> = str_sum1.chars().collect();
        let mut prev_node: Option<Box<ListNode>> = None;
        for i in str_sum1_list {
            let num_i = i as i32 - 48;
            let mut this_node = Box::new(ListNode::new(num_i));
            this_node.next = prev_node;
            prev_node = Some(this_node);
        };
        prev_node
    }
// }

fn main() {
    let l1_lst = [9];
    let l2_lst = [1,9,9,9,9,9,9,9,9,9];
    let mut l1: Option<Box<ListNode>> = None;
    let mut l2: Option<Box<ListNode>> = None;
    for i in &l1_lst {
        let mut this_node = Box::new(ListNode::new(*i));
        this_node.next = l1;
        l1 = Some(this_node);
    };
    for i in &l2_lst {
        let mut this_node = Box::new(ListNode::new(*i));
        this_node.next = l2;
        l2 = Some(this_node);
    };

     add_two_numbers(l1, l2);

}