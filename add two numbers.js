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

    function Node(val){
    this.val = val;
    this.next = null;
};

function LinkedList(){
    this.head = null;
    this.insert = function(val){
        let node = new Node(val);
        if(this.head === null){
            this.head = node;
        }else{
            node.next = this.head;
            this.head = node;
        }
    }
}

var addToArrayForm = function(num, num2) {
    return String(BigInt(num.join('')) + BigInt(num2.join(''))).split('');
};

var addTwoNumbers = function(l1, l2) {
    const number1 = [];
    const number2 = [];
    const output = new LinkedList();
    
    const loop = (list, arr) => {
        arr.push(list.val);
        if (list?.next) {
            loop(list.next, arr);
        }
    }

    loop(l1, number1);
    loop(l2, number2);

    number1.reverse();
    number2.reverse();

    const newNumber = addToArrayForm(number1, number2).reverse();

    while(newNumber.length) {
        output.insert(newNumber.pop());
    }

    return output.head;
};

