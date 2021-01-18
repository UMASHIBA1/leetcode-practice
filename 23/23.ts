
class ListNode {
	val: number
	next: ListNode | null
	constructor(val?: number, next?: ListNode | null) {
		this.val = (val === undefined ? 0 : val)
		this.next = (next === undefined ? null : next)
	}
}


function mergeKLists(lists: Array<ListNode | null>): ListNode | null {

	let result: ListNode = null;
	let now: ListNode | null = null;

	while (true) {
		let minValueIndex: number = 0;
		let isAllUndefinedOrNull = true;
		if (lists[minValueIndex] !== null && lists[minValueIndex] !== undefined) {
			isAllUndefinedOrNull = false;
		}

		for (let i = 1; i < lists.length; i++) {
			const node = lists[i];
			const minNode = lists[minValueIndex];
			if(node !== null && node !== undefined) {
				isAllUndefinedOrNull = false;
			}
			if (node !== null &&(minNode === null || node.val < minNode.val)) {
				minValueIndex = i;
			}
		}

		if(isAllUndefinedOrNull) {
			break;
		}

		const nowNode = lists[minValueIndex];
		// console.log(nowNode);
		lists[minValueIndex] = nowNode.next;
		nowNode.next = null;
		if (now !== null) {
			now.next = nowNode;
			now = nowNode;
		} else {
			now = nowNode;
			result = now;
		}
	}

	return result;

};

[[1,4,5],[1,3,4],[2,6]]