let a
let n

/**
 * @param {number} k
 */
var MyCircularDeque = function(k) {
    a = []
    n = k
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function(value) {
    if(a.length < n ){
        a.splice(0,0,value)
        return true
    }
    return false 
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function(value) {
       if(a.length < n ){
        a.push(value)
        return true
    }
    return false 
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function() {
    if(a.length > 0 ){
        a.splice(0,1)
        return true
    }
    return false 
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function() {
       if(a.length > 0 ){
        a.pop()
        return true
    }
    return false 
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function() {
    if(a.length > 0 ){
        return a[0]
    }
    return -1
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function() {
      if(a.length > 0 ){
        return a[a.length -1]
    }
    return -1
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function() {
    return a.length == 0
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function() {
    return a.length  == n
};
