const deleteValue = require('./delete.js')

test('Delete value from tree', () => {
    expect(deleteValue().toEqual('hello'))
})