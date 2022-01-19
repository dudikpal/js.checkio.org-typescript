import {frequencySort} from "./sortArrayByElementFrequency";

const testCases = [
    {input: [4, 6, 2, 2, 6, 4, 4, 4], expected: [4, 4, 4, 4, 6, 6, 2, 2]},
    {input: [4, 6, 2, 2, 2, 6, 4, 4, 4], expected: [4, 4, 4, 4, 2, 2, 2, 6, 6]},
    {input: [4,6,2,2,6,4,4,4], expected: [4, 4, 4, 4, 6, 6, 2, 2]},
    {input: ['bob', 'bob', 'carl', 'alex', 'bob'], expected: ['bob', 'bob', 'bob', 'carl', 'alex']},
    {input: [17, 99, 42], expected: [17, 99, 42]},
    {input: [], expected: []},

];
testCases.forEach(({input, expected}) => {
    it(`expected :${expected}`, () => {
        expect(frequencySort(input)).toEqual(expected)
    })
});