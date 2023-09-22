const { default: TestRunner } = require("jest-runner")
const addFive = require('./addFive')

test('runs the number plus 5', () => {
    expect(addFive(1)).toBe(6)
})

test('should be equal to 10', () => {
    expect(addFive(5)).toBe(10)
})