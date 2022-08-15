class Node {
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function insertRec(root, key){
    if (root == null){
        root = new Node(key)
        return root
    }
    if (key < root.data){
        root.left = insertRec(root.left, key)
    }else if (key > root.data){
        root.right = insertRec(root.right, key)
    }
    return root
}

//module.exports = insertRec