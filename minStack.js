const MinStack = function() {
    this.values = []
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.values.push(val)
};

/**
 * @return {number}
 */
MinStack.prototype.pop = function() {
    return this.values.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.values[this.values.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    let min = Number.MAX_SAFE_INTEGER
    this.values.forEach(value => min = Math.min(min, value))

    return min
};
