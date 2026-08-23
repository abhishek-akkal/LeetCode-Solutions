var sumGame = function(num) {
    let n = num.length;
    let leftSum = 0;
    let rightSum = 0;
    let leftQ = 0;
    let rightQ = 0;

    for (let i = 0; i < n / 2; i++) {
        if (num[i] === '?') {
            leftQ++;
        } else {
            leftSum += Number(num[i]);
        }
    }

    for (let i = n / 2; i < n; i++) {
        if (num[i] === '?') {
            rightQ++;
        } else {
            rightSum += Number(num[i]);
        }
    }

    let diffSum = leftSum - rightSum;
    let diffQ = rightQ - leftQ;

    return diffSum * 2 !== diffQ * 9;
};