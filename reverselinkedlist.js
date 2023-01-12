
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var reverseList = function(head) {
    if(!head) return null 
    let temp = head.next 
    head.next = null

    while(temp){
        let t = temp.next 
        temp.next = head
        head = temp
        temp = t
    }

    return head
};
