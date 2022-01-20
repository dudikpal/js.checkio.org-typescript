import {goesAfter} from "./goesRightAfter";

const testCases = [
    {input: 'world', char1: 'o', char2: 'r', expected: true},
    {input: 'worldwar', char1: 'w', char2: 'a', expected: false},
    {input: 'alma', char1: 'a', char2: 'a', expected: false},
    {input: 'Alma', char1: 'a', char2: 'l', expected: false},
    {input: '', char1: 'a', char2: 'l', expected: false},
];
testCases.forEach(({input, expected, char1, char2}) => {
    it(`expected :${expected}`, () => {
        expect(goesAfter(input, char1, char2)).toEqual(expected)
    })
});