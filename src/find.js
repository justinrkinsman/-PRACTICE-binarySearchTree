function find(root, data) {
    if (data === root.data || data === null)   
        return root
    if (data < root.data)
        find(root.left, data)
    if (data > root.data)
        find(root.right, data)
}

//module.exports = find