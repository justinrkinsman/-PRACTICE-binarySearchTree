let array = [1, 2, 3, 4, 5, 6, 7]

let start = 0
let end = array.length - 1
let mid = Math.floor((start+end)/2)

class Node {
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor(array){
        this.root = sortArray(array)
    }
}

function removeDuplicates(arr) {
    let newArr = [...new Set(arr)]
    return newArr
}

function sortArray(arr) {
    arr.sort((a, b) => a - b)
    let array = removeDuplicates(arr)
    let start = 0
    let end = array.length - 1
    let mid = Math.floor((start+end)/2)
    let root = array[mid]
    return root
}

/*
function sortedArrayToBST(arr, start, end){
    if (start > end){
        return null
    }
    let mid = Math.floor(start + end)/2
    let node = new Node(arr[mid])
    node.left = sortedArrayToBST(arr, start, mid - 1);
    node.right = sortedArrayToBST(arr, mid + 1, end)
}

*/

//console.log(sortArray([3, 3, 1, 1, 5, 8, 7, 8]))

module.exports = sortArray