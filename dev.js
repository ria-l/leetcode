// https://leetcode.com/problems/merge-two-sorted-lists/
// Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the first two lists.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  if (!l1 || !l2) {
    return l1 ? l1 : l2;
  } else if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l2.next, l1);
    return l2;
  }
};

const l1 = { val: 1, next: { val: 2, next: { val: 4, next: null } } };
const l2 = { val: 1, next: { val: 3, next: { val: 4, next: null } } };

console.log('x', mergeTwoLists(l1, l2));

// const fibonacci = (n) => {
//   if (n <= 1) { return 1; }
//   debugger;
//   return fibonacci(n - 1) + fibonacci(n - 2);
// };

// console.log(fibonacci(5));

// // 3: 1 1 2
// // 1, curr: 1
// // 1, curr: 1 += 0
// // 1+1, curr: 1 += 1
// // 2+1, curr: next = 2
// // 7: 1 1 2 3 5 8 13
// // 1, 1, 2+1, 3+2, 5+3, 8+5