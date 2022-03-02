import {SecretMessage} from "./secretMessage";

const testCases = [
    {input: 'How are you? Eh, ok. Low or Lower? '
            + 'Ohhh.', expected: 'HELLO'},
    {input: 'hello world!', expected: ''},
    {input: 'HELLO WORLD!!!', expected: 'HELLOWORLD'},
];

testCases.forEach(({input, expected}) => {
    const solution = new SecretMessage(input);
    it(`expected :${expected}`, () => {
        expect(solution.solution()).toEqual(expected)
    });
});