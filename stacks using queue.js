var MyQueue = function() {
 
  
  this.pushStack = []
  this.popStack = []
};


MyQueue.prototype.push = function(x) {
  this.pushStack.push(x)
};


MyQueue.prototype._transfer = function() {
  while(this.pushStack.length > 0) {
    this.popStack.push(this.pushStack.pop())
  }
}


MyQueue.prototype.pop = function() {
  if (this.empty()) return null
  
  if (this.popStack.length === 0) {
    this._transfer()
  }
  
  return this.popStack.pop()
};

MyQueue.prototype.peek = function() {
  if (this.empty()) return null
  
  if (this.popStack.length === 0) {
    this._transfer()
  }
  
  return this.popStack[this.popStack.length - 1]
};


MyQueue.prototype.empty = function() {
  return this.pushStack.length === 0 && this.popStack.length === 0
};

