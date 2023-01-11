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
var reverselist=(head)=>{
  let previous=0
  curr=head
  while(curr){
    const next=curr.next
    curr.next=previous
    previous=curr
    curr=next

  }
  return previous
}
