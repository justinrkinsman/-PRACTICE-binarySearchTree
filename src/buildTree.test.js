const buildTree = require("./buildTree.js");

test('Initial test', () => {
    expect(buildTree([1, 2, 3, 4])).toEqual(3)
})