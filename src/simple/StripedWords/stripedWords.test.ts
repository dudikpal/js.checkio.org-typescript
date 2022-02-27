import {StripedWords} from "./stripedWords";

const testCases = [
    {input: 'My name is ...', expected: 3},
    {input: 'Hello world', expected: 0},
    {input: 'A quantity of striped words.', expected: 1},
    {input: 'Dog,cat,mouse,bird.Human.', expected: 3},
    {input: '1st 2a ab3er root rate', expected: 1},
];
testCases.forEach(({input, expected}) => {
    const solution = new StripedWords(input);
    it(`expected :${expected}`, () => {
        expect(solution.solution()).toEqual(expected)
    });
});