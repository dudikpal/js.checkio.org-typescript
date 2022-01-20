import {allTheSame} from "./allTheSame";

const testCases = [
    {input: [1, 1, 1], expected: true},
    {input: [1, 2, 1], expected: false},
    {input: ['a', 'a', 'a'], expected: true},
    {input: [], expected: true},
];
testCases.forEach(({input, expected}) => {
    it(`expected :${expected}`, () => {
        expect(allTheSame(input)).toEqual(expected)
    })
});