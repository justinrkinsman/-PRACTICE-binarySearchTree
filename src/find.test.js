//const find = require('./find.js')
let useThisArr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]

function removeDuplicates(arr) {
    let newArr = [...new Set(arr)]
    return newArr
}

class Node {
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function sortedArrayToBST(arr, start, end){
    if (start > end){
        return null
    }
    arr.sort((a, b) => a - b)
    let array = removeDuplicates(arr)
    let mid = Math.floor((start + end)/2)
    let node = new Node(array[mid])
    node.left = sortedArrayToBST(array, start, mid - 1);
    node.right = sortedArrayToBST(array, mid + 1, end)
    return node
}

function find(root, value) {
    if (root === null || root.data == value)   
        return root
    if (root.data < value)
        return find(root.right, value)
    return find(root.left, value)
}

test("Find value in tree", () => {
    expect(find(sortedArrayToBST(useThisArr, 0, (useThisArr.length - 1)), 9)).toEqual({"data": 9, "left": {"data": 4, "left": {"data": 1, "left": null, "right": {"data": 3, "left": null, "right": null}}, "right": {"data": 7, "left": {"data": 5, "left": null, "right": null}, "right": {"data": 8, "left": null, "right": null}}}, "right": {"data": 6345, "left": {"data": 67, "left": {"data": 23, "left": null, "right": null}, "right": {"data": 324, "left": null, "right": null}}, "right": {"data": undefined, "left": {"data": undefined, "left": null, "right": null}, "right": {"data": undefined, "left": null, "right": null}}}})
})

test("Find values if less than root.data", () => {
    expect(find(sortedArrayToBST(useThisArr, 0, (useThisArr.length - 1)), 4)).toEqual({"data": 4, "left": {"data": 1, "left": null, "right": {"data": 3, "left": null, "right": null}}, "right": {"data": 5, "left": null, "right": {"data": 7, "left": null, "right": null}}})
})

test("Find values in left subtree more than one level deep", () => {
    expect(find(sortedArrayToBST(useThisArr, 0, (useThisArr.length - 1)), 1)).toEqual({"data": 1, "left": null, "right": {"data": 3, "left": null, "right": null}})
})

test('Find value if greater than root.data', () => {
    expect(find(sortedArrayToBST(useThisArr, 0, (useThisArr.length - 6345)), 3)).toEqual({"data": 3, "left": null, "right": null})
})