var checkDivisibility = function(n) {
    let temp = n;
    let sum = 0;
    let product = 1;

    while (temp > 0) {
        let digit = temp % 10;
        sum += digit;
        product *= digit;
        temp = Math.floor(temp / 10);
    }

    let totalSum = sum + product;
    return n % totalSum === 0;
};