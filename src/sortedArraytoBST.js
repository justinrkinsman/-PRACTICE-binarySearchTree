  /*
function preOrder(node)
{
    if (node == null)
    {
        return;
    }
    document.write(node.data + " ");
    preOrder(node.left);
    preOrder(node.right);
}

root = sortedArrayToBST(arr, 0, n - 1);
document.write("Preorder traversal of constructed BST<br>");
preOrder(root);*/

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

function removeDuplicates(arr) {
    let newArr = [...new Set(arr)]
    return newArr
}

function buildTree(arr) {
    arr.sort((a, b) => a - b)
    let array = removeDuplicates(arr)
    let start = 0
    let end = array.length - 1
    let mid = Math.floor((start+end)/2)
    let root = array[mid]
    return root
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

module.exports = sortedArrayToBST