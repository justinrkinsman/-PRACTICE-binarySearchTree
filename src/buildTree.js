let array = [1, 2, 3, 4, 5, 6, 7]

let start = 0
let end = array.length - 1
let mid = (start+end)/2

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

function buildTree(array) {
    let index = Math.floor(array.length/2)
    let root = array[index]
    return root
}

module.exports = buildTree