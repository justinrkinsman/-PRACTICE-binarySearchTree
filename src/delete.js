function deleteValue() {
if (root == null)
return root;

if (key < root.key)
root.left = deleteRec(root.left, key);
else if (key > root.key)
root.right = deleteRec(root.right, key);

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
root.key = minValue(root.right);

// Delete the inorder successor
root.right = deleteRec(root.right, root.key);
}

return root;
}

function minValue(root)
{
    let minv = root.key;
        while (root.left != null)
        {
            minv = root.left.key;
            root = root.left;
        }
        return minv;
}

module.exports = deleteValue