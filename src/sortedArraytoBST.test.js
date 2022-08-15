const sortedArrayToBST = require('./sortedArraytoBST.js')

test("initial test", () => {
    expect(sortedArrayToBST([1, 2, 3], 0, 3-1)).toEqual({"data": 2, "left": {"data": 1, "left": null, "right": null}, "right": {"data": 3, "left": null, "right": null}})
})