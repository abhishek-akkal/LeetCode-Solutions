/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var digitSum = function(s, k) {
    while (s.length > k) {
        let nextStr = '';
        for (let i = 0; i < s.length; i += k) {
            let group = s.slice(i, i + k);
            let sum = 0;
            for (let char of group) {
                sum += Number(char);
            }
            nextStr += sum;
        }
        s = nextStr;
    }
    return s;
};