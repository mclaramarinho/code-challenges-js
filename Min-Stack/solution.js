var MinStack = function () {
    this.stack = []; // stores [value, minVal]
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    let newMin = val;
    if (this.stack.length > 0) {
        const prevMin = this.stack[0][1];
        newMin = val < prevMin ? val : prevMin;
    }
    this.stack.unshift([val, newMin]);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    return this.stack.shift()[0];
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.stack[0][0];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.stack[0][1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */