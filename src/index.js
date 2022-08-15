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
let useThisArr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]

function insertRec(root, key){
    if (root == null){
        root = new Node(key)
        useThisArr.push(key)
        return root
    }
    if (key < root.data){
        root.left = insertRec(root.left, key)
    }else if (key > root.data){
        root.right = insertRec(root.right, key)
    }
    return root
}

function deleteRec(root, data) {
    if (root == null)
        return root;
    
    if (data < root.data)
        root.left = deleteRec(root.left, data);
    else if (data > root.data)
        root.right = deleteRec(root.right, data);
    
    // if key is same as root's
    // key, then This is the
    // node to be deleted
    else {
    // node with only one child or no child
    if (root.left == null)
        return root.right;
    else if (root.right == null)
        return root.left;
    
    // node with two children: Get the inorder
    // successor (smallest in the right subtree)
    root.data = minValue(root.right);
    
    // Delete the inorder successor
    root.right = deleteRec(root.right, root.data);
    }
    
    return root;
    }
    
    function minValue(root)
    {
        let minv = root.data;
            while (root.left != null)
            {
                minv = root.left.data;
                root = root.left;
            }
            return minv;
    }
    
function find(root, data) {
    if (data === root.data)   
        return root
    if (data < root.data)
        find(root.left, data)
    if (data > root.data)
        find(root.right, data)
}

//console.log(buildTree([2, 4, 1, 6, 7]))
//console.log(useThisArr)
//console.log(insertRec(sortedArrayToBST(useThisArr, 0, (useThisArr.length - 1)), 6))
//console.log(useThisArr)
//console.log(insertRec(sort))
//console.log(deleteRec(sortedArrayToBST(useThisArr, 0, (useThisArr.length - 1)), 3))

console.log(sortedArrayToBST(useThisArr, 0, (useThisArr.length - 1)))
console.log(find(sortedArrayToBST(useThisArr, 0, (useThisArr.length - 1)), 4))