import {follow} from "./followInstructions";

const testCases = [
    {input: 'fflff', expected: [-1, 4]},
    {input: 'ffrff', expected: [1, 4]},
    {input: 'fblr', expected: [0, 0]},
];
testCases.forEach(({input, expected}) => {
    it(`expected :${expected}`, () => {
        expect(follow(input)).toEqual(expected)
    })
});