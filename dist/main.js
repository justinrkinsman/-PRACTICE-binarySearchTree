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

eval("/*function sortedArrayToBST(arr, start, end)\n{\n    if (start > end)\n    {\n        return null;\n    }\n    var mid = parseInt((start + end) / 2);\n    var node = new Node(arr[mid]);\n    node.left = sortedArrayToBST(arr, start, mid - 1);\n    node.right = sortedArrayToBST(arr, mid + 1, end);\n    return node;\n}\nfunction preOrder(node)\n{\n    if (node == null)\n    {\n        return;\n    }\n    document.write(node.data + \" \");\n    preOrder(node.left);\n    preOrder(node.right);\n}\n\nroot = sortedArrayToBST(arr, 0, n - 1);\ndocument.write(\"Preorder traversal of constructed BST<br>\");\npreOrder(root);*/\n\nclass Node {\n    constructor(data){\n        this.data = data;\n        this.left = null;\n        this.right = null;\n    }\n}\n\nclass Tree {\n    constructor(array){\n        this.root = buildTree(array)\n    }\n}\n\nfunction removeDuplicates(arr) {\n    let newArr = [...new Set(arr)]\n    return newArr\n}\n\nfunction buildTree(arr) {\n    arr.sort((a, b) => a - b)\n    let array = removeDuplicates(arr)\n    let start = 0\n    let end = array.length - 1\n    let mid = Math.floor((start+end)/2)\n    let root = array[mid]\n    return root\n}\n\nfunction sortedArrayToBST(arr, start, end){\n    \n}\n\n//let root = null\n\n//# sourceURL=webpack://binarysearchtree/./src/index.js?");

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