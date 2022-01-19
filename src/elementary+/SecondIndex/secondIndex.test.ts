import {secondIndex} from "./secondIndex";

const testCases = [
    {input: 'sims', index: 's', expected: 3},
    {input: 'find the river', index: 'e', expected: 12},
    {input: 'find the river', index: 'w', expected: undefined},
    {input: 'find the river', index: ' ', expected: 8},
    {input: 'hi mayor', index: ' ', expected: undefined}
];
testCases.forEach(({input, index, expected}) => {
    it(`input: ${input}, expected :${expected}`, () => {
        expect(secondIndex(input, index)).toBe(expected)
    })
});