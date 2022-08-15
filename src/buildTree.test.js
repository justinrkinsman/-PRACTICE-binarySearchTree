//const buildTree = require("./buildTree.js");

test('Initial test', () => {
    let array = [1, 2, 3, 4, 5, 6]
    let start = 0
    let end = array.length - 1
    let mid = Math.floor((start+end)/2)
    function buildTreeTest(arr) {
        let root = arr[mid]
        return root
    }
    expect(buildTreeTest(array)).toEqual(3)
})