import {sumByTypes} from "./sumByType";

const testCases = [
    {input: [], expected: ['', 0]},
    {input: [1, 2, 3], expected: ['', 6]},
    {input: ['1', 2, 3], expected: ['1', 5]},
    {input: ['1', '2', 3], expected: ['12', 3]},
    {input: ['1', '2', '3'], expected: ['123', 0]},
    {input: ['size', 12, 'in', 45, 0], expected: ['sizein', 57]},
];
testCases.forEach(({input, expected}) => {
    it(`expected :${expected}`, () => {
        expect(sumByTypes(input)).toEqual(expected)
    })
});