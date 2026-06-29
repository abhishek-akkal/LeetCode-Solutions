class TrieNode {
    constructor() {
        this.children = new Array(26).fill(null);
        this.bestIndex = -1;
    }
}

var stringIndices = function(wordsContainer, wordsQuery) {

    const root = new TrieNode();

    function better(idx1, idx2) {

        if (idx2 === -1) return true;

        if (wordsContainer[idx1].length < wordsContainer[idx2].length) {
            return true;
        }

        if (
            wordsContainer[idx1].length === wordsContainer[idx2].length &&
            idx1 < idx2
        ) {
            return true;
        }

        return false;
    }

    function insert(word, index) {

        let node = root;

        if (better(index, node.bestIndex)) {
            node.bestIndex = index;
        }

        const reversed = word.split("").reverse().join("");

        for (let ch of reversed) {

            const c = ch.charCodeAt(0) - 97;

            if (node.children[c] === null) {
                node.children[c] = new TrieNode();
            }

            node = node.children[c];

            if (better(index, node.bestIndex)) {
                node.bestIndex = index;
            }
        }
    }

    function search(word) {

        let node = root;

        const reversed = word.split("").reverse().join("");

        for (let ch of reversed) {

            const c = ch.charCodeAt(0) - 97;

            if (node.children[c] === null) {
                break;
            }

            node = node.children[c];
        }

        return node.bestIndex;
    }

    for (let i = 0; i < wordsContainer.length; i++) {
        insert(wordsContainer[i], i);
    }

    const ans = [];

    for (let word of wordsQuery) {
        ans.push(search(word));
    }

    return ans;
};