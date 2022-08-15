/*function sortedArrayToBST(arr, start, end)
{
    if (start > end)
    {
        return null;
    }
    var mid = parseInt((start + end) / 2);
    var node = new Node(arr[mid]);
    node.left = sortedArrayToBST(arr, start, mid - 1);
    node.right = sortedArrayToBST(arr, mid + 1, end);
    return node;
}
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
        this.root = buildTree(array)
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

//let tree = new Tree([100, 200, 300])
console.log(buildTree([2, 4, 1, 6, 7]))
let useThisArr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]
console.log(sortedArrayToBST(useThisArr, 0, (useThisArr.length - 1)))

//let root = null