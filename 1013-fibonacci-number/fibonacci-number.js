/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if (n <= 1) return n;

    let prev2 = 0; // F(0)
    let prev1 = 1; // F(1)
    let current = 0;

    for (let i = 2; i <= n; i++) {
        current = prev1 + prev2;
        prev2 = prev1;
        prev1 = current;
    }

    return current;
};