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
        // 取り出した値を一つ一つ繰り上がりを考えながらresultに入れていく
        let mut init_node = ListNode::new(0);
        let mut prev_node = &mut init_node;
        let mut is_move_up = false;
        while l1.is_some() || l2.is_some() || is_move_up {
            let mut l1_num = 0;
            let mut l2_num = 0;
            match l1 {
                Some(l1_node) => {
                    l1_num = l1_node.val;
                    l1 = l1_node.next;
                },
                _ => {}
            }
            match l2 {
                Some(l2_node) => {
                    l2_num = l2_node.val;
                    l2 = l2_node.next;
                },
                _ => {}
            }
            let sum_num = l1_num + l2_num + is_move_up as i32;
            let this_node = Box::new(ListNode::new(sum_num % 10));
            if sum_num >= 10 {
                is_move_up = true;
            } else {
                is_move_up = false;
            }

            prev_node.next = Some(this_node);

            prev_node = prev_node.next.as_mut().unwrap();
        }
    init_node.next

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

     let mut numbers = add_two_numbers(l1, l2);
    while numbers.is_some() {
        let this_num = numbers.unwrap();
        print!("{}",this_num.val);
        numbers = this_num.next;
    }


}