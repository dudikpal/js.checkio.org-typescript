import {absoluteSorting} from "./absoluteSorting";

const testCases = [
    {input: [-20, -5, 10, 15], expected: [-5, 10, 15, -20]},
    {input: [1, 2, 3, 0], expected: [0, 1, 2, 3]},
    {input: [-1, -2, -3, 0], expected: [0, -1, -2, -3]},
];
testCases.forEach(({input, expected}) => {
    it(`expected :${expected}`, () => {
        expect(absoluteSorting(input)).toEqual(expected)
    })
});