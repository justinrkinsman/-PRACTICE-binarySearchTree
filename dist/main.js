/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("/*function sortedArrayToBST(arr, start, end)\n{\n    if (start > end)\n    {\n        return null;\n    }\n    var mid = parseInt((start + end) / 2);\n    var node = new Node(arr[mid]);\n    node.left = sortedArrayToBST(arr, start, mid - 1);\n    node.right = sortedArrayToBST(arr, mid + 1, end);\n    return node;\n}\nfunction preOrder(node)\n{\n    if (node == null)\n    {\n        return;\n    }\n    document.write(node.data + \" \");\n    preOrder(node.left);\n    preOrder(node.right);\n}\n\nroot = sortedArrayToBST(arr, 0, n - 1);\ndocument.write(\"Preorder traversal of constructed BST<br>\");\npreOrder(root);*/\n\nclass Node {\n    constructor(data){\n        this.data = data;\n        this.left = null;\n        this.right = null;\n    }\n}\n\nclass Tree {\n    constructor(array){\n        this.root = buildTree(array)\n    }\n}\n\nfunction removeDuplicates(arr) {\n    let newArr = [...new Set(arr)]\n    return newArr\n}\n\nfunction buildTree(arr) {\n    arr.sort((a, b) => a - b)\n    let array = removeDuplicates(arr)\n    let start = 0\n    let end = array.length - 1\n    let mid = Math.floor((start+end)/2)\n    let root = array[mid]\n    return root\n}\n\nfunction sortedArrayToBST(arr, start, end){\n    if (start > end){\n        return null\n    }\n    arr.sort((a, b) => a - b)\n    let array = removeDuplicates(arr)\n    let mid = Math.floor((start + end)/2)\n    let node = new Node(array[mid])\n    node.left = sortedArrayToBST(array, start, mid - 1);\n    node.right = sortedArrayToBST(array, mid + 1, end)\n    return node\n}\n\n//let tree = new Tree([100, 200, 300])\nlet useThisArr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]\n\nfunction insertRec(root, key){\n    if (root == null){\n        root = new Node(key)\n        useThisArr.push(key)\n        return root\n    }\n    if (key < root.data){\n        root.left = insertRec(root.left, key)\n    }else if (key > root.data){\n        root.right = insertRec(root.right, key)\n    }\n    return root\n}\n\nfunction deleteRec(root, data) {\n    if (root == null)\n        return root;\n    \n    if (data < root.data)\n        root.left = deleteRec(root.left, data);\n    else if (data > root.data)\n        root.right = deleteRec(root.right, data);\n    \n    // if key is same as root's\n    // key, then This is the\n    // node to be deleted\n    else {\n    // node with only one child or no child\n    if (root.left == null)\n        return root.right;\n    else if (root.right == null)\n        return root.left;\n    \n    // node with two children: Get the inorder\n    // successor (smallest in the right subtree)\n    root.data = minValue(root.right);\n    \n    // Delete the inorder successor\n    root.right = deleteRec(root.right, root.data);\n    }\n    \n    return root;\n    }\n    \n    function minValue(root)\n    {\n        let minv = root.data;\n            while (root.left != null)\n            {\n                minv = root.left.data;\n                root = root.left;\n            }\n            return minv;\n    }\n    \nconsole.log(buildTree([2, 4, 1, 6, 7]))\n//let root = null\nconsole.log(useThisArr)\nconsole.log(insertRec(sortedArrayToBST(useThisArr, 0, (useThisArr.length - 1)), 6))\nconsole.log(useThisArr)\n//console.log(insertRec(sort))\nconsole.log(deleteRec(sortedArrayToBST(useThisArr, 0, (useThisArr.length - 1)), 3))\n\n\n//# sourceURL=webpack://binarysearchtree/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;