/**
 * @param {number} n
 * @return {number}
 */
var countCommas = function(n) {
    let totalCommas = 0n;
    let bigN = BigInt(n);
    let threshold = 1000n;

    while (bigN >= threshold) {
        totalCommas += bigN - threshold + 1n;
        threshold *= 1000n;
    }

    return Number(totalCommas);
};