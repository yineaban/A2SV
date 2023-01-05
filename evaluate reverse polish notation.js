/**
 * @param {string[]} tokens
 * @return {number}
 */
    var evalRPN = function(tokens) {
    var arr = [];

    for (let t of tokens) {

        if (isNaN(t)) {
            arr.splice(-2, 2, eval(`${arr.at(-2)} ${t} ${arr.at(-1)} ^ 0`));
        } else arr.push(+t);
    }

    return arr[0];
};
