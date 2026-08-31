var toHex = function(num) {
    if (num === 0) return "0";

    const hexChars = "0123456789abcdef";
    let result = "";

    let uNum = num >>> 0;

    while (uNum > 0) {
        let digit = uNum & 15;
        result = hexChars[digit] + result;
        uNum = uNum >>> 4;
    }

    return result;
};