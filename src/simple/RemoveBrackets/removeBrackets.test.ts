import {RemoveBrackets} from "./removeBrackets";

const testCases = [
    {input: '(()()', expected: '()()'},
    {input: '[][[[', expected: '[]'},
    {input: '[[(}]]', expected: '[[]]'},
    {input: '[[{}()]]', expected: '[[{}()]]'},
    {input: '[[[[[[', expected: ''},
];

testCases.forEach(({input, expected}) => {
    const solution = new RemoveBrackets(input);
    it(`expected :${expected}`, () => {
        expect(solution.solution()).toEqual(expected)
    });
});