import {translate} from "./birdLanguage";

const testCases = [
    {input: 'hieeelalaooo', expected: 'hello'},
    {input: 'hoooowe yyyooouuu duoooiiine', expected: 'how you doin'},
    {input: 'aaa bo cy da eee fe', expected: 'a b c d e f'},
    {input: 'sooooso aaaaaaaaa', expected: 'sos aaa'},
    {input: 'do', expected: 'd'},
];
testCases.forEach(({input, expected}) => {
    it(`expected :${expected}`, () => {
        expect(translate(input)).toEqual(expected)
    })
});