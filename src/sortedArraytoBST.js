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

function sortedArrayToBST(){

}

module.exports = sortedArrayToBST