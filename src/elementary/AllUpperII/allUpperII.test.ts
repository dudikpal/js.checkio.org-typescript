import {AllUpperII} from "./allUpperII";

const testCases = [
    {input: 'ALL UPPER', expected: true},
    {input: 'all lower', expected: false},
    {input: 'mixed UPPER and lower', expected: false},
    {input: '', expected: false},
    {input: '     ', expected: false},
    {input: '123', expected: false},
];

testCases.forEach(({input, expected}) => {
    const solution = new AllUpperII(input);
    it(`expected :${expected}`, () => {
        expect(solution.solution()).toEqual(expected)
    });
});