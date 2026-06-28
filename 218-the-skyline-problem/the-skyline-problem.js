var getSkyline = function(buildings) {
    let events = [];

    // Create start and end events
    for (let [left, right, height] of buildings) {
        events.push([left, -height, right]); // building starts
        events.push([right, 0, 0]);          // building ends
    }

    // Sort events
    events.sort((a, b) => {
        if (a[0] !== b[0]) return a[0] - b[0];
        return a[1] - b[1];
    });

    let result = [];
    let heap = [[0, Infinity]]; // [height, end]
    let prevHeight = 0;

    // Max heap helper functions
    const push = (item) => {
        heap.push(item);
        let i = heap.length - 1;

        while (i > 1) {
            let p = Math.floor(i / 2);

            if (heap[p][0] >= heap[i][0]) break;

            [heap[p], heap[i]] = [heap[i], heap[p]];
            i = p;
        }
    };

    const pop = () => {
        if (heap.length === 1) return;

        heap[1] = heap[heap.length - 1];
        heap.pop();

        let i = 1;

        while (true) {
            let left = i * 2;
            let right = i * 2 + 1;
            let biggest = i;

            if (
                left < heap.length &&
                heap[left][0] > heap[biggest][0]
            ) {
                biggest = left;
            }

            if (
                right < heap.length &&
                heap[right][0] > heap[biggest][0]
            ) {
                biggest = right;
            }

            if (biggest === i) break;

            [heap[i], heap[biggest]] =
                [heap[biggest], heap[i]];

            i = biggest;
        }
    };

    heap.unshift(null);

    for (let [x, negHeight, right] of events) {

        while (
            heap.length > 2 &&
            heap[1][1] <= x
        ) {
            pop();
        }

        if (negHeight !== 0) {
            push([-negHeight, right]);
        }

        let currentHeight = heap[1][0];

        if (currentHeight !== prevHeight) {
            result.push([x, currentHeight]);
            prevHeight = currentHeight;
        }
    }

    return result;
};