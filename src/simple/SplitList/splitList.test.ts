import {splitList} from "./splitList";

const testCases = [
    {input: [1, 2, 3, 4, 5, 6], expected: [[1, 2, 3], [4, 5, 6]]},
    {input: [1, 2, 3], expected: [[1, 2], [3]]},
    {input: [1], expected: [[1], []]},
    {input: [], expected: [[], []]},
];
testCases.forEach(({input, expected}) => {
    it(`expected :${expected}`, () => {
        expect(splitList(input)).toEqual(expected)
    })
});