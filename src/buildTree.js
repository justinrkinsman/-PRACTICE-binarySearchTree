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
        this.root = buildTree()
    }
}

function buildTree(arr) {
    arr.sort((a, b) => a - b)
    let start = 0
    let end = arr.length - 1
    let mid = Math.floor((start+end)/2)
    let root = arr[mid]
    return root
}

console.log(buildTree)

module.exports = buildTree