const buildTree = require("./buildTree.js");

test('Initial test', () => {
    //let array = [5, 3, 4, 6, 1, 2]
    
    function buildTreeTest(arr) {
        arr.sort((a, b) => a - b)
        let start = 0
        let end = arr.length - 1
        let mid = Math.floor((start+end)/2)
        let root = arr[mid]
        return root
    }
    expect(buildTreeTest([5, 3, 4, 6, 1, 2])).toEqual(3)
})

test('Test tree', () => {
    class Tree {
        constructor(arr){
            this.root = buildTree(arr)
        }
    }
    let testTree = new Tree([1, 2, 3, 4])
    expect(testTree.root).toEqual(2)
})

test('Remove duplicates', () => {
    function removeDuplicates(arr) {
        //let arr = [1, 1, 2, 3, 3, 5, 8, 8]
        let newArr = [...new Set(arr)]
        return newArr
    }
    expect(removeDuplicates([1, 1, 2, 3, 3, 5, 8, 8])).toEqual([1, 2, 3, 5, 8])
})