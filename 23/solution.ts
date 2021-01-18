
class ListNode {
	val: number
	next: ListNode | null
	constructor(val?: number, next?: ListNode | null) {
		this.val = (val === undefined ? 0 : val)
		this.next = (next === undefined ? null : next)
	}
}


const merge = (node1: ListNode, node2?: ListNode) => {

	if(node2 === null || node2 === undefined) {
		return node1;
	}

	let first: ListNode = null;
	let now: ListNode = null;

	if (!node1 && node2) {
		console.log("run 1");
		const minNode = node2;
		node2 = minNode.next;
		minNode.next = null;
			first = minNode;
		
	} else if(!node2 && node1) {
		console.log("run 2");
		const minNode = node1;
		node1 = minNode.next;
		minNode.next = null;
			first = minNode;

	} else {
		if(node1.val < node2.val) {
			const minNode = node1;
			node1 = minNode.next;
			minNode.next = null;
			first = minNode;
		}else {
			const minNode = node2;
			node2 = minNode.next;
			minNode.next = null;
			first = minNode;
		}
	}
	

	now = first;
	console.log("now", now.val);

	while(node1 || node2) {

		let minNode: ListNode;
		if (!node1 && node2) {
			console.log("run 1");
			minNode = node2;
			node2 = minNode.next;
			minNode.next = null;
		} else if(!node2 && node1) {
			console.log("run 2");
			minNode = node1;
			node1 = minNode.next;
			minNode.next = null;
		} else {
			if(node1.val < node2.val) {
				console.log("run 3");
				minNode = node1;
				node1 = minNode.next;
				minNode.next = null;
			}else {
				console.log("run 4");
				minNode = node2;
				node2 = minNode.next;
				minNode.next = null;
			}
		}
		console.log("minNode",minNode.val);
		now.next = minNode;
		now = now.next;
	}

	return first;

}

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {

	while(lists.length > 1) {
		const newLists: Array<ListNode> = [];
		for (let i = 0; i < lists.length;i+=2) {
			const merged = merge(lists[i], lists[i + 1]);
			console.log("merged", merged);
			newLists.push(merged);
		}
		lists = newLists;
	}

	if(lists[0] === null || lists[0] === undefined) {
		return null;
	}else {
		return lists[0];
	}

}