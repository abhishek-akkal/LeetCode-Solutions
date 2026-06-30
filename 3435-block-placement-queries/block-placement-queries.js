var getResults = function(queries) {
    const MAXX = 50000;

    const tree = new Array(MAXX * 4 + 5).fill(0);

    function update(node, l, r, idx, val) {
        if (l === r) {
            tree[node] = val;
            return;
        }

        const mid = (l + r) >> 1;

        if (idx <= mid) {
            update(node * 2, l, mid, idx, val);
        } else {
            update(node * 2 + 1, mid + 1, r, idx, val);
        }

        tree[node] = Math.max(tree[node * 2], tree[node * 2 + 1]);
    }

    function query(node, l, r, ql, qr) {
        if (ql > r || qr < l) return 0;

        if (ql <= l && r <= qr) return tree[node];

        const mid = (l + r) >> 1;

        return Math.max(
            query(node * 2, l, mid, ql, qr),
            query(node * 2 + 1, mid + 1, r, ql, qr)
        );
    }

    const obstacles = new Set();

    for (const q of queries) {
        if (q[0] === 1) {
            obstacles.add(q[1]);
        }
    }

    const sorted = [0, ...obstacles, MAXX].sort((a, b) => a - b);

    const prev = new Array(MAXX + 1).fill(0);
    const next = new Array(MAXX + 1).fill(0);

    for (let i = 1; i < sorted.length; i++) {
        const gap = sorted[i] - sorted[i - 1];
        update(1, 0, MAXX, sorted[i], gap);
    }

    for (let i = 0; i < sorted.length - 1; i++) {
        prev[sorted[i + 1]] = sorted[i];
        next[sorted[i]] = sorted[i + 1];
    }

    const ans = [];

    for (let i = queries.length - 1; i >= 0; i--) {
        const q = queries[i];

        if (q[0] === 2) {
            const [, x, sz] = q;

            let best = query(1, 0, MAXX, 0, x);

            let p = x;

            while (!obstacles.has(p) && p > 0) {
                p--;
            }

            best = Math.max(best, x - p);

            ans.push(best >= sz);
        } else {
            const x = q[1];

            const l = prev[x];
            const r = next[x];

            update(1, 0, MAXX, r, r - l);

            next[l] = r;
            prev[r] = l;

            obstacles.delete(x);
        }
    }

    return ans.reverse();
};