/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function(s) {
     let stack = [];
    for(let i=0; i<s.length; i++){
        if(s[i] !== ')'){
            stack.push(s[i]);
        } else {
            let reversed = [];
            while(stack.length && stack[stack.length - 1] !== '('){
                reversed.push(stack.pop());
            }
            stack.pop();
            if(stack.length || i < s.length){
                stack.push(...reversed); 
            } else {
                return reversed.join('');
            }
        }
    }
    return stack.join('');
    
};
