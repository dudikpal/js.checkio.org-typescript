import {MostWantedLetter} from "./mostWantedLetter";

const testCases = [
    {input: 'Hello World!', expected: 'l'},
    {input: 'How do you do?', expected: 'o'},
    {input: 'One', expected: 'e'},
    {input: 'Oops!', expected: 'o'},
    {input: 'AAaooo!!!!', expected: 'a'},
];


testCases.forEach(({input, expected}) => {
    const solution = new MostWantedLetter(input);
    it(`expected :${expected}`, () => {
        expect(solution.solution()).toEqual(expected)
    });
});