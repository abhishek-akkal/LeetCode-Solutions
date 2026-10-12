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
var addTwoNumbers = function(l1, l2) {
    let dummyHead = new ListNode(0);
    let current = dummyHead;
    let carry = 0;

    let p = l1;
    let q = l2;

    while (p !== null || q !== null || carry !== 0) {
        let x = (p !== null) ? p.val : 0;
        let y = (q !== null) ? q.val : 0;

        let sum = carry + x + y;
        carry = Math.trunc(sum / 10);
        
        current.next = new ListNode(sum % 10);
        current = current.next;

        if (p !== null) p = p.next;
        if (q !== null) q = q.next;
    }

    return dummyHead.next;
};