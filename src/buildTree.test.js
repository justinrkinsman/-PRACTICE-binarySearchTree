const buildTree = require("./buildTree.js");

test('Initial test', () => {
    let array = [5, 3, 4, 6, 1, 2]
    let start = 0
    let end = array.length - 1
    let mid = Math.floor((start+end)/2)
    function buildTreeTest(arr) {
        arr.sort((a, b) => a - b)
        let root = arr[mid]
        return root
    }
    expect(buildTreeTest(array)).toEqual(3)
})