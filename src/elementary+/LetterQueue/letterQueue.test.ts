import {LetterQueue} from "./letterQueue";

const testCases = [
    {input: ['PUSH A',
            'POP',
            'POP',
            'PUSH Z',
            'PUSH D',
            'PUSH O',
            'POP',
            'PUSH T'], expected: 'DOT'},
    {input: ['POP', 'POP'], expected: ''},
    {input: ['PUSH H', 'PUSH I'], expected: 'HI'},
    {input: [], expected: ''},
];

testCases.forEach(({input, expected}) => {
    const solution = new LetterQueue(input);
    it(`expected :${expected}`, () => {
        expect(solution.solution()).toEqual(expected)
    });
});